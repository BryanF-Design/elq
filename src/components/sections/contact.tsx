import { useTranslations } from "next-intl";
import { PhoneCall } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { EstimateForm } from "@/components/forms/estimate-form";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-rose/10 blur-[120px]" aria-hidden="true" />

      <div className="container-elq grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-4 rounded-2xl border border-border-strong bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-strong">{t("callSubtext")}</p>
            <MagneticButton className="w-fit">
              <Button as="a" href={site.phoneHref} size="lg">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {t("callCta")} — {site.phoneDisplay}
              </Button>
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="rounded-[1.75rem] border border-border-strong bg-surface p-6 sm:p-9">
          <h3 className="font-heading text-2xl text-foreground">{t("form.heading")}</h3>
          <div className="mt-7">
            <EstimateForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
