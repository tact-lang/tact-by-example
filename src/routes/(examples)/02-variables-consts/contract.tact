import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = 200;
const GLOBAL_CONST2: Int = ton("2.17") + 2 * pow(10, 9);

contract VariablesConsts with Deployable {
 
    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = 100;
    const CONTRACT_CONST2: Int = ton("1.25") + pow(10, 9);

    // contract variables are persisted in state (cost rent per their specified size) and can change
    contractVar1: Int as int32 = 101;
    contractVar2: Int as coins = ton("1.26") + pow(10, 9);
    contractVar3: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initialization that are calculated in run-time
        self.contractVar3 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 102;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
        self.contractVar3 = self.contractVar3 + 1;

        dump(GLOBAL_CONST1);
        dump(GLOBAL_CONST2);
        dump(self.CONTRACT_CONST1);
        dump(self.CONTRACT_CONST2);
        dump(self.contractVar1);
        dump(self.contractVar2);
        dump(self.contractVar3);
        dump(localVar1);
    }

    // getters are executed by users to query data
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 102;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can cannot change in getters

        // getters can access everything but for read-only operations only
        return arg1 + GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.contractVar1 + localVar1;
    }
}