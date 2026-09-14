import { useTranslations } from "next-intl";
import { whyElqIcons } from "@/data/why-elq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GalleryMotif } from "@/components/illustrations/gallery-motif";

export function WhyElq() {
  const t = useTranslations("whyElq");
  const points = t.raw("points") as { title: string; description: string }[];

  return (
    <section id="why-elq" className="py-24 lg:py-32">
      <div className="container-elq grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" className="relative order-2 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border-strong lg:order-1">
          <GalleryMotif motif="living" className="h-full w-full" />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-border-strong bg-background/70 px-5 py-4 backdrop-blur-md">
            <p className="font-heading text-lg text-champagne">{t("heading")}</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

          <ul className="mt-10 flex flex-col divide-y divide-border">
            {points.map((point, index) => {
              const Icon = whyElqIcons[index];
              return (
                <Reveal key={point.title} as="li" delay={index * 0.06} className="flex gap-5 py-5 first:pt-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-rose">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">{point.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
