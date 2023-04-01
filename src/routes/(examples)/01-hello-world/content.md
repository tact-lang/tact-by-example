# Hello World

This is probably the simplest possible Tact program. It will provide callers with the classic output "hello world".

Tact lets you write smart contracts. This code defines a single contract named `HelloWorld`. Smart contracts must be deployed to the blockchain network to be usable, try to deploy this contract by pressing the <span class="mdButton blue">Deploy</span> button.

Contract deployments usually cost gas. This website deploys to an [emulator](https://github.com/tact-lang/tact-emulator) of TON blockchain, so gas is emulated TON coin (which is free).

If you're unfamilar with terms like *contract*, *deployment* and *gas*, please [read this post](https://blog.ton.org/what_is_blockchain) first. It's a great introduction to all blockchain terminology you will need to learn Tact.

## A simple interaction

Contracts can have *getters* like `greeting()`. Getters are special external interface functions that allow users to query information from the contract. Try to call the getter by pressing the <span class="mdButton teal">Get greeting</span> button. Calling getters is free and does not cost gas.

Don't worry if some things aren't clear now, we will dive into getters in more detail later.