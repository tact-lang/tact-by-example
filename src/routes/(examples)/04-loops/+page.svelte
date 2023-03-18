<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Loops } from "./Loops";

  let sender: Sender;
  let contract: SandboxContract<Loops>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Loops.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      loop1: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "loop1")];
      },
      loop2: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "loop2")];
      },
      loop3: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "loop3")];
      },
      "out of gas": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "out of gas")];
      },
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
