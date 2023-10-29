# Addresses

`Address` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called _workchains_. This allows to balance the load more effectively. One of the internal fields of the address is the workchain id:

- `0` - The standard workchain, for regular users. Your contracts will be here.

- `-1` - The masterchain, usually for validators. Gas on this chain is significantly more expensive, but you'll probably never use it.

There are multiple ways on TON to [represent](https://docs.ton.org/learn/overviews/addresses#bounceable-vs-non-bounceable-addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. Inside the contract, it doesn't matter which representation you use.

## State costs

Most addresses take 264-bit to store (8-bit for the workchain id and 256-bit for the account id). **This means that storing 1000 addresses [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.189 TON per year.**
