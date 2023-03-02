# Addresses, Bools

Tact supports a number of primitive data types that are tailored for smart contract use.

`Address` represents standard addresses on the TON blockchain. TON has multiple chains called *workchains*. The address specifies the workchain id:

* `0` - The standard workchain, for regular users.

* `-1` - The masterchain, usually for validators.

Every smart contract on TON is identifiable by its address. There are usually multiple ways to represent the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address generate the exact same value.

`Bool` is convenient for boolean and logical operations and for storing flags.