# Receiving TON Coins

Every contract has a TON coin balance. This balance is used to pay ongoing rent for storage and should not run out otherwise the contract may be deleted. You can store extra coins in the balance for any purpose.

Every incoming message normally carries some TON coin value sent by the sender. This value is used to pay gas for handling this message. Unused excess will stay in the contract balance. If the value doesn't cover the gas cost, the transaction will revert.

You can query the contract balance with `myBalance()` - note that the value is in nano-tons (like cents, just with 9 decimals). The balance already contains the incoming message value.

## Refunding senders

If the transaction reverts, unused excess value will be sent back to sender on the *bounced* message.

You can also refund the excess if the transaction succeeds by sending it back using `reply()` in a response message. This is the best way to guarantee senders are only paying for the exact gas that their message consumed.