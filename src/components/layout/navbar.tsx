"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ElqMark } from "@/components/illustrations/elq-mark";
import { LanguageSelector } from "@/components/layout/language-selector";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 90], [0, 1]);
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(215,170,164,0)", "rgba(215,170,164,0.16)"],
  );

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rose focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-background"
      >
        {t("skipToContent")}
      </a>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 border-b bg-background/85 backdrop-blur-xl"
          style={{ opacity: backgroundOpacity, borderColor }}
        />
        <nav className="container-elq relative flex h-20 items-center justify-between" aria-label="Primary">
          <a href="#home" className="flex items-center gap-2.5">
            <ElqMark className="h-8 w-8 shrink-0" />
            <span className="font-heading text-sm font-semibold tracking-[0.08em] text-foreground sm:text-base">
              ELQ CLEANING LLC
            </span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-strong transition-colors duration-300 hover:text-champagne"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSelector />
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-muted-strong transition-colors hover:text-champagne"
            >
              <Phone className="h-4 w-4 text-rose" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Button as="a" href="#contact" size="md">
              {t("getEstimate")}
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("openMenu")}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-rose"
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
