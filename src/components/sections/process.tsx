import { useTranslations } from "next-intl";
import { processMotifs } from "@/data/process";
import { SceneArt } from "@/components/illustrations/scene-art";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Wave } from "@/components/ui/wave";

type Step = { number: string; title: string; description: string };

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="process" className="relative my-10">
      <Wave className="text-brand" />
      <div className="relative overflow-hidden bg-brand py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(10,22,51,0.18),transparent_40%)]"
          aria-hidden="true"
        />
        <div className="container-elq relative">
          <SectionHeading
            align="center"
            tone="dark"
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            subheading={t("subheading")}
            className="max-w-3xl"
          />

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#fffaf0] p-3 shadow-[0_30px_60px_-30px_rgba(10,22,51,0.6)] transition-transform duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-between px-3 pt-2 pb-3">
                    <span className="font-heading text-3xl font-extrabold text-foreground">{step.number}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-sun ring-4 ring-sun/30" aria-hidden="true" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <svg
                      viewBox="0 0 200 10"
                      preserveAspectRatio="none"
                      className="absolute inset-x-0 top-0 z-10 h-3 w-full text-[#fffaf0]"
                      aria-hidden="true"
                    >
                      <path d={`M0 0H200V2${"q-5 8-10 0".repeat(20)}Z`} fill="currentColor" />
                    </svg>
                    <SceneArt motif={processMotifs[index]} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="px-3 pt-5 pb-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      <Wave className="text-brand" flip />
    </section>
  );
}
