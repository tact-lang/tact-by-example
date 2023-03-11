# Throwing Errors

Processing an incoming message in a transaction isn't always successful. The contract may encounter some error and fail.

This can be due to an explicit decision of the contract author, usually by writing a `require()` on a condition that isn't met, or this may happen implicitly due to some computation error in run-time, like a math overflow.

When an error is thrown, the transaction reverts. This means that all persistent state changes that took place during this transaction, even those that happened before the error was thrown, are all reverted and return to their original values.

## Notifying the sender about the error

How would the sender of the incoming message know that the message they had sent was rejected due to an error?

All communication is via messages, so naturally the sender should receive a message about the error. TON will actually return the original message back to the sender and mark it as *bounced* - just like a snail mail letter that couldn't be delivered.