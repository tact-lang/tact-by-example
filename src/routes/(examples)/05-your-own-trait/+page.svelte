<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Counter } from "./Counter";

  let sender: Sender;
  let contract: SandboxContract<Counter>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Counter.fromInit());
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
      "reset stats": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "reset stats")];
      },
    },
    getters: {
      value: async () => {
        return await contract.getValue();
      },
      stats: async () => {
        return await contract.getStats();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
