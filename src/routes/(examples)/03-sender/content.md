# Message Sender

Every incoming message is sent from some contract that has an address.

You can query the address of the message sender by calling `sender()`. Alternatively, the address is also available through `context().sender`.

The sender during execution of the `init()` method of the contract is the address who deployed the contract.

## Authenticating messages

The main way to authenticate an incoming message, particularly for priviliges actions, is to verify the sender. This field is secure and impossible to fake.

> **Info**: More detail about context can be found here: [context()](https://docs.tact-lang.org/ref/core-contextstate/#context)
