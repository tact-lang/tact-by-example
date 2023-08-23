contract BitWiseOperation {
    a: Bool;
    b: Bool;
    c: Int;
    d: Int;

    init() {
        self.a = true;
        self.b = false;
        self.c = 5;
        self.d = 3;
    }

    get fun Bool_and(): Bool {
        return self.a && self.b; // Will get false
    }

    get fun int_and(): Int {
        return self.c & self.d; // Will get 1
    }

    get fun int_or(): Int {
        return self.c | self.d; // Will get 7
    }

    get fun int_left_shift(): Int {
        return self.c << 1; // Will get 10
    }

    get fun int_right_shift(): Int {
        return self.c >> 1; // Will get 2
    }

    // TODO: Will show up in the nearly future maybe
    // get fun int_xor(): Int {
    //     return self.c ^ self.d; // Will get 6
    // }

    // get fun int_not(): Int {
    //     return ~self.c; // Will get -6
    // }
}

