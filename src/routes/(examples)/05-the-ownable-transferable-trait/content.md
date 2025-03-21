# The Ownable-Transferable Trait

The Ownable-Transferable trait is almost identical to the Ownable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to transfer ownership to a new owner. This can also be used to renounce ownership completely by transferring ownership to an unusable address like the zero address.

If you're building a dapp and aiming for decentralization, always prefer this trait over Ownable. At some point in the dapps future, when you consider the owner role no longer unnecessary, you will be able to renounce ownership and make the dapp fully decentralized.

## How to use OwnableTransferable

Use it in a contract just like Ownable. Define a state variable named `owner: Address` and call `self.requireOwner()` in priviliged receivers.

Your contract will automatically handle the `ChangeOwner{newOwner: Address}` message which allows the owner to transfer ownership.

> Info: The OwnableTransferable trait is defined in the [standard library](https://github.com/tact-lang/tact/blob/main/src/stdlib/stdlib/libs/ownable.tact)
