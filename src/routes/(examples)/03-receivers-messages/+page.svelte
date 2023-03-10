<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Receivers } from "./contract";

  let sender: Sender;
  let sender2: Sender;
  let contract: SandboxContract<Receivers>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      const another = await blockchain.treasury("another");
      sender2 = another.getSender();
      contract = blockchain.openContract(await Receivers.fromInit());
      return [contract, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      increment: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "increment")];
      },
      decrement: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "decrement")];
      },
      "Add{3}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Add", amount: 3n })];
      },
      "Subtract{2}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Subtract", amount: 2n })];
      },
      "MultiMath{1,0,2}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "MultiMath", add: 1n, subtract: 0n, multiply: 2n })];
      },
      "MultiMath{0,3,3}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "MultiMath", add: 0n, subtract: 3n, multiply: 3n })];
      },
      "hello (from deployer)": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "hello")];
      },
      "hello (from sender 2)": async () => {
        return [await contract.send(sender2, { value: toNano(1) }, "hello")];
      },
    },
    getters: {
      value: async () => {
        return await contract.getValue();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
