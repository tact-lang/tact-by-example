<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { TodoParent } from "./TodoParent";
  import { TodoChild } from "./TodoChild";

  let blockchain: Blockchain;
  let sender: Sender;
  let contract: SandboxContract<TodoParent>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await TodoParent.fromInit());
      
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "TodoParent",
        [(await TodoChild.fromInit(contract.address, 1n)).address.toString()]: "TodoChild(1)",
        [(await TodoChild.fromInit(contract.address, 2n)).address.toString()]: "TodoChild(2)",
        [(await TodoChild.fromInit(contract.address, 3n)).address.toString()]: "TodoChild(3)",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      'NewTodo{"bla"}': async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "NewTodo", task: "bla" })];
      },
      "CompleteTodo{2}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "CompleteTodo", seqno: 2n })];
      },
    },
    getters: {
      numTodos: async () => {
        return await contract.getNumTodos();
      },
      "details(todoAddress(2))": async () => {
        const todoAddress = await contract.getTodoAddress(2n);
        const todoContract = blockchain.openContract(await TodoChild.fromAddress(todoAddress));
        return await todoContract.getDetails();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
