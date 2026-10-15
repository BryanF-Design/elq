import type { ReactNode } from "react";
import { Sparkle } from "@/components/illustrations/sparkle";
import { cn } from "@/lib/utils";

/** Small pill label that sits above section headings. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "dark" ? "bg-brand-soft text-brand ring-1 ring-brand/25" : "bg-brand-soft/80 text-brand ring-1 ring-brand/20",
        className,
      )}
    >
      <Sparkle className="h-3 w-3" />
      {children}
    </span>
  );
}
