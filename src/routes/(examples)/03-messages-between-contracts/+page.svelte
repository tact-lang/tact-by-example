<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Counter } from "./Counter";
  import { BulkAdder } from "./BulkAdder";

  let sender: Sender;
  let contract: SandboxContract<Counter>;
  let contract2: SandboxContract<BulkAdder>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Counter.fromInit());
      contract2 = blockchain.openContract(await BulkAdder.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "Counter",
        [contract2.address.toString()]: "BulkAdder",
      };
      return [
        contract,
        addresses,
        [
          await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n }),
          await contract2.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n }),
        ],
      ];
    },
    messages: {
      "Reach{5}": async () => {
        return [await contract2.send(sender, { value: toNano(1) }, { $$type: "Reach", counter: contract.address, target: 5n })];
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
