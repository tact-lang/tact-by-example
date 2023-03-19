# Hello World

This is probably the simplest possible Tact program. It will provide callers with the classic output "hello world".

Tact lets you write smart contracts. This code defines a single contract named `HelloWorld`. Smart contracts must be deployed to the blockchain network to be usable, try to deploy this contract by pressing the <span class="mdButton blue">Deploy</span> button.

Contract deployments usually cost gas. This learning tool deploys to an [emulator](https://github.com/tact-lang/tact-emulator) of TON blockchain, so gas is emulated TON coin (which is free).

## A simple interaction

Contracts can have *getters* like `greeting()`. Getters are special external interface functions that allow users to query information from the contract. Try to call the getter by pressing the <span class="mdButton teal">Get greeting</span> button. Calling getters is free and does not cost gas.

Getter declarations in Tact always start with the `get` prefix. The getter must also specify its return type - `String` in this case. If we were to omit the `get` from the function declaration, external users would no longer be able call this function and it would essentially become a private method.