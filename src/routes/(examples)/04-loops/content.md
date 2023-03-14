# Loops

Tact does not support traditional `for` loops, but its loop statements are equivalent and can easily implement the same things. Also note that Tact does not support `break` and `continue` statements in loops like some languages.

The `repeat` loop statement input number must fit within an `int32`, otherwise an exception will be thrown.

The condition of the `while` and `until` loop statements can be any boolean expression.

Smart contracts consume gas for execution. The amount of gas is proportional to the number of iterations. The last example iterates too many times and reverts due to an out of gas exception.