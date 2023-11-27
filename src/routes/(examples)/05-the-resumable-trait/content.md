# The Resumable Trait

The Resumable trait is almost identical to the Stoppable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to resume a stopped contract.

The Stoppable trait by itself may be a little dangerous because the owner cannot change their mind. If you're not sure which trait to use, use this one.

This trait implicitly adds the Ownable and Stoppable traits. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the `OwnableTransferable` trait.

## How to use Resumable

Define state variables named `owner: Address` and `stopped: Bool` and call `self.requireNotStopped()` on actions that should be stopped.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: The OwnableTransferable trait is defined in the <a href="https://github.com/tact-lang/tact/blob/main/stdlib/libs/stoppable.tact">standard library</a>

</div>
