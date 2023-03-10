<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { Getters } from "./contract";

  let sender: Sender;
  let contract: SandboxContract<Getters>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await Getters.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [contract, addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {},
    getters: {
      counter: async () => {
        return await contract.getCounter();
      },
      location: async () => {
        return await contract.getLocation();
      },
      greeting: async () => {
        return await contract.getGreeting();
      },
      "sum(3,4)": async () => {
        return await contract.getSum(3n, 4n);
      },
      "and(true,false)": async () => {
        return await contract.getAnd(true, false);
      },
      "answer(42)": async () => {
        return await contract.getAnswer(42n);
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
