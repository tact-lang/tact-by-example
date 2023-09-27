# Unbounded Arrays - Todo List

In general, infinite data structures that can grow to billions of elements are very difficult to implement on a blockchain. As the contract's persistent state grows in size, read and write operations become more expensive in terms of gas. In extreme cases, they may cost more than a transaction's gas limit, rendering the contract unusable.

Therefore, **it's important to design contracts with an upper bound on state size.** So, how would we implement a to-do list that can scale to billions of items?

## Infinitely scalable todo list

The secret to achieving infinite scalability on TON lies in sharding the data across multiple contracts. We can utilize the parent-child design pattern to achieve this.

In this example, each new todo item is deployed as a new child contract. Users interact with the child contracts through the `TodoParent` contract.

When the user sends the `NewTodo` message to the parent, the parent deploys a new child to hold the new item. If users want to query the item details, they can call the parent getter `todoAddress()` and then call the `details()` getter on the child.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.
</div>
