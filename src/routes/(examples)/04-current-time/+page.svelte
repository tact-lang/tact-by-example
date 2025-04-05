<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { CurrentTime } from "./CurrentTime";

  let sender: Sender;
  let contract: SandboxContract<CurrentTime>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await CurrentTime.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })]];
    },
    messages: {
      "wait 10s": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "wait 10s")];
      },
      "wait 10d": async () => {
        return [await contract.send(sender, { value: toNano(1) }, "wait 10d")];
      },
    },
    getters: {
      unixTime: async () => {
        return await contract.getUnixTime();
      },
      stringTime: async () => {
        return await contract.getStringTime();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
