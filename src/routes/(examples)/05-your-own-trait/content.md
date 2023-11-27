# Writing Your Own Trait

Tact doesn't support classical class inheritance and instead introduces the concept of *traits*. Traits are similar to simplified base classes that potentially add state variables, receivers, getters or contract methods.

Contracts can rely on multiple traits. Extract logic into a trait if you have multiple contracts that share this logic.

## The Trackable trait

This example shows how to write a new trait that adds simple analytics behavior to any contract.

This trait also makes use of the `virtual` keyword which lets the contract relying on the trait override some of the trait's behaviors. In the example, the default filter behavior ignores messages from owner in the analytics.

The contract relying on the trait can change this default behavior by specifying the `override` keyword and providing a new implementation to this method. In our case, the custom filter is to have no filters.