import { useTranslations } from "next-intl";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { serviceIcons } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-80 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-elq relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground shadow-soft">
              <CalendarCheck className="h-4 w-4 text-brand" aria-hidden="true" />
              {t("frequencyNote")}
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.07}>
                <a
                  href="#contact"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#e8c9c3] hover:via-brand hover:to-brand-strong hover:shadow-brand sm:p-8"
                >
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-soft transition-colors duration-500 group-hover:bg-on-brand/10"
                    aria-hidden="true"
                  />
                  <span className="pointer-events-none absolute right-7 top-7 font-heading text-sm font-semibold text-brand/50 transition-colors group-hover:text-on-brand/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-on-brand shadow-brand transition-colors duration-500 group-hover:bg-on-brand group-hover:text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-7 font-heading text-xl font-semibold text-foreground transition-colors duration-500 group-hover:text-on-brand sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-on-brand/80 sm:text-base">
                    {item.description}
                  </p>
                  <span className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-500 group-hover:text-on-brand">
                    {t("cta")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
