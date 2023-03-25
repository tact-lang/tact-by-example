# Unbounded Arrays - Todo List

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a todo list that can scale to billions of items?

## Infinitely scalable todo list

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, every new todo item is a new deployed child contract. The user will interact with the children through the `TodoParent` contract.

When the user sends the `NewTodo` message to the parent, the parent deploys a new child to hold the new item. If users want to query the item details, they can call the parent getter `todoAddress()` and then call the `details()` getter on the child.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.