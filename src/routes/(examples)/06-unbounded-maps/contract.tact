import "@stdlib/deploy";

struct Metadata {
    symbol: String;
    totalSupply: Int;
}

message Transfer {
    amount: Int as coins;
    to: Address;
}

// the token parent, mostly used to query general metadata and get children addresses
contract TokenParent with Deployable {
 
    symbol: String;
    totalSupply: Int as coins;

    init() {
        self.symbol = "SHIB";
        self.totalSupply = 500 * pow(10,9);
        self.mint(self.totalSupply, sender()); // mint the entire total supply to deployer
    }

    fun mint(amount: Int, to: Address) {
        let init: StateInit = initOf TokenChild(myAddress(), to);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalAddTokens{amount: amount, origin: myAddress()}.toCell(),
            value: ton("0.03"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // deploy the child if needed
            data: init.data
        });
    }

    get fun metadata(): Metadata {
        return Metadata{symbol: self.symbol, totalSupply: self.totalSupply};
    }

    get fun childAddress(owner: Address): Address {
        return contractAddress(initOf TokenChild(myAddress(), owner));
    }
}

////////////////////////////////////////////////////////////////////////////
// child contract - the Transfer message is sent by users directly to a child

message InternalAddTokens {
    amount: Int as coins;
    origin: Address;
}

contract TokenChild {

    parent: Address;
    owner: Address;         // every child holds the balance of a different owner
    balance: Int as coins;  // this is the balance of the owner
 
    init(parent: Address, owner: Address) {
        self.parent = parent;
        self.owner = owner;
        self.balance = 0;
    }

    // sent by users to initiate a new transfer
    receive(msg: Transfer) {
        require(sender() == self.owner, "Access denied");
        require(self.balance >= msg.amount, "Insufficient balance");
        self.balance = self.balance - msg.amount;
        let init: StateInit = initOf TokenChild(self.parent, msg.to);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalAddTokens{amount: msg.amount, origin: self.owner}.toCell(),
            value: ton("0.03"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // deploy the child if needed
            data: init.data
        });
        reply("transferred".asComment());
    }

    // internal message sent by one child to another to update balances
    receive(msg: InternalAddTokens) {
        if (msg.origin == self.parent) { // tokens originate in a mint
            require(sender() == self.parent, "Parent only");
        } else { // tokens originate in a Transfer
            require(sender() == contractAddress(initOf TokenChild(self.parent, msg.origin)), "Sibling only");
        }
        self.balance = self.balance + msg.amount;
    }

     get fun balance(): Int {
        return self.balance;
    }
}
