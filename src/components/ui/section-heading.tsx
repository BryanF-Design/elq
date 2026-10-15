import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  tone = "light",
  className,
  headingClassName,
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Reveal>
          <Eyebrow tone={tone} className="mb-5">
            {eyebrow}
          </Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-heading text-balance text-3xl font-normal leading-[1.15] sm:text-4xl lg:text-[2.85rem]",
            "text-foreground",
            headingClassName,
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {subheading ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
              onDark ? "text-muted-strong" : "text-muted",
            )}
          >
            {subheading}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
