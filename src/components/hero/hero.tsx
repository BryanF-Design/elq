"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroArt } from "@/components/illustrations/hero-art";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = usePrefersReducedMotion();

  const textVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-24"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-rose/10 blur-[120px]" aria-hidden="true" />

      <div className="container-elq relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne"
          >
            {t("badge")}
          </motion.div>

          <h1 className="font-heading text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            <motion.span custom={0.08} initial="hidden" animate="visible" variants={textVariants} className="block">
              {t("titleLine1")}
            </motion.span>
            <motion.span
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-gradient-rose block"
            >
              {t("titleLine2")}
            </motion.span>
          </h1>

          <motion.p
            custom={0.36}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            custom={0.48}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button as="a" href="#contact" size="lg">
                {t("ctaEstimate")}
              </Button>
            </MagneticButton>
            <Button as="a" href={site.phoneHref} variant="outline" size="lg">
              {t("ctaCall")}
            </Button>
          </motion.div>

          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-10 flex items-center gap-3 text-sm text-muted"
          >
            <span className="h-px w-10 bg-border-strong" aria-hidden="true" />
            {t("frequencyBadge")}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border-strong">
            <HeroArt className="h-full w-full" label={t("imageAlt")} />
            <motion.div
              initial={{ scaleX: reduceMotion ? 0 : 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: reduceMotion ? 0 : 0.5, ease: EASE }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-0 bg-background"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
        aria-hidden="true"
      >
        <span className="flex flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
          {t("scrollHint")}
          <ChevronDown className={cn("h-4 w-4 text-rose", !reduceMotion && "animate-bounce")} />
        </span>
      </motion.div>
    </section>
  );
}
