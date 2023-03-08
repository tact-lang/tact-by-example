import "@stdlib/deploy";

contract Variables with Deployable {

    // contract variables are persisted in state and can change their value between transations
    // as part of the contract's persistent state, they cost rent per their specified size
    contractVar1: Int as coins = 3000 + ton("1.26") + pow(10, 9);
    contractVar2: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initializations that are calculated in run-time
        self.contractVar2 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages and can change state
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
    }

    // getters are executed by users to query data and can't change state
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // getters can access everything but for read-only operations only
        return arg1 + self.contractVar1 + localVar1;
    }
}