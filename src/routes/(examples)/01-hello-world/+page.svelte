<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./clean.tact?raw";
  import { HelloWorld } from "./contract";

  let sender: Sender;
  let contract: SandboxContract<HelloWorld>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await HelloWorld.fromInit());
      return [await contract.send(deployer.getSender(), { value: toNano(1) }, null)];
    },
    messages: {},
    getters: {
      greeting: async () => {
        return await contract.getGreeting();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
