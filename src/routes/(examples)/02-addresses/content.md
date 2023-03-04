# Addresses

`Address` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. One of the internal fields of the address is the workchain id:

* `0` - The standard workchain, for regular users.

* `-1` - The masterchain, usually for validators.

There are multiple ways to [represent](https://ton.org/docs/learn/overviews/addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. It doesn't matter which representation you use.