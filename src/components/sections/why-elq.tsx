import { useTranslations } from "next-intl";
import { BadgeCheck } from "lucide-react";
import { whyElqIcons } from "@/data/why-elq";
import { SceneArt } from "@/components/illustrations/scene-art";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function WhyElq() {
  const t = useTranslations("whyElq");
  const tHero = useTranslations("hero");
  const tGallery = useTranslations("gallery");
  const points = t.raw("points") as { title: string; description: string }[];
  const galleryItems = tGallery.raw("items") as { alt: string }[];

  return (
    <section id="why-elq" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sky/60 blur-[120px]" aria-hidden="true" />
      <div className="container-elq relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = whyElqIcons[index];
              return (
                <Reveal
                  as="li"
                  key={point.title}
                  delay={index * 0.06}
                  className={cn(
                    "flex gap-4 rounded-3xl border border-border bg-surface/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft",
                    index === points.length - 1 && points.length % 2 === 1 && "sm:col-span-2",
                  )}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-base font-semibold text-foreground">{point.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{point.description}</span>
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal direction="left" className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card">
            <SceneArt motif="floor" label={galleryItems[1]?.alt} />
          </div>
          <div className="absolute -bottom-8 -left-2 aspect-square w-[48%] overflow-hidden rounded-[2rem] border-[6px] border-background shadow-card sm:-bottom-10 sm:-left-12">
            <SceneArt motif="detail" label={galleryItems[4]?.alt} />
          </div>
          <div className="glass animate-float absolute right-3 top-6 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8 sm:top-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-on-brand">
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-foreground">{tHero("floatingEstimate")}</span>
              <span className="block text-xs text-muted">{tHero("floatingEstimateLabel")}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
