import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as AccordionItem[];

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container-elq grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
