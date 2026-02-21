<script lang="ts">
  import examples from "../(examples)/examples.json";
  import { tt } from "$lib/i18n";
  import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
</script>

<LanguageSwitcher />

{#each examples as example}
  <div style="display: inline-block; margin: 0 35px;">
    <a href={example.id}>{$tt(`example.${example.id}`) || example.name}</a>
  </div>
{/each}
