# Communicating with Children

In a parent-child relationship, the user would normally just deploy the parent. This is what's happening here when you press the <span class="mdButton blue">Deploy</span> button.

In this example, the user is only supposed to communicate with the parent. You can send the parent contract a message by pressing the <span class="mdButton grape">Send greet 3</span> button.

This message will instruct the parent to send its own `HiFromParent` message to the first 3 children. Every child will respond to the greeting by sending the parent its own `HiFromChild` back.

## How can parent know if a child is deployed?

You can't send a message to a contract until it is deployed. How can the parent guarantee that they're not communicating with a child that wasn't deployed yet?

The best practice is to include the *stateInit* on every message. This way, if the child isn't deployed, it will be. If the child is already deployed, this field will be ignored.

This is called lazy deployment.