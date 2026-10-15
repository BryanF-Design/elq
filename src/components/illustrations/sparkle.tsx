import { cn } from "@/lib/utils";

/** Four-point sparkle glyph, inherits `currentColor`. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} aria-hidden="true" fill="currentColor">
      <path d="M12 0c.6 5.9 2.9 9.6 12 12-9.1 2.4-11.4 6.1-12 12-.6-5.9-2.9-9.6-12-12C9.1 9.6 11.4 5.9 12 0Z" />
    </svg>
  );
}
