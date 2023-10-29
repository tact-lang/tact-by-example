# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare. An overflow can happen if the result of a math operation is too big to fit.

**For example, multiplying 2^256 by 2^256 will not fit within 257-bit.**

Nevertheless, if any math operation overflows, an exception will be thrown, and the transaction will fail. You could say that Tact's math is safe by default.

There is no problem with mixing variables of different state sizes in the same calculation. At runtime, they are all the same type—**always 257-bit signed**. This is the largest supported integer type, so they all fit.

## Decimal Point with Integers

Arithmetic with dollars, for example, requires two decimal places. How can we represent the number `1.25` if we are only able to work with integers? The solution is to work with _cents_. In this way, `1.25` becomes `125`. We simply remember that the two rightmost digits represent the numbers after the decimal point.

Similarly, working with TON coins requires nine decimal places instead of two. Therefore, the amount of 1.25 TON, which can be represented in Tact as `ton("1.25")`, is actually the number `1250000000`.

**We refer to these as _nano-tons_ rather than cents.**
