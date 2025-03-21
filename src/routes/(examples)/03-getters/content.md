# Getters

Getters are special contract functions that allow users to query information from the contract.

Contract methods starting with the prefix `get fun` are all getters. You can define as many getters are you want. Each getter must also specify its return type - `counter()` for example returns an `Int`.

Calling getters is free and does not cost gas. The call is executed by a full node and doesn't go through consensus with all the validators nor is added to a new block.

Getters are read-only, they cannot change the contract persistent state.

If we were to omit the `get` keyword from the function declaration of a getter, it will stop being a getter. External users would no longer be able call this function and it would essentially become a private method of the contract.

## Getters between contracts

**A contract cannot execute a getter of another contract.**

Getters are only executable by end-users off-chain. Since contracts are running on-chain, they do not have access to each other's getters.

So, if you can't call a getter, how can two contracts communicate?

The only way for contracts to communicate on-chain is by sending messages to each other. Messages are handled in _receivers_.

> **Info**: TON Blockchain is an asynchronous blockchain, which means that smart contracts can interact with each other only by sending messages.
