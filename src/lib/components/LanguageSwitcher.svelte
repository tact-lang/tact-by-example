<script lang="ts">
  import { locale, SUPPORTED_LOCALES, type Locale } from "$lib/i18n";

  const labels: Record<Locale, string> = {
    en: "EN",
    ru: "RU",
  };

  function toggle() {
    const idx = SUPPORTED_LOCALES.indexOf($locale);
    const next = SUPPORTED_LOCALES[(idx + 1) % SUPPORTED_LOCALES.length];
    locale.set(next);
  }
</script>

<button class="lang-switcher" on:click={toggle} title="Switch language">
  {labels[$locale]}
</button>

<style>
  .lang-switcher {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 1000;
    background: #333;
    color: #fff;
    border: 1px solid #555;
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .lang-switcher:hover {
    background: #555;
  }
</style>
