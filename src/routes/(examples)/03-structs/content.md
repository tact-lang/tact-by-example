# Structs

Structs allow you to combine multiple primitives together in a more semantic way. They're a great tool to make your code more readable.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to keep respecifying them.

Structs are also useful as return values from *getters* or other internal functions. They effectively allow a single getter to return multiple return values.

The order of fields does not matter. Unlike other languages, Tact does not have any padding between fields.

## Structs vs. messages

Structs and messages are actually very similar with the only difference that messages are designed to be serialized and structs aren't.

Messages have a header containing their unique numeric id and therefore can be used with receivers (the contract can tell messages apart based on this id). Unlike messages, struct definitions do not specify field sizes like `as uint32`.