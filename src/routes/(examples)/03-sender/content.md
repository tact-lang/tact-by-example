# Message Sender

Every incoming message is sent from some contract that has an address.

You can query the address of the message sender by calling `sender()`. Alternatively, the address is also available through `context().sender`.

The sender during execution of the `init()` method of the contract is the address who deployed the contract.

## Authenticating messages

The main way to authenticate an incoming message, particularly for priviliges actions, is to verify the sender. This field is secure and impossible to fake.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: More detail about context can find in here: <a href="https://docs.tact-lang.org/language/ref/common#context">context()</a>
</div>
