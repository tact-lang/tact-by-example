# Arrays

You can implement simple arrays in Tact by relying on the map type.

To create an array, define a map with `Int` type as key. The key will hold the index in the array. Add another length variable to rememebr how many items are in the array.

The example contract records the last 5 timestamps of when the `timer` message was received. The timestamps are held in a cyclical array implemented as a map.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded arrays later on under the topic of contract sharding.