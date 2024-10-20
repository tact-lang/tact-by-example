# Receiving TON Coins

Every contract has a TON coin balance. This balance is used to pay ongoing rent for storage and should not run out otherwise the contract may be deleted. You can store extra coins in the balance for any purpose.

Every incoming message normally carries some TON coin value sent by the sender. This value is used to pay gas for handling this message. Unused excess will stay in the contract balance. If the value doesn't cover the gas cost, the transaction will revert.

You can query the contract balance with `myBalance()` - note that the value is in nano-tons (like cents, just with 9 decimals). The balance already contains the incoming message value.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: More detail about myBalance() can be found here: <a href="https://docs.tact-lang.org/ref/core-common/#mybalance">myBalance()</a>
</div>

## Refunding senders

If the transaction reverts, unused excess value will be sent back to sender on the _bounced_ message.

You can also refund the excess if the transaction succeeds by sending it back using `self.reply()` in a response message. This is the best way to guarantee senders are only paying for the exact gas that their message consumed.
