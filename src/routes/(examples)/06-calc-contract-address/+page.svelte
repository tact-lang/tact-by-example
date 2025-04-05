<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Todo1 } from "./Todo1";
  import { Todo2 } from "./Todo2";

  let sender: Sender;
  let contract: SandboxContract<Todo1>;
  let contract2: SandboxContract<Todo2>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Todo1.fromInit());
      contract2 = blockchain.openContract(await Todo2.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "Todo1",
        [contract2.address.toString()]: "Todo2",
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
      "Todo1.myAddress": async () => {
        return await contract.getMyAddress();
      },
      "Todo1.otherAddress": async () => {
        return await contract.getOtherAddress();
      },
      "Todo2.myAddress": async () => {
        return await contract2.getMyAddress();
      },
      "Todo2.otherAddress": async () => {
        return await contract2.getOtherAddress();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
