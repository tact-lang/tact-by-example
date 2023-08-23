# Bitwise Operations

The Tact language also supports bitwise operations, which involve manipulating one or more bit patterns or binary numerals at the level of their individual bits. These are fundamental operations that are performed at the binary level. The most common bitwise operations supported in Tact are:

1. **AND** (`&`): Takes two numbers as operands and performs a logical AND on every pair of corresponding bits. The result in each position is 1 if the corresponding bits of both numbers are 1.

2. **OR** (`|`): Takes two numbers as operands and performs a logical OR on every pair of corresponding bits. The result in each position is 1 if at least one corresponding bit of either number is 1.

3. **Left Shift** (`<<`): Shifts the bits of a number to the left a specified number of positions. This has the effect of multiplying the number by 2 for every position the bits are shifted.

4. **Right Shift** (`>>`): Shifts the bits of a number to the right a specified number of positions. This has the effect of dividing the number by 2 for every position the bits are shifted.

Unfortunately, Tact doesn't support XOR or NOT operations at this moment. 





### *Exapnd: "<<" and ">>"

The left shift (`<<`) and right shift (`>>`) operators shift the bits of a number to the left or right by a specified number of positions. Here's why the code lines you provided output the values 10 and 2:

1. **Left Shift** (`<<`): When you shift the bits of 5 (`0101` in binary) to the left by 1 position, you get `1010`, which is 10 in decimal. In mathematical terms, a left shift by 1 position is equivalent to multiplying the number by \(2^1 = 2\), so \(5 \times 2 = 10\).

   ```
   5 << 1 = 0101 << 1 = 1010 (in binary) = 10 (in decimal)
   ```

2. **Right Shift** (`>>`): When you shift the bits of 5 (`0101` in binary) to the right by 1 position, you get `0010`, which is 2 in decimal. In mathematical terms, a right shift by 1 position is equivalent to dividing the number by \(2^1 = 2\), so \(5 / 2 = 2\).

   ```
   5 >> 1 = 0101 >> 1 = 0010 (in binary) = 2 (in decimal)
   ```

In the left shift operation, you are essentially pushing the bits one position to the left and filling the empty position with a 0. In the right shift operation, you are pushing the bits one position to the right, discarding the rightmost bit and filling the empty position with a 0.

These shifting operations can be highly efficient in programming, as they allow quick multiplication or division by powers of 2 without performing the actual arithmetic operations.