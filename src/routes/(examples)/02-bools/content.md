# Bools

This primitive data type can hold the values `true` or `false`.

`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.

The only supported operations with booleans are `&&` `||` `!` - if you try to add them, for example, the code will not compile.

## State costs

Persisting bools to state is very space-efficient, they only take 1-bit. Storing 1000 bools in state [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.00072 TON per year.