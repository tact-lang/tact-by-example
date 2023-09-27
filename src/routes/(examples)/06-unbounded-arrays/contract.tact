import "@stdlib/deploy";
import "@stdlib/ownable";

message NewTodo {
    task: String;
}

message NewTodoResponse {
    seqno: Int as uint256;
}

message CompleteTodo {
    seqno: Int as uint256;
}

// users are supposed to interact with this parent contract only
contract TodoParent with Deployable, Ownable {
 
    owner: Address;
    numTodos: Int as uint256 = 0;

    init() {
        self.owner = sender(); // set the owner as the deployer
    }

    // anybody can add a new todo, not just the owner
    receive(msg: NewTodo) {
        self.numTodos = self.numTodos + 1;
        let init: StateInit = initOf TodoChild(myAddress(), self.numTodos);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalSetTask{task: msg.task}.toCell(),
            value: ton("0.02"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // prepare the initial code when deploying the child contract
            data: init.data
        });
        self.reply(NewTodoResponse{seqno: self.numTodos}.toCell()); // this will return excess gas to sender
    }

    // only the owner can mark a todo as completed
    receive(msg: CompleteTodo) {
        self.requireOwner();
        require(msg.seqno <= self.numTodos, "Todo does not exist");
        send(SendParameters{ // this will forward excess gas
            to: contractAddress(initOf TodoChild(myAddress(), msg.seqno)),
            body: InternalComplete{excess: sender()}.toCell(),
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingValue + SendIgnoreErrors /// TODO: issues/31
        });
    }

    get fun numTodos(): Int {
        return self.numTodos;
    }

    get fun todoAddress(seqno: Int): Address {
        return contractAddress(initOf TodoChild(myAddress(), seqno));
    }
}

////////////////////////////////////////////////////////////////////////////
// child contract - internal interface that users shouldn't access directly

message InternalSetTask {
    task: String;
}

message InternalComplete {
    excess: Address;
}

struct TodoDetails {
    task: String;
    completed: Bool;
}

contract TodoChild {

    parent: Address;
    seqno: Int as uint256;
    task: String = "";
    completed: Bool = false;
 
    init(parent: Address, seqno: Int) {
        self.parent = parent;
        self.seqno = seqno;
    }

    receive(msg: InternalSetTask) {
        require(sender() == self.parent, "Parent only");
        self.task = msg.task;
    }

    receive(msg: InternalComplete) {
        require(sender() == self.parent, "Parent only");
        self.completed = true;
        send(SendParameters{ // this will return excess gas to original sender
            to: msg.excess,
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingBalance + SendIgnoreErrors /// TODO: issues/31
        });
    }

     get fun details(): TodoDetails {
        return TodoDetails{
            task: self.task, 
            completed: self.completed
        };
    }
}
