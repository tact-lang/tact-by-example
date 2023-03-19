# A Simple Counter

This is a simple counter contract that allows users to increment its value.

This contract has a state variable `val` that persists between contract calls - the counter value. When persisted, this variable is encoded `as uint32` - a 32-bit unsigned integer. Contracts pay rent in proportion to the amount of persistent space they consume, so compact representations are encouraged.

State variables should be initialized in `init()` that runs on deployment of the contract.

## Receiving messages

This contract can receive *messages* from users. Unlike getters that are just read-only, messages can do write operations and change the contract's persistent state. Incoming messages are processed in `receive()` methods as transactions and cost gas for the sender.

After deploying the contract, send the `increment` message by pressing the <span class="mdButton grape">Send increment</span> button in order to increase the counter value by one. Afterwards, call the getter `value()` to see that the value indeed changed.
