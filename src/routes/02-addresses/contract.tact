import "@stdlib/deploy";

contract Addresses with Deployable {
 
    a1: Address;
    a2: Address;
    a3: Address;
    a4: Address;
    a5: Address;

    init() {
        // these are three representations of the same address
        self.a1 = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (foundation wallet)
        self.a2 = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        
        // here are a few other important addresses
        self.a4 = newAddress(0, 0); // the zero address (nobody)
        self.a5 = myAddress();      // address of this contract
    }

    receive("show all") {
        ///dump(self.a1);
        ///dump(self.a2);
        ///dump(self.a3);
        ///dump(self.a4);
        ///dump(self.a5);
    }

    receive("show ops") {
        // temporary variable
        let a: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)

        dump(a == self.a1);
        dump(a == self.a2);
        dump(a == self.a3);
        
        dump(a == self.a4);
        dump(a != self.a5);
    }
}