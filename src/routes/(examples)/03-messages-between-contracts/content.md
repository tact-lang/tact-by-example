# Messages Between Contracts

Different contracts can communicate with each other only by sending messages. This example showcases two separate contracts working in tandem:

- `Counter` - A simple counter that can increment only by 1.
- `BulkAdder` - This contract instructs `Counter` to increment multiple times.

Click the **Deploy** button to deploy both contracts. To make the counter reach 5, send the `Reach` message to BulkAdder by clicking the **Send Reach 5** button.

Observe the number of messages exchanged between the two contracts. Each message is processed as a _separate_ transaction. Also note that BulkAdder cannot call a _getter_ on Counter; it must send a `query` message instead.

## Who's Paying for Gas

**By default, the original sender is responsible for covering the gas costs of the entire cascade of messages they initiate.** This is funded by the original TON coin value sent with the first `Reach` message.

Internally, this is managed by each message handler forwarding the remaining excess TON coin value to the next message it sends.

**Challenge**: Try to modify the code to refund the original sender any unused excess gas.
