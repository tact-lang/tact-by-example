<script lang="ts">
  import { Counter } from './000_Counter';
  import contract from './contract.tact?raw';
  let html = "";

  import { Blockchain } from "@ton-community/sandbox";
  import { toNano } from "ton-core";

  const run = async () => {
    console.log(`main - start`);
    let blockchain = await Blockchain.create();
    let owner = await blockchain.treasury("owner");
    let contract = blockchain.openContract(await Counter.fromInit(owner.address));
    await contract.send(owner.getSender(), { value: toNano(1) }, { $$type: "Deploy", queryId: 0n });
    console.log(await contract.getCounter());
    await contract.send(owner.getSender(), { value: toNano(1) }, "increment");
    console.log(await contract.getCounter());
    console.log(`main - end`);
  };

	import { getHighlighter, setCDN } from "shiki";
  setCDN('/shiki/');
  getHighlighter({ 
    theme: 'css-variables',
    langs: [ 'javascript', {
        id: 'tact',
        scopeName: 'source.tact',
        path: 'languages/grammar-tact.json',
      }
    ],
    paths: {
      wasm: '/'
    }
  }).then(highlighter => {
    html = highlighter.codeToHtml(contract, { lang: 'tact' });
  });
</script>

<div contenteditable="false" bind:innerHTML={html} class="dark"></div>

<button on:click={run}>
  Run  
</button>