import { useTranslations } from "next-intl";
import { Phone, Check } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Bubble } from "@/components/illustrations/cleaning-kit";
import { EstimateForm } from "@/components/forms/estimate-form";

export function Contact() {
  const t = useTranslations("contact");
  const perks = t.raw("perks") as string[];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-sky/70 blur-[120px]" aria-hidden="true" />

      <div className="container-elq relative">
        {/* Clino-style call banner */}
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-brand to-[#4f95ff] px-7 py-9 text-white shadow-brand sm:px-12 sm:py-11">
          <svg viewBox="0 0 400 200" className="pointer-events-none absolute left-[38%] -top-8 h-56 w-auto opacity-40" aria-hidden="true">
            <defs>
              <radialGradient id="contact-bubble" cx="0.35" cy="0.3" r="0.75">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <Bubble cx={300} cy={70} r={46} fill="url(#contact-bubble)" />
            <Bubble cx={200} cy={150} r={22} fill="url(#contact-bubble)" />
            <Bubble cx={370} cy={170} r={16} fill="url(#contact-bubble)" />
          </svg>
          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">{t("bannerTitle")}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">{t("bannerText")}</p>
            </div>
            <a href={site.phoneHref} className="group flex shrink-0 items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm text-white/80">{t("callSubtext")}</span>
                <span className="block font-heading text-2xl font-bold">{site.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />
            <ul className="mt-8 flex flex-col gap-3.5">
              {perks.map((perk, index) => (
                <Reveal as="li" key={perk} delay={0.1 + index * 0.06} className="flex items-center gap-3 font-medium text-foreground">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {perk}
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="rounded-[2.25rem] border border-white bg-white/90 p-6 shadow-card backdrop-blur sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-foreground">{t("form.heading")}</h3>
            <p className="mt-1 text-sm text-muted">{t("form.subheading")}</p>
            <div className="mt-7">
              <EstimateForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
