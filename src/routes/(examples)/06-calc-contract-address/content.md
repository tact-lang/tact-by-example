# Calculate Contract Address

When a contract is deployed to the chain, it receives an address by which users can refer to it and send it transactions.

In this example, we have two different contracts: `Todo1` and `Todo2`. They are deployed separately and each gets its own unique address. As we've seen before, a contract can always know its own address by running `myAddress()`.

The special bit in this example is that each contract can also get the address of the other contract by running `contractAddress(stateInit)`.

## How is the contract address generated?

Contract addresses on TON are [derived](https://docs.ton.org/learn/overviews/addresses#account-id) from the initial code of the contract (the compiled bytecode) and the initial data of the contract (the arguments of init). 

Both contracts don't have any constructor arguments, so their initial data is the identical. Their addresses are different because their code is different.

The combination of the inital code and the initial data is called the *stateInit* of the contract. Tact gives easy access to the *stateInit* using the `initOf` statement.