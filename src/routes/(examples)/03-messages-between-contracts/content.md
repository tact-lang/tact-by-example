# Messages Between Contracts

Different contracts can only communicate with each other by sending each other messages. This example shows two separate contracts that work together:

* `Counter` - Our simple counter that can only increment by 1.

* `BulkAdder` - This contract will tell `Counter` to increment multiple times.

Press the <span class="mdButton blue">Deploy</span> button to deploy both. Then, to make the counter reach 5, send BulkAdder the `Reach` message by pressing the <span class="mdButton grape">Send Reach{5}</span> button.

Notice how many messages are sent back and forth between the two contracts as a result. Each of these messages is processed as a *separate* transaction! Also notice that BulkAdder can't call a *getter* on Counter, it must send the `query` message instead.

## Who's paying for gas

The default behavior is that the original sender will pay for the entire cascade of messages that they triggered. This is funded from the original TON coin value sent on the first `Reach` message.

Under the hood, this works by each message handler sending the remaining excess TON coin value it received on the next message it sends out.

**Challenge:** modify the code to refund the original sender any unused excess gas.