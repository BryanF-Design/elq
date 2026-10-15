"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Phone, BadgeCheck } from "lucide-react";
import { HeroArt } from "@/components/illustrations/hero-art";
import { Sparkle } from "@/components/illustrations/sparkle";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Stat = { value: string; label: string };

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const reduceMotion = usePrefersReducedMotion();
  const stats = t.raw("stats") as Stat[];
  // Chinese doesn't separate words with spaces.
  const gap = locale === "zh" ? "" : " ";

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: reduceMotion ? 0 : delay, ease: EASE },
    }),
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-28 sm:pt-32 lg:pt-36 lg:pb-36">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fde6f1] via-[#fdf0f6] to-background" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_30%,black,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-white blur-[90px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-sky/70 blur-[110px]" aria-hidden="true" />
      <span className="animate-float-slow pointer-events-none absolute left-[46%] top-32 hidden h-14 w-14 rounded-full border border-white bg-white/40 shadow-[inset_-6px_-8px_16px_rgba(235,51,126,0.15)] backdrop-blur lg:block" aria-hidden="true" />
      <span className="animate-float pointer-events-none absolute left-[8%] top-[18%] hidden text-brand/40 sm:block" aria-hidden="true">
        <Sparkle className="h-6 w-6" />
      </span>

      <div className="container-elq relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        <div className="relative z-10">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 py-1.5 pl-1.5 pr-4 text-xs font-semibold text-brand shadow-soft ring-1 ring-brand/10 backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
              <Sparkle className="h-3 w-3" />
            </span>
            {t("badge")}
          </motion.span>

          <motion.h1
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 font-heading text-balance text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl xl:text-[4.4rem]"
          >
            {t("titleLine1")}
            {gap}
            <span className="relative inline-block">
              <span className="text-gradient-brand">{t("titleHighlight")}</span>
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-sun"
                aria-hidden="true"
              >
                <path d="M2 9 Q50 2 100 6 T198 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            {gap}
            {t("titleLine2")}
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            custom={0.32}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-5"
          >
            <a
              href="#contact"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-brand py-2 pl-7 pr-2 text-base font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              {t("ctaEstimate")}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-rotate-45">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>

            <a href={site.phoneHref} className="group inline-flex items-center gap-3">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sun text-navy shadow-[0_12px_30px_-10px_rgba(245,194,0,0.8)] transition-transform duration-300 group-hover:scale-105">
                {!reduceMotion ? (
                  <span className="absolute inset-0 animate-ping rounded-full bg-sun/50 [animation-duration:2.4s]" aria-hidden="true" />
                ) : null}
                <Phone className="relative h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-medium text-muted">{t("ctaCall")}</span>
                <span className="block font-heading text-lg font-bold text-foreground group-hover:text-brand">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>
          </motion.div>

          <motion.div
            custom={0.44}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass relative min-w-36 overflow-hidden rounded-2xl px-5 py-4">
                <span
                  className="pointer-events-none absolute -right-1 -top-4 font-heading text-7xl font-black text-brand/[0.07]"
                  aria-hidden="true"
                >
                  {stat.value}
                </span>
                <span className="relative block font-heading text-3xl font-extrabold text-brand">
                  {stat.value}
                </span>
                <span className="relative mt-0.5 block text-sm font-semibold text-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
        >
          <div
            className="absolute inset-x-[4%] bottom-[2%] top-[38%] rounded-[3rem] rounded-tl-[9rem] bg-gradient-to-br from-[#fbdbea] via-[#f8bbd7] to-[#f38bba] shadow-[0_40px_80px_-30px_rgba(235,51,126,0.55)] ring-1 ring-white/70"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.7),transparent_50%)]" />
            <svg viewBox="0 0 200 200" className="absolute -right-6 -top-10 h-28 w-28 text-white/70" aria-hidden="true">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 10" />
            </svg>
          </div>
          <div className={reduceMotion ? "relative" : "animate-float-slow relative"}>
            <HeroArt className="relative h-auto w-full drop-shadow-[0_30px_40px_rgba(58,17,32,0.18)]" label={t("imageAlt")} />
          </div>

          <div className="glass animate-float absolute -top-2 left-0 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-medium uppercase tracking-wider text-muted">
                {t("floatingScheduleLabel")}
              </span>
              <span className="block text-sm font-bold text-foreground">{t("floatingSchedule")}</span>
            </span>
          </div>

          <div className="glass animate-float-slow absolute bottom-[6%] right-0 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-2 lg:bottom-[10%]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun text-navy">
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-foreground">{t("floatingEstimate")}</span>
              <span className="block text-xs text-muted">{t("floatingEstimateLabel")}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
