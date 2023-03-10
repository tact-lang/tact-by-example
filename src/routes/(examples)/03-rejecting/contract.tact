import "@stdlib/deploy";

message Divide {
    by: Int as uint32;
}

contract Rejecting with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // not meeting the condition will reject the message, revert the transaction and all state changes
    receive("increment") {
        self.val = self.val + 1;
        require(self.val < 5, "Counter is too high");
    }

    // any exceptions during execution will revert the transaction and all state changes
    receive(msg: Divide) {
        self.val = 4;
        self.val = self.val / msg.by;
    }

    // advanced: revert the transaction and throw a specific non-zero exit code manually
    receive("no access") {
        throw(132);
    }
 
    get fun value(): Int {
        return self.val;
    }
}