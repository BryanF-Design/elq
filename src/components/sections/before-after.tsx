import { useTranslations } from "next-intl";
import { CircleCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";

export function BeforeAfter() {
  const t = useTranslations("beforeAfter");
  const points = t.raw("points") as string[];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-elq grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />
          <ul className="mt-8 flex flex-col gap-3">
            {points.map((point, index) => (
              <Reveal as="li" key={point} delay={0.1 + index * 0.06} className="flex items-center gap-3 text-base font-medium text-foreground">
                <CircleCheck className="h-6 w-6 shrink-0 fill-brand text-white" aria-hidden="true" />
                {point}
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1} className="rounded-[2.25rem] bg-white p-3 shadow-card">
          <BeforeAfterSlider beforeLabel={t("beforeLabel")} afterLabel={t("afterLabel")} />
        </Reveal>
      </div>
    </section>
  );
}
