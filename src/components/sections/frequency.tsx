import { useTranslations } from "next-intl";
import { frequencyIcons } from "@/data/frequency";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { FrequencyCalendar } from "@/components/sections/frequency-calendar";

const PATTERN_KEYS = ["weekly", "biweekly", "monthly"] as const;

export function Frequency() {
  const t = useTranslations("frequency");
  const options = t.raw("options") as { name: string; description: string }[];

  return (
    <section className="border-y border-border bg-background-secondary/60 py-24 lg:py-32">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} className="mx-auto" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {options.map((option, index) => {
            const Icon = frequencyIcons[index];
            return (
              <Reveal
                key={option.name}
                delay={index * 0.1}
                className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-rose">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <FrequencyCalendar pattern={PATTERN_KEYS[index]} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-foreground">{option.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{option.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center text-sm text-muted">
          {t("note")}
        </Reveal>
      </div>
    </section>
  );
}
