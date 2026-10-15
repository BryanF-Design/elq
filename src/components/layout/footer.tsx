import { useTranslations } from "next-intl";
import { Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { navItems } from "@/data/nav";
import { ElqMark } from "@/components/illustrations/elq-mark";
import { Sparkle } from "@/components/illustrations/sparkle";
import { LanguageSelector } from "@/components/layout/language-selector";
import { Wave } from "@/components/ui/wave";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 text-white">
      <Wave className="text-navy" />
      <div className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/30 blur-[110px]"
          aria-hidden="true"
        />
        <div className="container-elq relative">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
            <p className="max-w-xl font-heading text-2xl font-bold leading-snug sm:text-3xl">{t("ctaTitle")}</p>
            <a
              href={site.phoneHref}
              className="group flex items-center gap-3 rounded-full bg-sun py-2 pl-2 pr-6 font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sun">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
          </div>

          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <ElqMark className="h-10 w-10" />
                <span className="font-heading text-xl font-extrabold">
                  {site.shortName}
                  <span className="text-brand"> LLC</span>
                </span>
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
                <Sparkle className="h-3 w-3" />
                {site.tagline}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{t("description")}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{t("servicesHeading")}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                {[...navItems, { labelKey: "contact" as const, href: "#contact" }].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {tNav(item.labelKey)}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{t("contactHeading")}</h3>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-white/50">{t("phoneLabel")}</p>
              <a href={site.phoneHref} className="mt-1.5 flex items-center gap-2 text-lg font-semibold hover:text-sun">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-white/50">{t("languageLabel")}</p>
              <LanguageSelector variant="dark" className="mt-2" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
            <p>
              © {year} {site.name}. {t("rights")}
            </p>
            <p>{site.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
