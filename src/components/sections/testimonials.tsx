import { useTranslations } from "next-intl";
import { MessageCircleHeart, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} className="mx-auto" />

        {testimonials.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.08}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8"
              >
                {testimonial.rating ? (
                  <div className="flex gap-1 text-rose" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4" fill={i < testimonial.rating! ? "currentColor" : "none"} />
                    ))}
                  </div>
                ) : null}
                <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-auto text-sm font-medium text-foreground">
                  {testimonial.name}
                  {testimonial.location ? <span className="text-muted"> — {testimonial.location}</span> : null}
                </p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1} className="mx-auto mt-14 flex max-w-md flex-col items-center gap-4 rounded-2xl border border-dashed border-border-strong px-8 py-14 text-center">
            <MessageCircleHeart className="h-8 w-8 text-rose" aria-hidden="true" />
            <h3 className="font-heading text-xl text-foreground">{t("emptyTitle")}</h3>
            <p className="text-sm leading-relaxed text-muted">{t("emptyDescription")}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
