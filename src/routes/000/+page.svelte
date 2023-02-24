<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Counter } from "./contract";

  let sender: Sender;
  let counter: SandboxContract<Counter>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const owner = await blockchain.treasury("owner");
      sender = owner.getSender();
      counter = blockchain.openContract(await Counter.fromInit(owner.address));
      return [await counter.send(owner.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })];
    },
    messages: {
      increment: async () => {
        return [await counter.send(sender, { value: toNano(1) }, "increment")];
      },
    },
    getters: {
      counter: async () => {
        return await counter.getCounter();
      },
    },
    next: {
      name: "This is next",
      id: "010",
    },
  };
</script>
