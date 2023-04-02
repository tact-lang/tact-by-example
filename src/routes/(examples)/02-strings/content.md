# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like `\n`.

The use of strings in smart contracts should be quite limited. Smart contracts are very exact programs for managing money, they're not intended for interactive CLI.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a `StringBuilder`. This object handles gas efficiently and supports `append()` of various types to the string.