<script lang="ts">
	import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter";
	import { Button } from "@svelteuidev/core";
  import { Buffer } from "buffer";
  import { onMount } from "svelte";
  import { highlightTactCode } from "$lib/highlight";
	import { marked } from "marked";
  import store from "$lib/store";

  import "../app.css";
  import "../shiki.css";

	let markdownHtml = "";
  let tactHtml = "";

  store.subscribe(async (s) => {
    if (!s.tactCode) return;
		markdownHtml = marked(s.markdown);
    tactHtml = `<pre>${s.tactCode}</pre>`;
    tactHtml = await highlightTactCode(s.tactCode);
  });

  onMount(() => {
    globalThis.Buffer = Buffer;
  });
</script>

<Split initialPrimarySize='47%'>
	<div slot="primary" class="panelMarkdown" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; overflow: scroll;">{@html markdownHtml}<slot /></div>
	<svelte:fragment slot="splitter">
    <DefaultSplitter color="rgb(17, 17, 17)" hoverColor="#444" dragColor="#444" ></DefaultSplitter>
  </svelte:fragment>
	<svelte:fragment slot="secondary">

		<Split horizontal initialPrimarySize='80%'>
			<div slot="primary" class="panelCode" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
				<div style="height: 100%; overflow: scroll;">
					<div contenteditable="false" bind:innerHTML={tactHtml} class="dark" />
				</div>
			</div>
			<svelte:fragment slot="splitter">
    		<DefaultSplitter color="rgb(17, 17, 17)" hoverColor="#444" dragColor="#444" ></DefaultSplitter>
  		</svelte:fragment>
			<div slot="secondary" class="panelBottom" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column;">
				<div style="display: flex; gap: 10px; flex-wrap: wrap; overflow: hidden;">
					<Button class="buttonAction" size="xs" ripple on:click={$store.deploy}>Deploy</Button>
	
					{#each Object.keys($store.getters) as getter}
						<Button class="buttonAction" size="xs" ripple color="teal" on:click={$store.getters[getter]}>Get {getter}</Button>
					{/each}
		
					{#each Object.keys($store.messages) as message}
						<Button class="buttonAction" size="xs" ripple color="grape" on:click={$store.messages[message]}>Send {message}</Button>
					{/each}
				</div>
				<pre style="flex: 1; color: #666; overflow: scroll;">hello</pre>	
			</div>
		</Split>
		
	</svelte:fragment>
</Split>