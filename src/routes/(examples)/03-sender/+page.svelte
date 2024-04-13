<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { MessageSender } from "./MessageSender";

  let sender: Sender;
  let sender2: Sender;
  let contract: SandboxContract<MessageSender>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      const another = await blockchain.treasury("another");
      sender2 = another.getSender();
      contract = blockchain.openContract(await MessageSender.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [another.address.toString()]: "sender 2",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "who (from deployer)": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "who")];
      },
      "who (from sender 2)": async () => {
        return [await contract.send(sender2, { value: toNano(1) }, "who")];
      },
      "hello (from deployer)": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "hello")];
      },
      "hello (from sender 2)": async () => {
        return [await contract.send(sender2, { value: toNano(1) }, "hello")];
      },
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
