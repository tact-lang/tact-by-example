# A Contract Deploying Another

Contracts are not necessarily only deployed by users, they can also be deployed by other contracts.

In this example, when pressing the <span class="mdButton blue">Deploy</span> button, we only deploy one contract instance - the one with constructor argument 1.

The second instance (with constructor argument 2) will be deployed by the first contract instance when it receives the `deploy next` message. Send this message to the first instance by pressing the <span class="mdButton grape">Send "deploy 2nd" to 1</span> button.

## Messages containing state init

The combination of the inital code and the initial data of a contract is called the *stateInit* of the contract.

When sending any message to a contract, we can attach its *stateInit* by specifying the `code` and `data` fields of the message. This will deploy the contract if it has not already been deployed. If the contract has already been deployed, these fields will be ignored.

Notice that in this example, we piggyback the deployment on the `indentify` message.