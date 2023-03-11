import "@stdlib/deploy";

message CounterValue {
    value: Int as uint32;
}

////////////////////////////////////////////////////////////////////////////
// this is our famous Counter contract, we've seen it before
// this contract is very annoying, it only allows to increment +1 at a time!
contract Counter with Deployable {

    val: Int as uint32;

    init() {
        self.val = 0;
    }

    // step 6: this contract allows anyone to ask it to increment by 1 (ie. the other contract)
    receive("increment") {
        self.val = self.val + 1;
        reply(CounterValue{value: self.val}.toCell());
    }

    // step 3: this contract replies with its current value to anyone asking (ie. the other contract)
    receive("query") {
        reply(CounterValue{value: self.val}.toCell());
    }

    get fun value(): Int {
        return self.val;
    }
}

message Reach {
    counter: Address;
    target: Int as uint32;
}

////////////////////////////////////////////////////////////////////////////
// let's write a second helper contract to make our lives a little easier
// it will keep incrementing the previous contract as many times as we need!
contract BulkAdder with Deployable {

    target: Int as uint32;

    init() {
        self.target = 0;
    }

    // step 1: users will send this message to tell us what target value we need to reach
    receive(msg: Reach) {
        self.target = msg.target;
        // step 2: this contract will query the current counter value from the other contract
        send(SendParameters{
            to: msg.counter,
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingValue + SendIgnoreErrors, /// TODO: issues/31
            body: "query".asComment()
        });
    }

    // step 4: the other contract will tell us what is its current value by sending us this message
    receive(msg: CounterValue) {
        if (msg.value < self.target) {
            // step 5: if its value is too low, send it another message to increment it by +1 more
            send(SendParameters{
                to: sender(),
                value: 0, /// TODO: same issue 31
                mode: SendRemainingValue + SendIgnoreErrors, /// TODO: https://github.com/tact-lang/tact/issues/31
                body: "increment".asComment()
            });
        }
    }
}