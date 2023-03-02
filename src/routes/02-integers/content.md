# Integers

Tact supports a number of primitive data types that are tailored for smart contract use.

`Int` is the primary number type. Math in smart contracts is always done with integers and no floating points.

The runtime type `Int` is *always* 257-bit signed, so all calculations are done at 257-bit. This should be enough for everything as it's large enough to hold the number of atoms in the universe.

If any math operation overflows, an exception will be thrown. When encoding `Int` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost.