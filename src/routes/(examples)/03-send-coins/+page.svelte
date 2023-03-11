<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { SendCoins } from "./SendCoins";

  let sender: Sender;
  let sender2: Sender;
  let contract: SandboxContract<SendCoins>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      const another = await blockchain.treasury("another");
      sender2 = another.getSender();
      contract = blockchain.openContract(await SendCoins.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [another.address.toString()]: "sender 2",
        [contract.address.toString()]: "contract",
      };
      return [contract, addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "1 TON": async () => {
        return [await contract.send(sender, { value: toNano(1) }, null)];
      },
      "withdraw all": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "withdraw all")];
      },
      "Withdraw{1 TON}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Withdraw", amount: toNano(1) })];
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
