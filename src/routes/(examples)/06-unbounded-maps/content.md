# Unbounded Maps - Simplified Token

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a token with a map of balances that can scale to billions of holders?

## Infinitely scalable balance map

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, we hold the balance of every holder in a separate child contract.

To transfer tokens, the owner sends the `Transfer` message to the child contract holding their own balance. This will cause the child to deploy its sibling - the child contract holding the recipient's balance - by sending it the `InternalAddTokens` message.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.