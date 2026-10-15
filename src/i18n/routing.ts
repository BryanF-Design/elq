import { defineRouting } from "next-intl/routing";

export const locales = ["es", "en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  zh: "中文",
};

/** Short labels for the segmented language switcher. */
export const localeShortLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  zh: "中文",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
  pathnames: {
    "/": "/",
  },
});
