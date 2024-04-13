<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Todo } from "./Todo";

  let blockchain: Blockchain;
  let sender: Sender;
  let contract: SandboxContract<Todo>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Todo.fromInit(1n));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "Todo(1)",
        [(await Todo.fromInit(2n)).address.toString()]: "Todo(2)",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      '"identify" to 1': async () => {
        return [await contract.send(sender, { value: toNano(1) }, "identify")];
      },
      '"identify" to 2': async () => {
        const second = await Todo.fromInit(2n);
        const contract2 = blockchain.openContract(Todo.fromAddress(second.address));
        return [await contract2.send(sender, { value: toNano(1) }, "identify")];
      },
      '"deploy 2nd" to 1': async () => {
        return [await contract.send(sender, { value: toNano(1) }, "deploy 2nd")];
      },
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
