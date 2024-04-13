<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Receivers } from "./Receivers";

  let sender: Sender;
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
      "increment by 2": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "increment by 2")];
      },
      "increment by 3": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "increment by 3")];
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
