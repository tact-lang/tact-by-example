<script lang="ts">
  import examples from "../(examples)/examples.json";
</script>

{#each examples as example}
  <div style="display: inline-block; margin: 0 35px;">
    <a href={example.id}>{example.name}</a>
  </div>
{/each}
