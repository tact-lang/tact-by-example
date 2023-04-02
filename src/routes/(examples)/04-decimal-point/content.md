# Decimal Point

All numbers in Tact are integers. Floating point types are not used in smart contracts because they're [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number `1.25` if we can only work with integers? The answer is to work with *cents*. So `1.25` becomes `125`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON is actually the number `1250000000` - we call these *nano-tons* instead of cents.

## Calculating interest

This example calculates the earned interest over a deposit of 500 TON coins. The yearly interest rate in the example is 3.25%.

Since we can't hold the number `3.25` we will use thousandth of a percent as unit ([percent-mille](https://en.wikipedia.org/wiki/Per_cent_mille)). So 3.25% becomes `3250` (3.25 * 1000).

On withdraw, to calculate earned interest, we multiply the amount by the fraction of a year that passed (duration in seconds divided by total seconds in a year) and then by the interest rate divided by 100,000 (100% in percent-mille, meaning 100 * 1000).

Notice that total is returned in nano-tons.