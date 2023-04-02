# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare. An overflow can happen if the result of a math operation is too big to fit. For example, multiplying 2^256 by 2^256 will not fit within 257-bit.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will fail. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - always 257-bit signed. This is the largest supported integer type, so they all fit.

## Decimal point with integers

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number `1.25` if we can only work with integers? The answer is to work with *cents*. So `1.25` becomes `125`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON which can be coded in Tact as `ton("1.25")` is actually the number `1250000000` - we call these *nano-tons* instead of cents.