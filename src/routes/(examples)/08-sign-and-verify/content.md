# Sign and verify

This program shows how you can sign something and let the contract verify, that it was signed by the holder of the private key.

1. We create a keyPair.

```js
const seed = "state dune also ...".split(' ');
const { publicKey, secretKey } = await mnemonicToPrivateKey(seed)
```

2. We store the `public_key` inside the contract. To do this we have to convert it to a bigint.

```js
const publicKey = BigInt("0x" + publicKey.toString('hex'))
```

3. We create the cell with the data we want to verify, and the signature by signing the `cell.hash()` with the `secretKey` we created earlier.

```js
const someCell = beginCell()
  .storeInt(123, 128)
  .storeInt(Math.floor(Date.now()/1000)+10, 32)
  .storeAddress(sender.address)
  .asCell();

const signature = sign(someCell.hash(), secretKey);
```

4. The signature is of type Buffer, so we pack it into a Cell as usual and send it with the data.

```js
await contract.send(sender, { value: toNano(1) }, {
  $$type: "Check",
  signature: beginCell().storeBuffer(signature).asCell(),
  data: cell,
})
```
