import "@stdlib/deploy";

contract SignAndVerify with Deployable {
    public_key: Int;
    init(public_key: Int) {
        self.public_key = public_key;
    }

    receive(msg: Check) {
        require(self.isValid(msg.data, msg.signature), "Invalid");
    }

    fun isValid(data: Cell, signature: Cell): Bool {
        return checkSignature(data.hash(), signature.asSlice(), self.public_key);
    }
}

message Check {
    data: Cell;
    signature: Cell;
}
