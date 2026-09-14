import { useId } from "react";

/**
 * Shared light-and-material composition rendered in two moods so the
 * before/after slider reads as a believable transformation — dull, low
 * contrast "before" versus bright, glowing "after" — without claiming to
 * be a real photograph of ELQ's work.
 */
export function BeforeAfterArt({
  state,
  className,
}: {
  state: "before" | "after";
  className?: string;
}) {
  const id = useId();
  const isAfter = state === "after";

  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isAfter ? "#1d1614" : "#141212"} />
          <stop offset="100%" stopColor={isAfter ? "#0a0908" : "#0a0a0a"} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isAfter ? "#E8C9C3" : "#8a7a76"} stopOpacity={isAfter ? 0.85 : 0.25} />
          <stop offset="100%" stopColor={isAfter ? "#D7AAA4" : "#5a5252"} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-sweep`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E7E4" stopOpacity="0" />
          <stop offset="50%" stopColor="#F5E7E4" stopOpacity={isAfter ? 0.32 : 0.06} />
          <stop offset="100%" stopColor="#F5E7E4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vignette`} cx="50%" cy="42%" r="80%">
          <stop offset="45%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity={isAfter ? 0.5 : 0.72} />
        </radialGradient>
        <filter id={`${id}-blur`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
      </defs>

      <rect width="800" height="600" fill={`url(#${id}-bg)`} />

      <circle cx={isAfter ? 620 : 560} cy="120" r={isAfter ? 260 : 200} fill={`url(#${id}-glow)`} filter={`url(#${id}-blur)`} />
      <circle cx="140" cy="440" r={isAfter ? 190 : 150} fill={`url(#${id}-glow)`} opacity={isAfter ? 0.5 : 0.3} filter={`url(#${id}-blur)`} />

      <rect
        x="-100"
        y="230"
        width="1000"
        height="120"
        fill={`url(#${id}-sweep)`}
        transform={`rotate(${isAfter ? -10 : -4} 400 300)`}
      />

      {/* Counter line, crisp and bright after, soft and muted before */}
      <line x1="0" y1="365" x2="800" y2="365" stroke={isAfter ? "#D7AAA4" : "#3a3232"} strokeOpacity={isAfter ? 0.55 : 0.35} strokeWidth={isAfter ? 1.5 : 1} />

      {isAfter && (
        <g fill="#F5E7E4">
          <path
            d="M120 210c.9 6.3 2.1 9.2 5.3 12.8 3.6 3.1 6.5 4.3 12.8 5.3-6.3.9-9.2 2.1-12.8 5.3-3.1 3.6-4.3 6.5-5.3 12.8-.9-6.3-2.1-9.2-5.3-12.8-3.6-3.1-6.5-4.3-12.8-5.3 6.3-.9 9.2-2.1 12.8-5.3 3.1-3.6 4.3-6.5 5.3-12.8Z"
            opacity="0.85"
          />
          <path
            d="M660 380c.6 4.4 1.5 6.4 3.7 8.9 2.5 2.2 4.5 3 8.9 3.7-4.4.6-6.4 1.5-8.9 3.7-2.2 2.5-3 4.5-3.7 8.9-.6-4.4-1.5-6.4-3.7-8.9-2.5-2.2-4.5-3-8.9-3.7 4.4-.6 6.4-1.5 8.9-3.7 2.2-2.5 3-4.5 3.7-8.9Z"
            opacity="0.65"
          />
        </g>
      )}

      <rect width="800" height="600" fill={`url(#${id}-grain)`} opacity={isAfter ? 0.45 : 0.6} />
      <rect width="800" height="600" fill={`url(#${id}-vignette)`} />
      <rect x="0.5" y="0.5" width="799" height="599" fill="none" stroke="#D7AAA4" strokeOpacity="0.15" />
    </svg>
  );
}
