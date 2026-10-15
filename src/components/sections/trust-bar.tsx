"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { trustIcons } from "@/data/trust";
import { StaggerGroup, staggerItemVariants } from "@/components/ui/reveal";

export function TrustBar() {
  const t = useTranslations("trust");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="relative z-10 -mt-16 sm:-mt-20" aria-label={items.map((i) => i.title).join(", ")}>
      <div className="container-elq">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                className="glass group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1 rounded-3xl p-5 sm:flex sm:flex-col sm:gap-3 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 sm:p-7"
              >
                <span className="row-span-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-on-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
