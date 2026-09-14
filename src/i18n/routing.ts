import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "zh", "hi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  zh: "中文",
  hi: "हिन्दी",
};

/** Short labels for the compact language switcher (no flags, per brand guidance). */
export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  zh: "中文",
  hi: "हिं",
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
