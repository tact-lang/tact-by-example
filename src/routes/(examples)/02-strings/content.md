# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like `\n`. The use of strings in smart contracts should be quite limited.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a `StringBuilder`. This object handles gas efficiently.