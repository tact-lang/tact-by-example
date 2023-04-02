<script lang="ts">
  import { Dictionary, toNano, type Sender, Address } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Maps } from "./Maps";

  let sender: Sender;
  let contract: SandboxContract<Maps>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Maps.fromInit(Dictionary.empty<bigint, boolean>()));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "set keys": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "set keys")];
      },
      "delete keys": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "delete keys")];
      },
      "clear": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "clear")];
      },
      "Replace{{-900:my}}": async () => {
        const dict = Dictionary.empty<bigint, Address>().set(-900n, sender.address!!);
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Replace", items: dict })];
      },
    },
    getters: {
      "oneItem(-900)": async () => {
        return await contract.getOneItem(-900n);
      },
      itemCheck: async () => {
        return await contract.getItemCheck();
      },
      allItems: async () => {
        return await contract.getAllItems();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
