# Optionals

Optionals are variables or struct fields that can be null and don't necessarily hold a value. They are useful to reduce state size when the variable isn't necessarily used.

You can make any variable optional by adding `?` after its type.

Optional variables that are not defined hold the `null` value. You cannot access them without checking for `null` first.

If you're certain an optional variable is not null, append to the end of its name `!!` to access its value. Trying to access the value without `!!` will result in a compilation error.