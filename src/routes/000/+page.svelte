<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type OpenedContract } from "@ton-community/sandbox";
  import store from "$lib/store";

  import tactCode from "./contract.tact?raw";
  import { Counter } from "./contract";

  let sender: Sender;
  let counter: OpenedContract<Counter>;

  $store = {
    tactCode,
    deploy: async () => {
      console.log(`deploy - start`);
      const blockchain = await Blockchain.create();
      const owner = await blockchain.treasury("owner");
      sender = owner.getSender();
      counter = blockchain.openContract(await Counter.fromInit(owner.address));
      await counter.send(owner.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n });
      console.log(`deploy - end`);
    },
    messages: {
      Increment: async () => {
        console.log(`Increment - start`);
        await counter.send(sender, { value: toNano(1) }, "increment");
        console.log(`Increment - end`);
      },
    },
    getters: {
      Counter: async () => {
        console.log(await counter.getCounter());
      },
    },
  };
</script>
