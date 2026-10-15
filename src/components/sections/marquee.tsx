import { useTranslations } from "next-intl";
import { Sparkle } from "@/components/illustrations/sparkle";
import { Wave } from "@/components/ui/wave";

/** Care.Clean-style blue band with an endlessly scrolling list of services. */
export function Marquee() {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const row = [...items, ...items];

  return (
    <section aria-label={items.join(", ")} className="relative">
      <Wave className="text-brand" />
      <div className="mask-fade-x overflow-hidden bg-gradient-to-r from-[#e8c9c3] via-brand to-brand-strong py-5 sm:py-6">
        <ul className="animate-marquee flex w-max items-center gap-8 pr-8" aria-hidden="true">
          {row.map((item, index) => (
            <li key={index} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-heading text-xl font-medium italic text-on-brand sm:text-2xl">{item}</span>
              <Sparkle className="h-5 w-5 text-on-brand/70" />
            </li>
          ))}
        </ul>
      </div>
      <Wave className="text-brand" flip />
    </section>
  );
}
