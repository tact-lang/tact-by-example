import "@stdlib/deploy";

// this message will cause our contract to add an amount to the counter
message Add {
    amount: Int as uint32;
}

// this message will cause our contract to subtract an amount from the counter
message Subtract {
    amount: Int as uint32;
}

// this message will cause our contract to do a complex math operation on the counter
message MultiMath {
    add: Int as uint32;
    subtract: Int as uint32;
    multiply: Int as uint32;
}

contract Receivers with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }

    // handler for the "Add" message - this is a binary message that has an input argument (amount)
    receive(msg: Add) {
        self.val = self.val + msg.amount;
    }

    // handler for the "Subtract" message - this is a different binary message although its format is identical
    receive(msg: Subtract) {
        self.val = self.val - msg.amount;
    }

    // handler for the "MultiMath" message - this is a binary message that holds multiple input arguments
    receive(msg: MultiMath) {
        self.val = self.val + msg.add;
        self.val = self.val - msg.subtract;
        self.val = self.val * msg.multiply;
    }

    // handler for "increment" textual message - this is a textual string message, these cannot carry input arguments
    receive("increment") {
        self.val = self.val + 1;
    }

    // handler for "decrement" textual message - this is a different textual string message, you can have as many as you want
    receive("decrement") {
        self.val = self.val - 1;
    }
 
    get fun value(): Int {
        return self.val;
    }
}