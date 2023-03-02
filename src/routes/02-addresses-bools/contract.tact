import "@stdlib/deploy";

contract AddressesBools with Deployable {
 
    // addresses
    a1: Address;
    a2: Address;
    a3: Address;
    a4: Address;
    a5: Address;

    // bools
    b1: Bool = true;
    b2: Bool = false;
    b3: Bool;

    init() {
        // addressses
        self.a1 = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (foundation wallet)
        self.a2 = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        self.a4 = newAddress(0, 0); // the zero address
        self.a5 = myAddress();      // address of this contract

        // bools
        self.b3 = !self.b2;
    }

    receive("address dump") {
        ///dump(self.a1);
        ///dump(self.a2);
        ///dump(self.a3);
        ///dump(self.a4);
        ///dump(self.a5);
    }

    receive("address ops") {
        // temporary variable
        let a: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)

        dump(a == self.a1);
        dump(a == self.a2);
        dump(a == self.a3);
        dump(a == self.a4);
        dump(a != self.a5);
    }

    receive("bool dump") {
        dump(self.b1);
        dump(self.b2);
        dump(self.b3);
    }

    receive("bool ops") {
        // temporary variable
        let b: Bool = true;
        dump(b);

        b = self.b1 && self.b2 || self.b3;
        dump(b);

        dump(self.b1 == true);
        dump(self.b1 == self.b2);
        dump(self.b1 != self.b2);
    }
}