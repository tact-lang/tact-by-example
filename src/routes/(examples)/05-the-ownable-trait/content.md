# The Ownable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Ownable trait allows the contract to set an `owner` role, which can have higher priviliges from everybody else.

For example, if your contract allows upgrades, it would make sense to limit upgrades to the owner only, otherwise anyone could break the contract.

Be aware that dapps are supposed to be _decentralized_ and an owner role is by definition [centralized](https://defi.org/ton). If you're building a dapp, try to minimize reliance on Ownable.

Note that this trait doesn't allow the owner to transfer ownership to a different owner.

## How to use Ownable

Define a state variable named `owner: Address` and call `self.requireOwner()` in priviliged receivers.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: The Ownable trait is defined in the <a href="https://github.com/tact-lang/tact/blob/main/stdlib/libs/ownable.tact">standard library</a>

</div>
