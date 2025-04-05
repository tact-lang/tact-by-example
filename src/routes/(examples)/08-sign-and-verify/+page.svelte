<script lang="ts">
  import { toNano, type Sender, beginCell } from "@ton/core";
  import { Blockchain, type SandboxContract } from "@ton/sandbox";
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";

  import markdown from "./content.md?raw";
  import tactCode from "./contract.tact?raw";
  import { SignAndVerify } from "./SignAndVerify";
  import { mnemonicToPrivateKey, type KeyPair, sign } from "@ton/crypto";

  let sender: Sender;
  let contract: SandboxContract<SignAndVerify>;
  
  const seed = "state dune exhibit also frown piece silent clerk nest embody base mystery click panda farm shove turn table slide reflect battle sustain bullet laptop";
  const seed2 = "dune state exhibit also frown piece silent clerk nest embody base mystery click panda farm shove turn table slide reflect battle sustain bullet laptop";
  let keyPair: KeyPair;
  let keyPair2: KeyPair;

  $store = {
    markdown,
    tactCode,
    deploy: async () => {
      keyPair = await mnemonicToPrivateKey(seed.split(' '));
      keyPair2 = await mnemonicToPrivateKey(seed2.split(' '));
      const blockchain = await Blockchain.create();
      const deployer = await blockchain.treasury("deployer");
      sender = deployer.getSender();

      contract = blockchain.openContract(await SignAndVerify.fromInit(BigInt("0x" + keyPair.publicKey.toString('hex'))));
      const addresses = {
        [deployer.address.toString()]: "deployer",
        [contract.address.toString()]: "contract",
      };
      return [[contract], addresses, [await contract.send(deployer.getSender(), { value: toNano(1) }, {
        $$type: "Deploy",
        queryId: BigInt(Date.now())
      })]];
    },
    messages: {
      ["Validate"]: async () => {
        const cell = beginCell()
          .storeInt(123, 128)
          .storeInt(Math.floor(Date.now()/1000)+10, 32)
          .storeAddress(sender.address)
          .asCell();

        const signature = sign(cell.hash(), keyPair.secretKey);

        return [await contract.send(sender, { value: toNano(1) }, {
          $$type: "Check",
          signature: beginCell().storeBuffer(signature).asCell(),
          data: cell,
        })]
      },
      ["Invalid signer"]: async () => {
        const cell = beginCell()
          .storeInt(123, 128)
          .storeInt(Math.floor(Date.now()/1000)+10, 32)
          .storeAddress(sender.address)
          .asCell();

        const signature = sign(cell.hash(), keyPair2.secretKey);

        return [await contract.send(sender, { value: toNano(1) }, {
          $$type: "Check",
          signature: beginCell().storeBuffer(signature).asCell(),
          data: cell,
        })]
      }
    },
    getters: {},
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };
</script>
