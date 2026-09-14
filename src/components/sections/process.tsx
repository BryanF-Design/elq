"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { processIcons } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { number: string; title: string; description: string }[];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container-elq">
        <SectionHeading align="center" eyebrow={t("eyebrow")} heading={t("heading")} subheading={t("subheading")} className="mx-auto" />

        <div ref={containerRef} className="relative mt-20">
          {/* Desktop horizontal timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-6 h-px origin-left bg-rose"
              style={{ scaleX: lineScale, right: 0 }}
              aria-hidden="true"
            />
            <ol className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <Reveal as="li" key={step.number} delay={index * 0.1} className="relative pt-0">
                    <span className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-rose bg-background text-rose">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-heading pointer-events-none absolute -top-6 right-0 text-7xl text-transparent [-webkit-text-stroke:1px_var(--border-strong)]" aria-hidden="true">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet vertical timeline */}
          <ol className="relative flex flex-col gap-10 lg:hidden">
            <div className="absolute bottom-2 left-6 top-2 w-px bg-border" aria-hidden="true" />
            {steps.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <Reveal as="li" key={step.number} delay={index * 0.08} className="relative flex gap-5 pl-0">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rose bg-background text-rose">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="pt-1">
                    <span className="font-heading text-sm text-rose">{step.number}</span>
                    <h3 className="font-heading mt-1 text-xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
