# Contributing Translations

Thank you for helping translate Tact by Example! This guide explains how to add a new language.

## How it works

The i18n system uses:
- **Locale store** (`src/lib/i18n/index.ts`) — persists language choice in localStorage, auto-detects browser language
- **Translation files** (`src/lib/i18n/en.json`, `ru.json`) — UI strings and example names
- **Content files** (`content.ru.md`, `content.fr.md`, etc.) — translated markdown alongside each example
- **Language switcher** (`src/lib/components/LanguageSwitcher.svelte`) — toggles between available languages
- **Glob loading** — the layout automatically discovers all `content.*.md` files at build time

## Adding a new language

### 1. Create UI translation file

Copy `src/lib/i18n/en.json` to `src/lib/i18n/<locale>.json` (e.g., `zh.json` for Chinese).

Translate all values (keys must stay the same):
```json
{
  "site.title": "Tact 示例教程",
  "nav.allExamples": "所有示例",
  "example.00-hello-world": "Hello World",
  ...
}
```

### 2. Register the locale

In `src/lib/i18n/index.ts`:
1. Add import: `import zh from "./zh.json";`
2. Add to `SUPPORTED_LOCALES`: `["en", "ru", "zh"]`
3. Add to `translations`: `{ en, ru, zh }`

### 3. Update the language switcher

In `src/lib/components/LanguageSwitcher.svelte`, add the label:
```typescript
const labels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  zh: "ZH",
};
```

### 4. Translate example content

For each example in `src/routes/(examples)/*/`, create a `content.<locale>.md` file alongside the existing `content.md`.

For example:
```
src/routes/(examples)/00-hello-world/
├── content.md        # English (original)
├── content.ru.md     # Russian
└── content.zh.md     # Chinese (new)
```

#### Translation guidelines

- Keep ALL HTML tags exactly as they are (class names, styles, links)
- Keep code references in backticks unchanged (`myAddress()`, `init()`, etc.)
- Keep URLs unchanged
- Keep heading structure (# and ##)
- Technical terms to keep in English or transliterate:
  - `getter`, `receiver`, `trait`, `deploy`, `gas` — these are TON/Tact-specific
  - Variable/function names in code — never translate
- Translate naturally, not word-for-word

### 5. Test

```bash
npm run dev
```

Switch languages using the button in the top-right corner. Verify:
- All example names are translated in the sidebar
- Content switches when changing language
- Navigation (prev/next) shows translated names
- Fallback to English works for missing translations

## File structure

```
src/lib/i18n/
├── index.ts          # Locale store, t() function, getLocalizedContent()
├── en.json           # English UI strings
└── ru.json           # Russian UI strings

src/lib/components/
└── LanguageSwitcher.svelte

src/routes/(examples)/
└── 00-hello-world/
    ├── +page.svelte  # No changes needed per example
    ├── content.md    # English content
    └── content.ru.md # Russian content
```

## Notes

- The system falls back to English if a translation is missing
- Browser language is auto-detected on first visit
- Language preference is saved in localStorage
- No changes to individual `+page.svelte` files are needed when adding translations
- All translated content files are loaded at build time via Vite's `import.meta.glob`
