# Parent-Child Relationship

A very common design pattern in Tact is implementing two contracts with a parent-child relationship.

Under this pattern, we would normally have a single instance parent which is deployed by the user. This is the `TodoParent` contract in this example.

The child contract `TodoChild` will have multiple instances. These instances will normally be deployed by the parent by sending the parent a message. 

Try this out. Press the <span class="mdButton grape">Send "deploy another" to parent</span> button multiple times to send the message to the parent and instruct it to deploy more and more children.

Also notice how we can omit the `Deployable` trait from the children. This trait is mostly useful for contracts that users deploy. Since the user only deploys the parent, omitting the trait from the children will explain our intent to readers.

## Unbounded data structures

An interesting property of this pattern is that the number of potential children is unbounded! We can have an infinite number of children.

In general, inifinite data structures that can actually scale to billions are very difficult to implement on blockchain efficiently. This pattern showcases the power of TON.