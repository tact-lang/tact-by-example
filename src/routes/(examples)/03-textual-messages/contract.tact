import "@stdlib/deploy";

contract Receivers with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // this receiver is called when the string "increment" is received in an incoming string comment message
    receive("increment") {
        self.val = self.val + 1;
    }

    // this receiver is called when the string "decrement" is received in an incoming string comment message
    receive("decrement") {
        self.val = self.val - 1;
    }

    // this receiver is called when the string "increment by 2" is received in an incoming string comment message
    receive("increment by 2") {
        self.val = self.val + 2;
    }

    // if none of the previous receivers match the comment string, this one is called
    receive(msg: String) {
        dump("unknown textual message received:");
        dump(msg);
    }
 
    get fun value(): Int {
        return self.val;
    }
}