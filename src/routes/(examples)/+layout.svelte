<script lang="ts">
  import type { SendMessageResult } from "@ton-community/sandbox";
  import { Address, fromNano } from "ton-core";
  import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter";
  import { Button } from "@svelteuidev/core";
  import { Buffer } from "buffer";
  import { onMount } from "svelte";
  import { highlightTactCode } from "$lib/highlight";
  import { marked } from "marked";
  import store from "$lib/store";

  import "../../app.css";
  import "../../shiki.css";

  let terminalElement: HTMLPreElement;
  let markdownHtml = "";
  let tactHtml = "";
  let terminalContent = "";
  let next: { name: string; id: string } | undefined, prev: { name: string; id: string } | undefined;

  store.subscribe(async (s) => {
    if (!s.tactCode) return;
    markdownHtml = marked(s.markdown);
    tactHtml = `<pre>${s.tactCode}</pre>`;
    tactHtml = await highlightTactCode(s.tactCode);
    next = s.next;
    prev = s.prev;
    terminalContent = "";
  });

  onMount(() => {
    globalThis.Buffer = Buffer;
  });

  function terminalLog(msg: string) {
    terminalContent += msg + "\n";
  }

  function terminalLogMessages(results: SendMessageResult[]) {
    for (const result of results) {
      for (const transaction of result.transactions) {
        if (transaction.inMessage?.info.type == "internal") {
          if (transaction.debugLogs) terminalLog(transaction.debugLogs);
          if (transaction.description.type == "generic") {
            if (transaction.description.computePhase.type == "vm") {
              const compute = transaction.description.computePhase;
              terminalLog(
                `Transaction executed: ${compute.success ? "success" : "error"}, ` +
                  `exitcode ${compute.exitCode}, gas ${shorten(compute.gasFees, "coins")}`,
              );
            }
          }
          for (const event of transaction.events) {
            if (event.type == "message_sent") {
              terminalLog(
                `Message sent: from ${shorten(event.from)}, to ${shorten(event.to)}, ` +
                  `value ${shorten(event.value, "coins")}, ${event.bounced ? "" : "not "}bounced`,
              );
            }
          }
        }
      }
    }
  }

  function shorten(long: Address | bigint, format: "default" | "coins" = "default"): string {
    if (long instanceof Address) {
      return `${long.toString().slice(0, 4)}..${long.toString().slice(-4)}`;
    }
    if (typeof long == "bigint") {
      if (format == "default") return long.toString();
      if (format == "coins") return fromNano(long);
    }
  }

  function terminalError(e: Error) {
    if (e.message.startsWith("Cannot read properties of undefined")) {
      terminalLog("Error: Contract is not deployed, please deploy by pressing the 'Deploy' button");
    } else {
      terminalLog(e.toString());
    }
  }

  function terminalScrollToBottom() {
    setTimeout(() => {
      terminalElement.scroll({ top: terminalElement.scrollHeight, behavior: "smooth" });
      terminalLog("");
    });
  }

  async function runDeploy(deploy: () => Promise<SendMessageResult[]>) {
    try {
      terminalLog(`> Deploying contract:`);
      const results = await deploy();
      terminalLogMessages(results);
    } catch (e: any) {
      terminalError(e);
    }
    terminalScrollToBottom();
  }

  async function runGetter(name: string, getter: () => Promise<any>) {
    try {
      terminalLog(`> Calling getter ${name}:`);
      const result = await getter();
      terminalLog(`Return value: ${result.toString()}`);
    } catch (e: any) {
      terminalError(e);
    }
    terminalScrollToBottom();
  }

  async function runMessage(name: string, message: () => Promise<SendMessageResult[]>) {
    try {
      terminalLog(`> Sending message ${name}:`);
      const results = await message();
      terminalLogMessages(results);
    } catch (e: any) {
      terminalError(e);
    }
    terminalScrollToBottom();
  }
</script>

<Split initialPrimarySize="47%">
  <div slot="primary" class="panelMarkdown" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; overflow: scroll;">
    {@html markdownHtml}<slot />
    <div class="navMarkdown">
      {#if prev}
        <a style="position: absolute; left: 50px;" href={prev.id}>
          <svg
            style="transform: rotate(180deg);"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="nx-inline nx-h-5 nx-shrink-0 ltr:nx-rotate-180"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
          >
          {prev.name}
        </a>
      {/if}
      {#if next}
        <a style="position: absolute; right: 50px;" href={next.id}>
          {next.name}
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="nx-inline nx-h-5 nx-shrink-0 rtl:nx-rotate-180"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
          >
        </a>
      {/if}
    </div>
    <a class="allExamples" href="all">All Examples</a>
  </div>
  <svelte:fragment slot="splitter">
    <DefaultSplitter color="rgb(17, 17, 17)" hoverColor="#444" dragColor="#444" />
  </svelte:fragment>
  <svelte:fragment slot="secondary">
    <Split horizontal initialPrimarySize="80%">
      <div slot="primary" class="panelCode" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
        <div style="height: 100%; overflow: scroll;">
          <div contenteditable="false" bind:innerHTML={tactHtml} class="dark" />
        </div>
      </div>
      <svelte:fragment slot="splitter">
        <DefaultSplitter color="rgb(17, 17, 17)" hoverColor="#444" dragColor="#444" />
      </svelte:fragment>
      <div
        slot="secondary"
        class="panelBottom"
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column;"
      >
        <div style="display: flex; gap: 10px; flex-wrap: wrap; overflow: hidden;">
          <Button class="buttonAction" size="xs" ripple on:click={() => runDeploy($store.deploy)}>Deploy</Button>

          {#each Object.keys($store.getters) as getter}
            <Button class="buttonAction" size="xs" ripple color="teal" on:click={() => runGetter(getter, $store.getters[getter])}
              >Get {getter}</Button
            >
          {/each}

          {#each Object.keys($store.messages) as message}
            <Button class="buttonAction" size="xs" ripple color="grape" on:click={() => runMessage(message, $store.messages[message])}
              >Send {message}</Button
            >
          {/each}
        </div>
        <pre bind:this={terminalElement} style="flex: 1; color: #666; overflow: scroll;">{terminalContent}</pre>
      </div>
    </Split>
  </svelte:fragment>
</Split>
