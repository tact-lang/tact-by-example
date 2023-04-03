<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Optionals } from "./Optionals";

  let sender: Sender;
  let contract: SandboxContract<Optionals>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Optionals.fromInit(null, null, null));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "MsgOpts{ma:5}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "MsgOpts", ma: 5n, mb: null, mc: null, md: null })];
      },
    },
    getters: {
      optInt: async () => {
        return await contract.getOptInt();
      },
      optIntVal: async () => {
        return await contract.getOptIntVal();
      },
      optNested: async () => {
        return await contract.getOptNested();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
