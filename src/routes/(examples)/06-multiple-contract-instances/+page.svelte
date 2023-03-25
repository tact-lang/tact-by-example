<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Todo } from "./Todo";

  let sender: Sender;
  let contract: SandboxContract<Todo>;
  let contract2: SandboxContract<Todo>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Todo.fromInit(1n));
      contract2 = blockchain.openContract(await Todo.fromInit(2n));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "Todo(1)",
        [contract2.address.toString()]: "Todo(2)",
      };
      return [
        [contract, contract2],
        addresses,
        [
          await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n }),
          await contract2.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n }),
        ],
      ];
    },
    messages: {},
    getters: {
      "addressOf(1)": async () => {
        return await contract.getAddressOf(1n);
      },
      "addressOf(2)": async () => {
        return await contract.getAddressOf(2n);
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
