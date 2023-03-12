# The Resumable Trait

The Resumable trait is almost identical to the Stoppable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to resume a stopped contract.

The Stoppable trait by itself may be a little dangerous because the owner cannot change their mind. If you're not sure which trait to use, use this one.

This trait implicitly adds the Ownable and Stoppable traits. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the `OwnableTransferable` trait.

## How to use Resumable

Define state variables named `owner: Address` and `stopped: Bool` and call `self.requireNotStopped()` on actions that should be stopped.