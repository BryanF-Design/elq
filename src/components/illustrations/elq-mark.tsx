import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Temporary wordmark monogram derived only from the ELQ initials — no
 * invented logo direction. Swap for an official SVG/PNG mark when one
 * exists; every consumer only expects a fixed-size square icon.
 */
export function ElqMark({ className }: { className?: string }) {
  const id = useId();

  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} role="img" aria-label="ELQ Cleaning monogram">
      <defs>
        <linearGradient id={`${id}-g`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E7E4" />
          <stop offset="100%" stopColor="#C99790" />
        </linearGradient>
      </defs>
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="10" fill="none" stroke={`url(#${id}-g)`} strokeWidth="1.2" />
      <path
        d="M13 12.5h9.5M13 20h7.5M13 27.5h9.5"
        stroke={`url(#${id}-g)`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="27.5" cy="20" r="2.1" fill={`url(#${id}-g)`} />
    </svg>
  );
}
