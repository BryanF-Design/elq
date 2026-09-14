import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import type { ServiceLayout } from "@/data/services";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  layout: ServiceLayout;
  delay?: number;
};

export function ServiceCard({ icon: Icon, title, description, layout, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-border-strong",
        layout === "wide" && "sm:col-span-2",
        layout === "tall" && "lg:row-span-2",
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose/0 transition-colors duration-500 group-hover:bg-rose/10"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-rose transition-colors duration-300 group-hover:border-rose">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="font-heading mt-6 text-xl text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      </div>
    </Reveal>
  );
}
