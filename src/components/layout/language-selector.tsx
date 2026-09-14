"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeShortLabels, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

export function LanguageSelector({ variant = "navbar" }: { variant?: "navbar" | "footer" }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function selectLocale(nextLocale: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        className={cn(
          "flex items-center gap-1.5 rounded-full border border-border-strong px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-strong transition-colors duration-300 hover:border-rose hover:text-champagne",
          variant === "footer" && "border-border",
        )}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{localeShortLabels[locale]}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-label={t("language")}
            initial={{ opacity: 0, y: reduceMotion ? 0 : -6, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -6, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-border-strong bg-surface/95 py-1.5 shadow-2xl backdrop-blur-md",
              variant === "footer" && "bottom-full top-auto mb-2 mt-0",
            )}
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => selectLocale(l)}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-muted-strong transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  <span>{localeNames[l]}</span>
                  {l === locale ? <Check className="h-4 w-4 text-rose" aria-hidden="true" /> : null}
                </button>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
