import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = 1000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = 2000 + ton("1.25") + pow(10, 9);
    
    // if your contract can be in multiple states, constants are an easy alternative to enums
    const STATE_UNPAID: Int = 0;
    const STATE_PAID: Int = 1;
    const STATE_DELIVERED: Int = 2;
    const STATE_DISPUTED: Int = 3;

    init() {}

    get fun sum(): Int {
        // you can read the constants anywhere
        return GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.STATE_PAID;
    }
}