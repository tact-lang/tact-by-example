<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Bools } from "./contract";

  let sender: Sender;
  let contract: SandboxContract<Bools>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Bools.fromInit());
      return [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })];
    },
    messages: {
      "show all": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "show all")];
      },
      "show ops": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "show ops")];
      },
    },
    getters: {
      result: async () => {
        return await contract.getResult();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
