# Maps

Maps are a dictionary type that can hold an arbitrary number of items, each under a different key.

The keys in maps can either be an `Int` type or an `Address` type.

You can check if a key is found in the map by calling the `get()` method. This will return `null` if the key is missing or the value if the key is found. Replace the value under a key by calling the `set()` method.

Integers in maps stored in state currently use the largest integer size (257-bit). Future versions of Tact will let you optimize the encoding size.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded maps later on under the topic of contract sharding.