import "@stdlib/deploy";

message Add {
    amount: Int as uint32;
}

message Subtract {
    amount: Int as uint32;
}

message MultiMath {
    add: Int as uint32;
    subtract: Int as uint32;
    multiply: Int as uint32;
}

contract Receivers with Deployable {

    val: Int as int64;
    lastSender: Address;
 
    init() {
        self.val = 0;
        self.lastSender = newAddress(0, 0); // zero address
    }
 
    // a textual string message, using the comment field of a transfer (great for Ledger)
    receive("increment") {
        self.val = self.val + 1;
    }

    // a different textual string message, you can have as many as you want
    receive("decrement") {
        self.val = self.val - 1;
    }

    // binary message that can carry input arguments
    receive(msg: Add) {
        self.val = self.val + msg.amount;
    }

    // a different binary message, although its format is identical
    receive(msg: Subtract) {
        self.val = self.val - msg.amount;
    }

    // binary messages can hold multiple arguments
    receive(msg: MultiMath) {
        self.val = self.val + msg.add;
        self.val = self.val - msg.subtract;
        self.val = self.val * msg.multiply;
    }

    receive("hello") {
        // every message is sent from a specific contract address that you can get with sender()
        if (sender() != self.lastSender) {
            self.lastSender = sender();
            dump("hello new sender!");
        }
    }
 
    get fun value(): Int {
        return self.val;
    }
}