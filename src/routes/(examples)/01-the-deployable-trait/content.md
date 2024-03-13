# The Deployable Trait

Tact doesn't support classical class inheritance, but contracts can implement **_traits_**.

One commonly used trait is `Deployable`, which implements a simple receiver for the `Deploy` message. This helps deploy contracts in a standardized manner.

All contracts are deployed by sending them a message. While any message can be used for this purpose, best practice is to use the special `Deploy` message.

This message has a single field, `queryId`, provided by the deployer (usually set to zero). If the deployment succeeds, the contract will reply with a `DeployOk` message and echo the same `queryId` in the response.

---

If you're using Tact's [auto-generated](https://docs.tact-lang.org/ecosystem/tools/typescript#tact-contract-in-typescript) TypeScript classes to deploy, sending the deploy message should look like:

```ts
const msg = { $$type: "Deploy", queryId: 0n };
await contract.send(sender, { value: toNano(1) }, msg);
```

You can see the implementation of the trait [here](https://github.com/tact-lang/tact/blob/main/stdlib/libs/deploy.tact). Notice that the file **_deploy.tact_** needs to be imported from the standard library using the `import` keyword.
