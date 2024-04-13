<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Emit } from "./Emit";

  let sender: Sender;
  let contract: SandboxContract<Emit>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Emit.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      action: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "action")];
      },
      transfer: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "transfer")];
      },
      stake: async () => {
        return [await contract.send(sender, { value: toNano(1) }, "stake")];
      },
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
