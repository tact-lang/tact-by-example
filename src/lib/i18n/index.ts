import { writable, derived } from "svelte/store";
import { browser } from "$app/environment";
import en from "./en.json";
import ru from "./ru.json";

export const SUPPORTED_LOCALES = ["en", "ru"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const translations: Record<Locale, Record<string, string>> = { en, ru };

function createLocaleStore() {
  const defaultLocale: Locale = "en";
  let initial: Locale = defaultLocale;

  if (browser) {
    const saved = localStorage.getItem("tact-locale") as Locale | null;
    if (saved && SUPPORTED_LOCALES.includes(saved)) {
      initial = saved;
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (SUPPORTED_LOCALES.includes(browserLang as Locale)) {
        initial = browserLang as Locale;
      }
    }
  }

  const { subscribe, set: _set } = writable<Locale>(initial);

  return {
    subscribe,
    set(value: Locale) {
      if (browser) {
        localStorage.setItem("tact-locale", value);
        document.documentElement.lang = value;
      }
      _set(value);
    },
  };
}

export const locale = createLocaleStore();

export function t(key: string, lang?: Locale): string {
  let currentLang: Locale = "en";
  locale.subscribe((v) => (currentLang = v))();
  const l = lang ?? currentLang;
  return translations[l]?.[key] ?? translations.en[key] ?? key;
}

export const tt = derived(locale, ($locale) => {
  return (key: string): string => {
    return translations[$locale]?.[key] ?? translations.en[key] ?? key;
  };
});

export function getLocalizedContent(
  defaultContent: string,
  translatedContents: Record<string, string>,
  lang: string,
): string {
  if (lang === "en") return defaultContent;
  const key = `./content.${lang}.md`;
  return translatedContents[key] ?? defaultContent;
}
