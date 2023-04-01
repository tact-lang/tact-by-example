# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will revert. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - always 257-bit signed. This is the largest supported integer type, so they all fit.