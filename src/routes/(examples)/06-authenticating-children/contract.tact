import "@stdlib/deploy";

message HiFromParent {
    greeting: String;
}

message HiFromChild {
    fromSeqno: Int as uint64;
    greeting: String;
}

// we have multiple instances of the children
contract TodoChild {

    parent: Address; // we added this variable so a child always knows who the parent is
    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(parent: Address, seqno: Int) {
        self.parent = parent;
        self.seqno = seqno;
    }

    receive(msg: HiFromParent) {
        require(sender() == self.parent, "Access denied");
        // only the real parent can get here
        dump(self.seqno);
        dump("handling hi from parent");
        reply(HiFromChild{fromSeqno: self.seqno, greeting: "sup"}.toCell());
    }
}

// we have one instance of the parent
contract TodoParent with Deployable {
 
    init() {}

    receive("greet 3") {
        let i: Int = 0;
        repeat (3) {
            i = i + 1;
            let init: StateInit = initOf TodoChild(myAddress(), i);
            send(SendParameters{
                to: contractAddress(init),
                body: HiFromParent{greeting: "darling"}.toCell(),
                value: ton("0.1"),              // pay for message and potential deployment
                mode: SendIgnoreErrors,
                code: init.code,                // if child is not deployed, also deploy it
                data: init.data
            });
        }
    }

    receive(msg: HiFromChild) {
        let expectedAddress: Address = contractAddress(initOf TodoChild(myAddress(), msg.fromSeqno));
        require(sender() == expectedAddress, "Access denied");
        // only the real children can get here
        dump("handling hi from child");
        dump(msg.fromSeqno);
    }
}