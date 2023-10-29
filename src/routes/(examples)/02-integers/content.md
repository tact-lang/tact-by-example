# Integers

Tact supports a number of primitive data types that are tailored for smart contract use.

`Int` is the primary number type. Math in smart contracts is always done with integers and never with floating points since floats are [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

The runtime type `Int` is _always_ 257-bit signed, so all runtime calculations are done at 257-bit. This should be large enough for pretty much anything you need as it's large enough to hold the number of atoms in the universe.

Persistent state variables can be initialized inline or inside `init()`. If you forget to initialize a state variable, the code will not compile.

## State costs

When encoding `Int` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost. The persistent state size is specified in every declaration of a state variable after the `as` keyword.

- Storing 1000 257-bit integers in state [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about **0.184 TON** per year.
- Storing 1000 32-bit integers only costs **0.023 TON** per year by comparison.
