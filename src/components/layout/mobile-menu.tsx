"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, ArrowRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ElqMark } from "@/components/illustrations/elq-mark";
import { LanguageSelector } from "@/components/layout/language-selector";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations("nav");
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t("openMenu")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-gradient-to-b from-background to-[#1a1312] xl:hidden"
        >
          <div className="container-elq flex h-20 items-center justify-between">
            <span className="flex items-center gap-2.5">
              <ElqMark />
              <span className="font-heading text-lg font-medium text-foreground">
                ELQ<span className="text-brand"> Cleaning</span>
              </span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t("closeMenu")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="container-elq mt-2">
            <LanguageSelector />
          </div>

          <nav className="container-elq mt-6 flex flex-col gap-2" aria-label="Mobile">
            {[...navItems, { labelKey: "contact" as const, href: "#contact" }].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.05 + index * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.25)]"
              >
                <span className="font-heading text-xl font-semibold text-foreground">{t(item.labelKey)}</span>
                <ArrowRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
            ))}
          </nav>

          <div className="container-elq mt-8 flex flex-col gap-3 pb-10">
            <Button as="a" href={site.phoneHref} variant="outline" size="lg" className="w-full">
              <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
              {site.phoneDisplay}
            </Button>
            <Button as="a" href="#contact" onClick={onClose} variant="sun" size="lg" className="w-full">
              {t("getEstimate")}
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
