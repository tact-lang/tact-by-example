# Receivers and Messages

In TON, users interact with contracts by sending them messages. Different contracts can only communicate with each other by sending each other messages.

Since users actually use wallet contracts, messages from users are actually messages coming from just another contract.

Sending a message to a contract costs gas and is processed in the course of a transaction. The transaction executes when validators add the transaction to a new block. This can take a few seconds. Messages are also able to change the contract persistent state.

## Receivers

Contract methods named `receive()` are the handlers that process each incoming message type. Tact will automatically route the correct message to the correct receiver listening for it. Use `sender()` to get the message sender.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing. Tact supports textual messages for this reason, since they can easily be confirmed with users, eliminating phishing risks.