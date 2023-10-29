# Arrays

You can implement simple arrays in Tact by using the `map` type.

To create an array, define a map with an `Int` type as the key. This key will represent the index in the array. Additionally, include a variable to keep track of the number of items in the array.

The example contract records the last five timestamps when the `timer` message was received. These timestamps are stored in a cyclical array, implemented as a map.

## Limit the Number of Items

Maps are designed to hold a limited number of items. Only use a map if you know the maximum number of items it will contain. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to populate the map with its maximum number of elements and observe how gas consumption behaves under stress.

If the number of items is unbounded and could potentially grow into the billions, you will need to architect your contract differently. We will discuss unbounded arrays later, under the topic of contract sharding.
