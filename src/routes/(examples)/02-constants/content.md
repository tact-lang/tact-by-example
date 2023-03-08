# Constants

Unlike variables, constants cannot change. Their values are calculated in *compile-time* and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in *receivers* and in *getters*.

Unlike contract variables, constants don't consume space in persistent state. Their values are stored directly in the code cell.