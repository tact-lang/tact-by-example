# Constants

Unlike variables, constants cannot change. Their values are calculated in _compile-time_ and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in **_receivers_** and in **_getters_**.

Unlike contract variables, **constants don't consume space in persistent state. Their values are stored directly in the code cell.**

There isn't much difference between constants defined outside of a contract and inside the contract. Those defined outside can be used by other contracts in your project.
