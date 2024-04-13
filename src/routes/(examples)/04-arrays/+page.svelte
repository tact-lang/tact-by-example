<script lang="ts">
  import { Dictionary, toNano, type Sender, Address } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Arrays } from "./Arrays";

  let sender: Sender;
  let contract: SandboxContract<Arrays>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Arrays.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      timer: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "timer")];
      },
      dump: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "dump")];
      },
    },
    getters: {
      length: async () => {
        return await contract.getLength();
      },
      map: async () => {
        return await contract.getMap();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
