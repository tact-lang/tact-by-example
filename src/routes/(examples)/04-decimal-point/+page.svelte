<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Interest } from "./Interest";

  let sender: Sender;
  let contract: SandboxContract<Interest>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Interest.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "Deposit{500}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Deposit", amount: toNano(500) })];
      },
      "Withdraw{500}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Withdraw", amount: toNano(500) })];
      },
    },
    getters: {
      total: async () => {
        return await contract.getTotal();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
