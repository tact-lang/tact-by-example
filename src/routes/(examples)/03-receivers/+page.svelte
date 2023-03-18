<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Receivers } from "./Receivers";

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
      contract = blockchain.openContract(await Receivers.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
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
