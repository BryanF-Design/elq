import { cn } from "@/lib/utils";

// One 80×24 crest, tiled horizontally so the scallops keep the same shape on
// every screen width instead of stretching.
const CREST =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 24' preserveAspectRatio='none'><path d='M0 12 Q20 0 40 12 T80 12 V24 H0 Z' fill='black'/></svg>";

/**
 * Scalloped wave edge used to transition into and out of the bands.
 * Paint it with `text-*` — it fills with `currentColor`.
 */
export function Wave({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn("block h-5 w-full bg-current sm:h-6", flip ? "-mt-px rotate-180" : "-mb-px", className)}
      style={{
        maskImage: `url("${CREST}")`,
        WebkitMaskImage: `url("${CREST}")`,
        maskSize: "64px 100%",
        WebkitMaskSize: "64px 100%",
        maskRepeat: "repeat-x",
        WebkitMaskRepeat: "repeat-x",
      }}
    />
  );
}
