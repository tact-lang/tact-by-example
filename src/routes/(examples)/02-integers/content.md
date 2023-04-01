# Integers

Tact supports a number of primitive data types that are tailored for smart contract use.

`Int` is the primary number type. Math in smart contracts is always done with integers and no floating points.

The runtime type `Int` is *always* 257-bit signed, so all runtime calculations are done at 257-bit. This should be enough for everything as it's large enough to hold the number of atoms in the universe.

When encoding `Int` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost. The persistent state size is specified in every declaration of a state variable after the `as` keyword.

Persistent state variables can be initialized inline or inside `init()`. If you forget to initialize a state variable, the code will not compile.