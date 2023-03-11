<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { ReceiveCoins } from "./ReceiveCoins";

  let sender: Sender;
  let contract: SandboxContract<ReceiveCoins>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await ReceiveCoins.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [contract, addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "1 TON": async () => {
        return [await contract.send(sender, { value: toNano(1) }, null)];
      },
      increment: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "increment")];
      },
      "refunding increment": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "refunding increment")];
      },
    },
    getters: {
      balance: async () => {
        return await contract.getBalance();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
