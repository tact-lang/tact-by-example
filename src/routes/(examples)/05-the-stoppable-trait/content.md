# The Stoppable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Stoppable trait allows the contract to allow an `owner` role to stop the contract.

Consider for example a protocol where users can deposit funds, like a staking service or a compounding vault. If somebody discovers a security issue, we may want to stop the contract from accepting funds from new users.

Note that this trait doesn't allow to resume the contract after it has been stopped.

This trait implicitly adds the Ownable trait. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the `OwnableTransferable` trait.

## How to use Stoppable

Define state variables named `owner: Address` and `stopped: Bool` and call `self.requireNotStopped()` on actions that should be stopped.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: The stoppable trait is defined in the <a href="https://github.com/tact-lang/tact/blob/main/stdlib/libs/stoppable.tact">standard library</a>

</div>
