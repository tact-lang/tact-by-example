<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Counter } from "./Counter";

  let sender: Sender;
  let sender2: Sender;
  let contract: SandboxContract<Counter>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      const another = await blockchain.treasury("another");
      sender2 = another.getSender();
      contract = blockchain.openContract(await Counter.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [another.address.toString()]: "sender 2",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "ChangeOwner{sender 2} (from deployer)": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "ChangeOwner", newOwner: sender2.address! })];
      },
      "ChangeOwner{deployer} (from sender 2)": async () => {
        return [await contract.send(sender2, { value: toNano(1) }, { $$type: "ChangeOwner", newOwner: sender.address! })];
      },
    },
    getters: {
      owner: async () => {
        return await contract.getOwner();
      },
      value: async () => {
        return await contract.getValue();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
