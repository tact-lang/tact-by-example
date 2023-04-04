<script lang="ts">
  import type { SendMessageResult } from "@ton-community/sandbox";
  import { Address, Cell, fromNano, type Contract } from "ton-core";
  import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter";
  import { Button } from "@svelteuidev/core";
  import { Buffer } from "buffer";
  import { onMount } from "svelte";
  import { highlightTactCode } from "$lib/highlight";
  import { marked } from "marked";
  import { convertToText } from "$lib/helpers";
  import { mobile } from "$lib/mobile";
  import store from "$lib/store";

  import "../../loader.css";
  import "../../app.css";
  import "../../shiki.css";
  import { slide } from "svelte/transition";

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  let loaded = false;
  let terminalElement: HTMLPreElement;
  let markdownHtml = "";
  let tactHtml = "";
  let terminalContent = "";
  let contractInstances: Contract[];
  let addressesNames: { [address: string]: string } = {};
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
    loaded = true;
    globalThis.Buffer = Buffer;
  });

  function terminalLog(msg: string) {
    terminalContent += msg + "\n";
  }

  function terminalLogMessages(results: SendMessageResult[]) {
    for (const result of results) {
      for (const transaction of result.transactions) {
        if (transaction.inMessage?.info.type == "internal" || transaction.inMessage?.info.type == "external-in") {
          if (transaction.inMessage?.info.type == "internal") {
            if (transaction.debugLogs) terminalLog(transaction.debugLogs);
            if (transaction.description.type == "generic") {
              if (transaction.description.computePhase.type == "vm") {
                const compute = transaction.description.computePhase;
                if (compute.exitCode == 4294967282) compute.exitCode = -14;
                terminalLog(
                  `Transaction executed: ${compute.success ? "success" : "error"}, ` +
                    `exit code ${compute.exitCode}, gas ${shorten(compute.gasFees, "coins")}`,
                );
                let foundError = false;
                for (const contractInstance of contractInstances) {
                  if (transaction.inMessage?.info.dest.equals(contractInstance.address)) {
                    if (compute.exitCode == -14) compute.exitCode = 13;
                    const message = contractInstance?.abi?.errors?.[compute.exitCode]?.message;
                    if (message) {
                      terminalLog(`Error message: ${message}`);
                      foundError = true;
                    }
                  }
                }
                if (!foundError) {
                  const knownErrors: { [code: number]: { message: string } } = {
                    [-14]: { message: `Out of gas error` },
                    2: { message: `Stack undeflow` },
                    3: { message: `Stack overflow` },
                    4: { message: `Integer overflow` },
                    5: { message: `Integer out of expected range` },
                    6: { message: `Invalid opcode` },
                    7: { message: `Type check error` },
                    8: { message: `Cell overflow` },
                    9: { message: `Cell underflow` },
                    10: { message: `Dictionary error` },
                    13: { message: `Out of gas error` },
                    32: { message: `Method ID not found` },
                    34: { message: `Action is invalid or not supported` },
                    37: { message: `Not enough TON` },
                    38: { message: `Not enough extra-currencies` },
                    128: { message: `Null reference exception` },
                    129: { message: `Invalid serialization prefix` },
                    130: { message: `Invalid incoming message` },
                    131: { message: `Constraints error` },
                    132: { message: `Access denied` },
                    133: { message: `Contract stopped` },
                    134: { message: `Invalid argument` },
                    135: { message: `Code of a contract was not found` },
                    136: { message: `Invalid address` },
                    137: { message: `Masterchain support is not enabled for this contract` },
                  };
                  const message = knownErrors[compute.exitCode]?.message;
                  if (message) {
                    terminalLog(`Error message: ${message}`);
                    foundError = true;
                  }
                }
              }
            }
          }
          for (let i = 0; i < transaction.outMessagesCount; i++) {
            const outMessage = transaction.outMessages.get(i);
            if (outMessage?.info.type == "external-out") {
              if (outMessage.info.dest == null) {
                const name = messageName(outMessage.body);
                terminalLog(`Log emitted: ${name}, from ${shorten(outMessage.info.src)}`);
              }
            }
          }
          for (const event of transaction.events) {
            if (event.type == "message_sent") {
              const name = messageName(event.body);
              terminalLog(
                `Message sent: ${name}, from ${shorten(event.from)}, to ${shorten(event.to)}, ` +
                  `value ${shorten(event.value, "coins")}, ${event.bounced ? "" : "not "}bounced`,
              );
            }
          }
        }
      }
    }
  }

  function messageName(body: Cell): string {
    try {
      const slice = body.beginParse();
      let op = slice.loadInt(32);
      if (op == 0) {
        return `"${slice.loadStringTail()}"`;
      }
      if (op < 0) op += 4294967296;
      for (const contractInstance of contractInstances) {
        for (const type of contractInstance?.abi?.types ?? []) {
          if (op == type.header) return type.name;
        }
      }
      if (op == 0xffffffff) {
        return "error";
      }
      return `unknown (0x${op.toString(16)})`;
    } catch (e) {}
    return "empty";
  }

  function shorten(long: Address | bigint, format: "default" | "coins" = "default"): string {
    if (long instanceof Address) {
      if (addressesNames[long.toString()]) return addressesNames[long.toString()];
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

  async function runDeploy(deploy: () => Promise<[Contract[], { [address: string]: string }, SendMessageResult[]]>) {
    try {
      terminalLog(`> Deploying contract:`);
      const [contracts, addresses, results] = await deploy();
      contractInstances = contracts;
      addressesNames = addresses;
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
      terminalLog(`Return value: ${convertToText(result)}`);
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

{#if !loaded}
  <div class="pageLoader">
    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube" />
      <div class="sk-cube2 sk-cube" />
      <div class="sk-cube4 sk-cube" />
      <div class="sk-cube3 sk-cube" />
    </div>
  </div>
{/if}

{#if !mobile()}
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
{:else}
  <div class="panelMarkdown" style="position: block;">
    {@html markdownHtml}<slot />
  </div>

  <div class="panelCode" style="margin: 20px;">
    <div style="height: 100%; overflow: scroll;">
      <div contenteditable="false" bind:innerHTML={tactHtml} class="dark" />
    </div>
  </div>

  <div class="panelBottom" style="display: flex; flex-direction: column; margin: 20px;">
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
    <pre bind:this={terminalElement} style="color: #666; overflow: scroll; height: 120px;">{terminalContent}</pre>
  </div>

  <div class="navMarkdown" style="padding: 40px;">
    {#if prev}
      <a style="float: left; margin-bottom: 15px;" href={prev.id}>
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
      <a style="float: right; margin-bottom: 15px;" href={next.id}>
        {next.name}
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="nx-inline nx-h-5 nx-shrink-0 rtl:nx-rotate-180"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
        >
      </a>
    {/if}
  </div>
  <a class="allExamples" style="margin-bottom: 30px;" href="all">All Examples</a>
{/if}
