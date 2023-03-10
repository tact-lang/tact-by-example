# Structs

Structs and messages are very similar with the only difference that messages can be serialized, have a header when serialized and therefore can be used as receivers. Unlike messages, struct definitions do not contain field sizes like `as uint32`.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to define all of them all the times.

Structs are also useful as return values from *getters*. They effectively allow a single getter to return multiple return values.