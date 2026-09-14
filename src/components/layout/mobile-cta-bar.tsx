"use client";

import { useTranslations } from "next-intl";
import { Phone, ClipboardList } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const t = useTranslations("mobileCta");

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border-strong bg-background/95 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-border">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 bg-background py-3.5 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-rose" aria-hidden="true" />
          {t("call")}
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-rose py-3.5 text-sm font-semibold text-background"
        >
          <ClipboardList className="h-4 w-4" aria-hidden="true" />
          {t("estimate")}
        </a>
      </div>
    </div>
  );
}
