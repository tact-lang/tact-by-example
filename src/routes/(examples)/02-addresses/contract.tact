import "@stdlib/deploy";

contract Addresses with Deployable {

    // these are three representations of the same address
    a1: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)
    a2: Address = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
    a3: Address;
    
    a4: Address;
    a5: Address;

    init() {
        // this is the third representation of the same address
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        
        // here are a few other important addresses
        self.a4 = newAddress(0, 0); // the zero address (nobody)
        self.a5 = myAddress();      // address of this contract
    }

    receive("show all") {
        // addresses cannot currently be dumped
        // TODO: dump(self.a1);
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

    get fun result(): Address {
        return self.a1;
    }
}