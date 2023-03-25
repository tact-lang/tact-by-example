import "@stdlib/deploy";

// we have multiple instances of the children
contract TodoChild {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }

    // this message handler will just debug print the seqno so we can see when it's called
    receive("identify") {
        dump(self.seqno);
    }
}

// we have one instance of the parent
contract TodoParent with Deployable {

    numChildren: Int as uint64;
 
    init() {
        self.numChildren = 0;
    }

    // this message handler will cause the contract to deploy another child
    receive("deploy another") {
        self.numChildren = self.numChildren + 1;
        let init: StateInit = initOf TodoChild(self.numChildren);
        send(SendParameters{
            to: contractAddress(init),
            value: ton("0.1"),              // pay for message, the deployment and give some TON for storage
            mode: SendIgnoreErrors,
            code: init.code,                // attaching the state init will cause the message to deploy
            data: init.data,
            body: "identify".asComment()    // we must piggyback the deployment on another message
        });
    }

    get fun numChildren(): Int {
        return self.numChildren;
    }
}