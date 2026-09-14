import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";

export function BeforeAfter() {
  const t = useTranslations("beforeAfter");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} className="mx-auto" />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <BeforeAfterSlider beforeLabel={t("beforeLabel")} afterLabel={t("afterLabel")} />
        </Reveal>
      </div>
    </section>
  );
}
