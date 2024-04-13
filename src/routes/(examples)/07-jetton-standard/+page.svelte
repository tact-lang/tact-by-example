<script lang="ts">
  import { toNano, type Sender } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { SampleJetton } from "./SampleJetton";
  import { JettonDefaultWallet } from "./JettonDefaultWallet";  
  import { JettonContent } from "./Helper";

  let blockchain: Blockchain;
  let sender: Sender;
  let sender2: Sender;
  let contract: SandboxContract<SampleJetton>;
  let walletContract: SandboxContract<JettonDefaultWallet>;
  let walletContract2: SandboxContract<JettonDefaultWallet>;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();
      const another = await blockchain.treasury("another");
      sender2 = another.getSender();
      const default_content = await JettonContent();
      contract = blockchain.openContract(await SampleJetton.fromInit(deployer.address, default_content, 21000000000000n ));
      walletContract = blockchain.openContract(await JettonDefaultWallet.fromInit(contract.address, sender.address!!));
      walletContract2 = blockchain.openContract(await JettonDefaultWallet.fromInit(contract.address, sender2.address!!));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [another.address.toString()]: "user2",
        [contract.address.toString()]: "JettonRoot",
        [walletContract.address.toString()]: "JettonWallet(deployer)",
        [walletContract2.address.toString()]: "JettonWallet(user2)",
      };
      
      return [
        [contract, walletContract, walletContract2],
        addresses,
        [
          await contract.send(
            deployer.getSender(), 
            { value: toNano(1) }, 
            // { $$type: "Mint", amount: toNano(1), receiver: deployer.address!! }
            "Mint: 100"
            )
        ],
      ];
    },
    messages: {
      "Mint: 100": async () => {
        // const jettonWallet = await contract.getGetWalletAddress(sender.address!!);
        // const childContract = blockchain.openContract(await JettonDefaultWallet.fromAddress(childAddress));
        // return [await childContract.send(sender, { value: toNano(1) }, { $$type: "Tok", amount: toNano(100), to: sender2.address!! })];
        // return [await contract.send(sender, {value: toNano(1)}, { $$type: "Mint", amount: toNano(100), receiver: sender2.address!! })];
        return [await contract.send(sender, {value: toNano(1)}, "Mint: 100" )];
      },
      "Mint: 100(user2)": async () => {
        // const jettonWallet = await contract.getGetWalletAddress(sender.address!!);
        // const childContract = blockchain.openContract(await JettonDefaultWallet.fromAddress(childAddress));
        // return [await childContract.send(sender, { value: toNano(1) }, { $$type: "Tok", amount: toNano(100), to: sender2.address!! })];
        // return [await contract.send(sender, {value: toNano(1)}, { $$type: "Mint", amount: toNano(100), receiver: sender2.address!! })];
        return [await contract.send(sender2, {value: toNano(1)}, "Mint: 100" )];
      },
      // "Transfer{100,deployer} (from user2)": async () => {
      //   const childAddress = await contract.getGetWalletAddress(sender2.address!!);
      //   const childContract = blockchain.openContract(await JettonDefaultWallet.fromAddress(childAddress));
      //   return [await childContract.send(sender2, { value: toNano(1) }, { $$type: "Transfer", amount: toNano(100), to: sender.address!! })];
      // },
      "Owner: MintClose(admin)": async () => {
        return [await contract.send(sender, {value: toNano(1)}, "Owner: MintClose" )];
      },
    },
    getters: {
      CirculatingSupply: async () => {
        return (await contract.getGetJettonData()).totalSupply;
      },

      "balance(JettonWallet(deployer))": async () => {
        const walletAddress = await contract.getGetWalletAddress(sender.address!!);
        const childContract = blockchain.openContract(await JettonDefaultWallet.fromAddress(walletAddress));
        return (await childContract.getGetWalletData()).balance;
      },
      "balance(JettonWallet(user2))": async () => {
        const walletAddress = await contract.getGetWalletAddress(sender2.address!!);
        const childContract = blockchain.openContract(await JettonDefaultWallet.fromAddress(walletAddress));
        return (await childContract.getGetWalletData()).balance;
      },
      mintable: async () => {
        return (await contract.getGetJettonData()).mintable;
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
