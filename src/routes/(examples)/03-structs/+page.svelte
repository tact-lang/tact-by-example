<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Structs } from "./Structs";

  let sender: Sender;
  let contract: SandboxContract<Structs>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Structs.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "show ops": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "show ops")];
      },
      "Add{Point{1,-1}}": async () => {
        return [await contract.send(sender, { value: toNano(1) }, { $$type: "Add", point: { $$type: "Point", x: 1n, y: -1n } })];
      },
    },
    getters: {
      point: async () => {
        return await contract.getPoint();
      },
      params: async () => {
        return await contract.getParams();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
