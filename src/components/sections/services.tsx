import { useTranslations } from "next-intl";
import { serviceMeta } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/service-card";

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-elq">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />
          <p className="max-w-[14rem] text-sm font-medium uppercase tracking-[0.15em] text-rose lg:text-right">
            {t("frequencyNote")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const meta = serviceMeta[index];
            return (
              <ServiceCard
                key={item.title}
                icon={meta.icon}
                layout={meta.layout}
                title={item.title}
                description={item.description}
                delay={(index % 3) * 0.08}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
