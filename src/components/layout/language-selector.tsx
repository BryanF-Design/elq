"use client";

import { useLocale, useTranslations } from "next-intl";
import { useId, useTransition } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeShortLabels, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Segmented ES · EN · 中文 switch. All three options are always visible so
 * visitors can find their language without opening a menu.
 */
export function LanguageSelector({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = usePrefersReducedMotion();
  const [isPending, startTransition] = useTransition();
  const pillId = useId();
  const onDark = variant === "dark";

  function selectLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "relative inline-flex items-center rounded-full p-1",
        onDark ? "bg-white/10 ring-1 ring-white/20" : "bg-brand-soft ring-1 ring-brand/10",
        isPending && "opacity-70",
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            onClick={() => selectLocale(l)}
            aria-pressed={active}
            aria-label={localeNames[l]}
            title={localeNames[l]}
            className={cn(
              "relative z-10 min-w-10 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors duration-300",
              active
                ? onDark
                  ? "text-brand"
                  : "text-white"
                : onDark
                  ? "text-white/80 hover:text-white"
                  : "text-muted-strong hover:text-brand",
            )}
          >
            {active ? (
              <motion.span
                layoutId={`lang-pill-${pillId}`}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                className={cn(
                  "absolute inset-0 -z-10 rounded-full",
                  onDark ? "bg-white" : "bg-brand shadow-[0_6px_16px_-6px_rgba(31,107,255,0.8)]",
                )}
              />
            ) : null}
            {localeShortLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
