import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = ton("2.17") + 2 * pow(10, 9);

contract VariablesConsts with Deployable {

    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = ton("1.25") + pow(10, 9);

    // contract variables are persisted in state (cost rent per their specified size) and can change
    contractVar1: Int as coins = ton("1.26") + pow(10, 9);
    contractVar2: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initialization that are calculated in run-time
        self.contractVar2 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages and can change state
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
    }

    // getters are executed by users to query data and can't change state
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100;
        localVar1 = localVar1 + 1;

        // getters can access everything but for read-only operations only
        return arg1 + GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.contractVar1 + localVar1;
    }
}