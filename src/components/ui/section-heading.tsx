import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            <span className="h-px w-8 bg-rose" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-heading text-balance text-3xl leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]",
            headingClassName,
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {subheading ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {subheading}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
