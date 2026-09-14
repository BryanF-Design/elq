"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
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
          transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
          className="fixed inset-0 z-[60] bg-background lg:hidden"
        >
          <div className="container-elq flex h-20 items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label={t("closeMenu")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="container-elq mt-6 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.08 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between border-b border-border py-5"
              >
                <span className="font-heading text-3xl text-foreground">{t(item.labelKey)}</span>
                <ArrowUpRight
                  className="h-6 w-6 text-rose opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.4 }}
            className="container-elq mt-10 flex flex-col gap-4"
          >
            <a href={site.phoneHref} className="flex items-center gap-2 text-lg text-champagne">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Button as="a" href="#contact" onClick={onClose} size="lg" className="w-full">
              {t("getEstimate")}
            </Button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
