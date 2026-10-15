import { useTranslations } from "next-intl";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 lg:py-28">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

        {testimonials.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.08}
                className="flex flex-col gap-4 rounded-[2rem] border border-border bg-white p-8 shadow-soft"
              >
                <Quote className="h-8 w-8 fill-brand-soft text-brand" aria-hidden="true" />
                {testimonial.rating ? (
                  <div className="flex gap-1 text-sun-strong" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4" fill={i < testimonial.rating! ? "currentColor" : "none"} />
                    ))}
                  </div>
                ) : null}
                <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-auto text-sm font-semibold text-foreground">
                  {testimonial.name}
                  {testimonial.location ? <span className="font-normal text-muted"> — {testimonial.location}</span> : null}
                </p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal
            delay={0.1}
            className="relative mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 overflow-hidden rounded-[2rem] border-2 border-dashed border-brand/25 bg-white/70 px-8 py-14 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Quote className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="flex gap-1 text-sun-strong" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">{t("emptyTitle")}</h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted">{t("emptyDescription")}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
