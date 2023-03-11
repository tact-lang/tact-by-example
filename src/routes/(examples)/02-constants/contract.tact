import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GlobalConst1: Int = 1000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    // contract constants are calculated in compile-time and can't change
    const ContractConst1: Int = 2000 + ton("1.25") + pow(10, 9);
    
    // if your contract can be in multiple states, constants are an easy alternative to enums
    const StateUnpaid: Int = 0;
    const StatePaid: Int = 1;
    const StateDelivered: Int = 2;
    const StateDisputed: Int = 3;

    init() {}

    get fun sum(): Int {
        // you can read the constants anywhere
        return GlobalConst1 + self.ContractConst1 + self.StatePaid;
    }
}