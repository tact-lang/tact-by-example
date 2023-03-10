<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Rejecting } from "./contract";

  let sender: Sender;
  let contract: SandboxContract<Rejecting>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Rejecting.fromInit());
      return [contract, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      increment: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "increment")];
      },
      "Divide{2}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Divide", by: 2n })];
      },
      "Divide{0}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Divide", by: 0n })];
      },
      "no access": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "no access")];
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
