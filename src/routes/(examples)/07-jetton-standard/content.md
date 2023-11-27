# Jetton Token - Fungible Tokens

This is a general Jetton implementation example from zero to one. Although we didn't devote much space to detailing Jetton Content, remember, there are two ways to implement Jetton Token Data, as outlined in [TEP-64](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md).

## Infinitely Scalable Balance Map

In this example, we launch the Jetton Root Token which introduces the `Jetton` trait below, having a limitation of `max_supply` upon deployment.

The minting process has two different methods:

1. Send the text message "Mint: 100" to mint the token.
2. Send the `Mint` message with the `amount` to mint the token.

### Close the Mint Function

In this example, we set the functionality for turn-off the minting process. The string text message with `Owner: MintClose` method is used to close the minting process. The method is only enable to the owner of the contract.

## Transfer

Notice that the Jetton Token standard also implements the `Transfer` method below. The `Transfer` method is the most important method in the Jetton Token Standard, allowing you to transfer the token to another account.

Excess gas from every operation is refunded to the original sender.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: TEP-74 is the Jetton Token Standard. Detail can check <a href="https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md">here</a>
    
</div>
