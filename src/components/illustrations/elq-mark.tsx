import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Temporary monogram: a sparkling house in a blue tile. Swap for an
 * official SVG/PNG mark when one exists; consumers only expect a square icon.
 */
export function ElqMark({ className }: { className?: string }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} role="img" aria-label="ELQ Cleaning">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ef5fa2" />
          <stop offset="1" stopColor="#c52665" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${id}-g)`} />
      <path d="M9.5 19.5 L20 11 L30.5 19.5" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12.5 18 V29 H27.5 V18" stroke="#ffffff" strokeWidth="2.6" strokeLinejoin="round" fill="none" />
      <path d="M20 19.5c.3 2.6 1.3 3.6 3.6 4-2.3.4-3.3 1.4-3.6 4-.3-2.6-1.3-3.6-3.6-4 2.3-.4 3.3-1.4 3.6-4Z" fill="#ffd23f" />
    </svg>
  );
}
