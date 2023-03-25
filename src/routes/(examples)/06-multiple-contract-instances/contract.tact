import "@stdlib/deploy";

// we're going to have multiple instances of this contract, each with a different seqno
contract Todo with Deployable {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }
 
    // each instance can calculate the address of every other instance
    get fun addressOf(otherSeqno: Int): Address {
        let init: StateInit = initOf Todo(otherSeqno);
        return contractAddress(init);
    }
}