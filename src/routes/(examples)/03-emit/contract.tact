import "@stdlib/deploy";

message TransferEvent {
    amount: Int as coins;
    recipient: Address;
}

message StakeEvent {
    amount: Int as coins;
}

contract Emit with Deployable {

    init() {}

    receive("action") {
        // handle action here
        // ...
        // emit log that the action was handled
        emit("Action handled".asComment());
    }

    receive("transfer") {
        // handle transfer here
        // ...
        // emit log that the transfer happened
        emit(TransferEvent{amount: ton("1.25"), recipient: sender()}.toCell());
    }

    receive("stake") {
        // handle stake here
        // ...
        // emit log that stake happened
        emit(StakeEvent{amount: ton("0.007")}.toCell());
    }
}