# The Deployable Trait

Tact doesn't support classical class inheritance, but contracts can implement *traits*. One of the commonly used traits is `Deployable`. It implements a simple receiver for the `Deploy` message which helps deploy contracts in a standard way.

All contracts are deployed by sending them a message. This can be any message, but best practice is to designate the special `Deploy` message for this purpose.

This message has a single field, `queryId`, which is provided by the deployer. If the deploy succeeds, the contract will reply with the message `DeployOk` and echo the same `queryId` in the response.

If you're using TypeScript to deploy, sending the deploy message should look like:

```ts
const msg = { $$type: "Deploy", queryId: 0n };
 await contract.send(sender, { value: toNano(1) }, msg);
```

You can see the implementation of the trait [here](https://github.com/tact-lang/tact/blob/main/stdlib/libs/deploy.tact). Notice that the file *deploy.tact* needs to be imported from the standard library using the `import` keyword.