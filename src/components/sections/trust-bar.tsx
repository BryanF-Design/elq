"use client";

import { useTranslations } from "next-intl";
import { trustIcons } from "@/data/trust";
import { StaggerGroup, staggerItemVariants } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function TrustBar() {
  const t = useTranslations("trust");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="border-y border-border bg-background-secondary/60">
      <div className="container-elq">
        <StaggerGroup className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                className="flex flex-col gap-3 px-1 py-8 sm:px-8"
              >
                <Icon className="h-6 w-6 text-rose" aria-hidden="true" />
                <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
