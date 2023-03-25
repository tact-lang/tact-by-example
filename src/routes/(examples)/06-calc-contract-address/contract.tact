import "@stdlib/deploy";

// first contract
contract Todo1 with Deployable {

    seqno: Int as uint64 = 1; // the code specifies the index (sequence number)

    init() {}

    get fun myAddress(): Address {
        return myAddress();
    }

    get fun otherAddress(): Address {
        let init: StateInit = initOf Todo2();
        return contractAddress(init);
    }
}

// second contract
contract Todo2 with Deployable {

    seqno: Int as uint64 = 2; // the code specifies the index (sequence number)

    init() {}

    get fun myAddress(): Address {
        return myAddress();
    }

    get fun otherAddress(): Address {
        let init: StateInit = initOf Todo1();
        return contractAddress(init);
    }
}