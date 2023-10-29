# Textual Messages

Most of the messages we saw in the previous example were defined with the `message` keyword. They are considered _binary_ messages. This means that when somebody wants to send them, they serialize them into bits and bytes of binary data.

The disadvantage with binary messages is that they're not human readable.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing.

Tact supports textual messages for this reason, since they're human readable and can easily be confirmed with users, eliminating phishing risks.

**Textual messages are limited because they cannot contain arguments.** Future versions of Tact will add this functionality.

## Using the comment field

If you've ever made a transfer using a TON wallet, you probably noticed that you can add a _comment_ (also known as a _memo_ or a _tag_). This is how textual messages are sent.

Receivers for textual messages just define the string that they expect. Tact automatically does string matching and calls the matching receiver when a comment message arrives.
