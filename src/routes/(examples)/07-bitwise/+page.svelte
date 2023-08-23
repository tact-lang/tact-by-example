<script lang="ts">
  import { toNano, type Sender } from "ton-core";
  import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { BitWiseOperation } from "./BitWiseOperation";

  let sender: Sender;
  let contract: SandboxContract<BitWiseOperation>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      contract = blockchain.openContract(await BitWiseOperation.fromInit());
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [
        [contract], 
        addresses, 
        [await contract.send(deployer.getSender(), { value: toNano(1) }, 
        null
        // { $$type: "Deploy", queryId: 0n }
        )]
      ];
    },
    messages: {},
    getters: {
      counter: async () => {
        return await contract.getBoolAnd();
      },
      location: async () => {
        return await contract.getIntAnd();
      },
      greeting: async () => {
        return await contract.getIntOr();
      },
      "sum(3,4)": async () => {
        return await contract.getIntLeftShift();
      },
      "and(true,false)": async () => {
        return await contract.getIntRightShift();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };

  // $store = {
  //   markdown,
  //   tactCode,
  //   deploy: async () => {
  //     blockchain = await Blockchain.create();
  //     const deployer = await blockchain.treasury("deployer");
  //     sender = deployer.getSender();
  //     const another = await blockchain.treasury("another");
  //     sender2 = another.getSender();
  //     contract = blockchain.openContract(await BitWiseOperation.fromInit());

  //     childContract = blockchain.openContract(await TokenChild.fromInit(contract.address, sender.address!!));
  //     childContract2 = blockchain.openContract(await TokenChild.fromInit(contract.address, sender2.address!!));
  //     const addresses = {
  //       [deployer.address.toString()]: "deployer",
  //       [another.address.toString()]: "user2",
  //       [contract.address.toString()]: "TokenParent",
  //       [childContract.address.toString()]: "TokenChild(deployer)",
  //       [childContract2.address.toString()]: "TokenChild(user2)",
  //     };

  //     return [
  //       [contract, childContract, childContract2],
  //       addresses,
  //       [await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n })],
  //     ];
  //   },
  //   messages: {
  //     "Transfer{100,user2} (from deployer)": async () => {
  //       const childAddress = await contract.getChildAddress(sender.address!!);
  //       const childContract = blockchain.openContract(await TokenChild.fromAddress(childAddress));
  //       return [await childContract.send(sender, { value: toNano(1) }, { $$type: "Transfer", amount: toNano(100), to: sender2.address!! })];
  //     },
  //     "Transfer{100,deployer} (from user2)": async () => {
  //       const childAddress = await contract.getChildAddress(sender2.address!!);
  //       const childContract = blockchain.openContract(await TokenChild.fromAddress(childAddress));
  //       return [await childContract.send(sender2, { value: toNano(1) }, { $$type: "Transfer", amount: toNano(100), to: sender.address!! })];
  //     },
  //   },
  //   getters: {
  //     metadata: async () => {
  //       return await contract.getMetadata();
  //     },
  //     "balance(childAddress(deployer))": async () => {
  //       const childAddress = await contract.getChildAddress(sender.address!!);
  //       const childContract = blockchain.openContract(await TokenChild.fromAddress(childAddress));
  //       return await childContract.getBalance();
  //     },
  //     "balance(childAddress(user2))": async () => {
  //       const childAddress = await contract.getChildAddress(sender2.address!!);
  //       const childContract = blockchain.openContract(await TokenChild.fromAddress(childAddress));
  //       return await childContract.getBalance();
  //     },
  //   },
  //   prev: getExample(import.meta.url).prev,
  //   next: getExample(import.meta.url).next,
  // };
  
</script>
