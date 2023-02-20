<script lang="ts">
  import { Buffer } from "buffer";
  import { onMount } from "svelte";
  import { highlightTactCode } from "$lib/highlight";
  import store from "$lib/store";

  import "../app.css";
  import "../shiki.css";

  let tactHtml = "";

  store.subscribe(async (s) => {
    if (!s.tactCode) return;
    tactHtml = `<pre>${s.tactCode}</pre>`;
    tactHtml = await highlightTactCode(s.tactCode);
  });

  onMount(() => {
    globalThis.Buffer = Buffer;
  });
</script>

<div class="h-screen flex">
  <div class="flex-1">
    <div class="h-full flex flex-col" id="scroll-container">
      <slot />
      <div contenteditable="false" bind:innerHTML={tactHtml} class="dark" />

      <button on:click={$store.deploy}>Deploy</button>

      {#each Object.keys($store.getters) as getter}
        <button on:click={$store.getters[getter]}>Get {getter}</button>
      {/each}

      {#each Object.keys($store.messages) as message}
        <button on:click={$store.messages[message]}>Send {message}</button>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  #scroll-container {
    overflow-y: auto;
  }
</style>
