# The Stoppable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Stoppable trait allows the contract to allow an `owner` role to stop the contract.

Consider for example a protocol where users can deposit funds, like a staking service or a compounding vault. If somebody discovers a security issue, we may want to stop the contract from accepting funds from new users.

Note that this trait doesn't allow to resume the contract after it has been stopped.

This trait implicitly adds the Ownable trait. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the `OwnableTransferable` trait.

## How to use Stoppable

Define state variables named `owner: Address` and `stopped: Bool` and call `self.requireNotStopped()` on actions that should be stopped.