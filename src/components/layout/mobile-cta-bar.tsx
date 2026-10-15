"use client";

import { useTranslations } from "next-intl";
import { Phone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const t = useTranslations("mobileCta");

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/90 px-3 pt-2.5 pb-2.5 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={site.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white shadow-brand"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {t("call")}
        </a>
        <a
          href="#contact"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-sun text-sm font-semibold text-navy"
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {t("estimate")}
        </a>
      </div>
    </div>
  );
}
