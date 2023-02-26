# A Simple Counter

This contract has a state variable that persists between contract calls, the counter value. In runtime it's an `Int` but when persisted it's encoded as a `uint32` - a 32-bit unsigned integer. Contracts pay rent in proportion to the amount of persistent space they consume, so compact representations are encouraged.

State variables should be initialized in `init()` that runs on deployment of the contract.

## Receiving messages

This contract can receive messages. Unlike getters that are read-only and are free to call, messages can do write operations and change the persistent state. Incoming messages are processed in `receive()` methods as transactions and cost gas for the sender.

After deploying the contract, send the `increment` message by pressing the <span class="mdButton grape">Send increment</span> button and then call the getter to see that the value indeed changed.
