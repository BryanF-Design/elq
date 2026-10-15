import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SceneArt } from "@/components/illustrations/scene-art";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as AccordionItem[];

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-elq grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

          <Reveal delay={0.15} className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3d88ff] to-brand-strong p-7 text-white shadow-brand">
            <div className="absolute -right-12 -top-12 h-36 w-36 overflow-hidden rounded-full border-4 border-white/30 opacity-90">
              <SceneArt motif="estimate" />
            </div>
            <p className="relative max-w-[65%] font-heading text-2xl font-bold">{t("cardTitle")}</p>
            <p className="relative mt-3 max-w-[65%] text-sm leading-relaxed text-white/85">{t("cardText")}</p>
            <a
              href={site.phoneHref}
              className="relative mt-6 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 font-semibold text-brand transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-navy">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
