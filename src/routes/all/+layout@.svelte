<script lang="ts">
  import { mobile } from "$lib/mobile";
  import "../../app.css";
</script>

{#if !mobile()}
  <div class="allLinks" style="flex-wrap: wrap;">
    <slot />
  </div>
{:else}
  <div class="allLinks" style="display: flex; flex-direction:column; padding: 80px 0;">
    <slot />
  </div>
{/if}
