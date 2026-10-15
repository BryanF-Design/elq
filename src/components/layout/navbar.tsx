"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ElqMark } from "@/components/illustrations/elq-mark";
import { LanguageSelector } from "@/components/layout/language-selector";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t("skipToContent")}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-16 max-w-[78rem] items-center justify-between gap-4 rounded-full border px-3 pl-4 transition-all duration-500 sm:h-[4.5rem] sm:pl-5",
            scrolled
              ? "border-white/80 bg-white/85 shadow-[0_18px_50px_-20px_rgba(58,17,32,0.28)] backdrop-blur-xl"
              : "border-transparent bg-white/40 backdrop-blur-md",
          )}
        >
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <ElqMark />
            <span className="leading-none">
              <span className="block font-heading text-lg font-extrabold tracking-tight text-foreground">
                ELQ<span className="text-brand"> Cleaning</span>
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                LLC
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-strong transition-colors duration-300 hover:bg-brand-soft hover:text-brand"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSelector />
            <a
              href={site.phoneHref}
              aria-label={`${t("callNow")} ${site.phoneDisplay}`}
              className="flex h-11 items-center gap-2 rounded-full border border-foreground/10 bg-white px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand 2xl:px-4"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              <span className="xl:hidden 2xl:inline">{site.phoneDisplay}</span>
            </a>
            <Button as="a" href="#contact" variant="sun" size="sm" className="h-11 px-5">
              {t("getEstimate")}
            </Button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSelector className="hidden sm:inline-flex lg:hidden" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("openMenu")}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-brand transition-transform hover:scale-105"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
