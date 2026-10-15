import { cn } from "@/lib/utils";

// A smooth sine edge: 18 crests of 80px each across the 1440px viewBox.
const WAVE_PATH = `M0 32${"q20-26 40 0t40 0".repeat(18)}V64H0Z`;

/**
 * Scalloped wave edge used to transition into and out of the blue bands.
 * Paint it with `text-*` — it fills with `currentColor`.
 */
export function Wave({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-8 w-full sm:h-12", flip ? "-mt-px rotate-180" : "-mb-px", className)}
      fill="currentColor"
    >
      <path d={WAVE_PATH} />
    </svg>
  );
}
