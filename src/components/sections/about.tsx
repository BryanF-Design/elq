import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SceneArt } from "@/components/illustrations/scene-art";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

type Highlight = { value: string; label: string };

export function About() {
  const t = useTranslations("about");
  const highlights = t.raw("highlights") as Highlight[];
  const alts = t.raw("imageAlts") as string[];

  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="container-elq grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* collage */}
        <Reveal direction="right" className="relative mx-auto w-full max-w-xl">
          <div className="grid grid-cols-[1.15fr_1fr] gap-4">
            <div className="aspect-[4/3.4] overflow-hidden rounded-[2rem] shadow-card">
              <SceneArt motif="kitchen" label={alts[0]} />
            </div>
            <div className="flex items-end justify-center">
              <div className="aspect-square w-[88%] overflow-hidden rounded-full border-[6px] border-background shadow-card">
                <SceneArt motif="bathroom" label={alts[1]} />
              </div>
            </div>
            <div aria-hidden="true" />
            <div className="-mt-16 aspect-[4/3.6] overflow-hidden rounded-[2rem] border-[6px] border-background shadow-card sm:-mt-20">
              <SceneArt motif="living" label={alts[2]} />
            </div>
          </div>

          <div className="animate-float absolute bottom-4 left-2 flex w-32 flex-col items-center rounded-3xl bg-gradient-to-br from-[#ecd3ca] via-brand to-brand-strong px-4 py-4 sm:bottom-6 sm:left-10 sm:w-44 sm:px-5 sm:py-6 text-center text-on-brand shadow-brand">
            <span className="font-heading text-4xl font-medium sm:text-5xl">{t("badgeValue")}</span>
            <span className="mt-1 text-xs font-medium leading-snug text-on-brand/75 sm:text-sm">{t("badgeLabel")}</span>
          </div>
          <span className="absolute -left-3 top-10 h-16 w-16 rounded-full border-2 border-dashed border-brand/30" aria-hidden="true" />
          <span className="absolute -right-2 bottom-24 h-5 w-5 rounded-full bg-brand" aria-hidden="true" />
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-heading text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.85rem]">
              {t("heading")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted sm:text-lg">{t("body")}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 grid grid-cols-3 divide-x divide-border rounded-3xl border border-border bg-surface p-2 shadow-soft">
            {highlights.map((item) => (
              <div key={item.value} className="px-3 py-3 text-center sm:px-4">
                <p className="font-heading text-lg font-medium text-brand sm:text-xl">{item.value}</p>
                <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{item.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-6">
            <Button as="a" href="#services" size="lg">
              {t("cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <a href={site.phoneHref} className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-medium text-muted">{t("questions")}</span>
                <span className="block font-semibold text-foreground">{site.phoneDisplay}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
