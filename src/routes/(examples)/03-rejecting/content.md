# Rejecting Messages

Processing an incoming message in a transaction isn't always successful. The contract may encounter some error and fail the transaction.

This can be due to an explicit decision of the contract author, usually by writing a `require()` on a condition that isn't met, or this may happen implicitly due to some computation error in run-time, like a math overflow.

The folowing things happen when a message is rejected:

* The transaction reverts - meaning all persistent state changes that took place during this transaction, even those that happened before the error was thrown, are all reverted and return to their original values.

* The message will be bounced back to its sender to notify them about the failure. Senders may opt out of a bounced reply by clearing the `bounce` flag, more on this later.

* The compute phase of the transaction will fail and a non-zero exit code returned. Numerical exit codes are a [low-level property](https://ton.org/docs/learn/tvm-instructions/tvm-exit-codes) of TON, Tact abstracts them away with meaningful error messages that its client libraries can translate.
