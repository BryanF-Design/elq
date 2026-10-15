import { useTranslations } from "next-intl";
import { galleryMotifs } from "@/data/gallery";
import { SceneArt } from "@/components/illustrations/scene-art";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Gallery() {
  const t = useTranslations("gallery");
  const items = t.raw("items") as { title: string; alt: string }[];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

        <Reveal delay={0.1} className="mt-14 overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-card sm:p-3">
          <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
            {items.map((item, index) => (
              <li key={item.title} className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
                <SceneArt
                  motif={galleryMotifs[index]}
                  label={item.alt}
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="glass absolute bottom-3 left-3 rounded-full px-3.5 py-1.5 text-xs font-bold text-foreground sm:bottom-4 sm:left-4 sm:text-sm">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
