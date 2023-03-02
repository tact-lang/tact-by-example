<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { AddressesBools } from "./contract";

  let sender: Sender;
  let contract: SandboxContract<AddressesBools>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await AddressesBools.fromInit());
      return [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })];
    },
    messages: {
      "address dump": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "address dump")];
      },
      "address ops": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "address ops")];
      },
      "bool dump": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "bool dump")];
      },
      "bool ops": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "bool ops")];
      },
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
