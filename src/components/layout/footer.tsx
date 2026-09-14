import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ElqMark } from "@/components/illustrations/elq-mark";
import { LanguageSelector } from "@/components/layout/language-selector";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-elq grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <ElqMark />
            <span className="font-heading text-base font-semibold tracking-[0.08em] text-foreground">
              {site.name.toUpperCase()}
            </span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose">{site.tagline}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{t("description")}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-strong">
            {t("servicesHeading")}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a href="#services" className="text-sm text-muted transition-colors hover:text-champagne">
                {tNav("services")}
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm text-muted transition-colors hover:text-champagne">
                {tNav("faq")}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-muted transition-colors hover:text-champagne">
                {tNav("contact")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-strong">
            {t("contactHeading")}
          </h3>
          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-muted">{t("phoneLabel")}</p>
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center gap-2 text-lg text-foreground transition-colors hover:text-champagne"
          >
            <Phone className="h-4 w-4 text-rose" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          <p className="mt-6 text-xs uppercase tracking-[0.15em] text-muted">{t("languageLabel")}</p>
          <div className="mt-2">
            <LanguageSelector variant="footer" />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-elq flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
