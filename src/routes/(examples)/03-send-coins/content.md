# Sending TON Coins

This contract allows to withdraw TON coins from its balance. Notice that only the deployer is permitted to do that, otherwise this money could be stolen.

The withdrawn funds are sent as value on an outgoing message to the sender. It's a good idea to set the `bounce` flag explicitly to `true` (although this also the default), so if the outgoing message fails for any reason, the money would return to the contract.

Contracts need to have a non-zero balance so they can pay storage costs occasionally, otherwise they may get deleted. This contract can make sure you always leave 0.01 TON which is [enough](https://ton.org/docs/develop/smart-contracts/fees#storage-fee) to store 1 KB of state for 2.5 years.

## The intricate math

`myBalance()` is the contract balance including the value for gas sent on the incoming message. `myBalance() - context().value` is the balance without the value for gas sent on the incoming message.

Send mode `SendRemainingValue` will add to the outgoing value any excess left from the incoming message after all gas costs are deducted from it.

Send mode `SendRemainingBalance` will ignore the outgoing value and send the entire balance of the contract. Note that this will not leave any balance for storage costs so the contract may be deleted.

> **Info**: More details for different sending modes can check [here](https://docs.tact-lang.org/book/message-mode#combining-modes-with-flags)
