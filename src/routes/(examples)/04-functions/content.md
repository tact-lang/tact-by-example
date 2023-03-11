# Functions

To make your code more readable and promote code reuse, you're encouraged to divide it into functions.

Functions in Tact start with the `fun` keyword. Functions can receive multiple input arguments and can optionally return a single output value. You can return a `struct` if you want to return multiple values.

Global static functions are defined outside the scope of contracts. You can call them from anywhere, but they can't access the contract or any of the contract state variables.

Contract methods are functions that are defined inside the scope of a contract. You can call them only from other contract methods like *receivers* and *getters*. They can access the contract's state variables.