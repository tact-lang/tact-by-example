<script lang="ts">
  import TopBanner from "$lib/TopBanner.svelte";
  import "../app.css";
</script>

<div class="app-shell">
  <TopBanner />
  <main class="app-content">
    <slot />
  </main>
</div>

<style>
  .app-shell {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: var(--app-height);
  }

  .app-content {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
  }
</style>
