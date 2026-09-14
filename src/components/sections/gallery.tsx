import { useTranslations } from "next-intl";
import { galleryTiles } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GalleryMotif } from "@/components/illustrations/gallery-motif";
import { cn } from "@/lib/utils";

export function Gallery() {
  const t = useTranslations("gallery");
  const items = t.raw("items") as { alt: string }[];

  return (
    <section className="py-24 lg:py-32">
      <div className="container-elq">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
          {items.map((item, index) => {
            const tile = galleryTiles[index];
            return (
              <Reveal
                key={item.alt}
                delay={(index % 4) * 0.06}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border",
                  tile.span === "wide" && "col-span-2",
                  tile.span === "tall" && "row-span-2",
                )}
              >
                <GalleryMotif
                  motif={tile.motif}
                  className="h-full w-full scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                />
                <span className="sr-only">{item.alt}</span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
