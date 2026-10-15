import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { frequencyIcons, featuredFrequencyIndex } from "@/data/frequency";
import { Sparkle } from "@/components/illustrations/sparkle";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SwipeHint } from "@/components/ui/swipe-hint";
import { cn } from "@/lib/utils";

type Option = { name: string; description: string; features: string[] };

export function Frequency() {
  const t = useTranslations("frequency");
  const options = t.raw("options") as Option[];

  return (
    <section id="plans" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.06] to-transparent" aria-hidden="true" />
      <div className="container-elq relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-pretty text-base leading-relaxed text-muted lg:text-right">{t("subheading")}</p>
          </Reveal>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pt-6 pb-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-14 md:grid md:snap-none md:grid-cols-3 md:items-stretch md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {options.map((option, index) => {
            const Icon = frequencyIcons[index];
            const featured = index === featuredFrequencyIndex;
            return (
              <Reveal key={option.name} delay={index * 0.08} className={cn("w-[84%] shrink-0 snap-start sm:w-[60%] md:w-auto", featured && "md:-mt-4 md:mb-4")}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-1.5 sm:p-8",
                    featured
                      ? "bg-gradient-to-b from-[#ecd3ca] via-brand to-brand-strong text-on-brand shadow-[0_40px_80px_-30px_rgba(215,170,164,0.55)]"
                      : "border border-border bg-surface/90 shadow-card backdrop-blur",
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-on-brand px-4 py-1.5 text-xs font-bold text-brand shadow-md ring-1 ring-brand/40">
                      <Sparkle className="h-3 w-3" />
                      {t("featured")}
                    </span>
                  ) : null}

                  <div className="flex items-center justify-between">
                    <h3 className={cn("font-heading text-xl font-semibold", featured ? "text-on-brand" : "text-foreground")}>
                      {option.name}
                    </h3>
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl",
                        featured ? "bg-on-brand/10 text-on-brand" : "bg-brand-soft text-brand",
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>

                  <p className="mt-5 flex items-baseline gap-2">
                    <span className={cn("font-heading text-5xl font-medium", featured ? "text-on-brand" : "text-brand")}>
                      {t("priceLabel")}
                    </span>
                    <span className={cn("text-sm font-medium", featured ? "text-on-brand/70" : "text-muted")}>
                      {t("priceSuffix")}
                    </span>
                  </p>
                  <p className={cn("mt-4 text-sm leading-relaxed", featured ? "text-on-brand/80" : "text-muted")}>
                    {option.description}
                  </p>

                  <div className={cn("my-6 h-px", featured ? "bg-on-brand/15" : "bg-border")} aria-hidden="true" />

                  <ul className="flex flex-1 flex-col gap-3.5">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            featured ? "bg-on-brand text-brand" : "bg-brand text-on-brand",
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className={featured ? "text-on-brand" : "text-foreground"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href="#contact"
                    variant={featured ? "white" : "primary"}
                    size="md"
                    className="mt-8 w-full"
                  >
                    {t("cta")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <SwipeHint className="sm:flex md:hidden" />

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 md:mt-12 max-w-xl text-center text-sm text-muted">{t("note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
