import { useId } from "react";

/**
 * Shared kitchen-counter composition rendered in two states so the
 * before/after slider can show a believable transformation without
 * claiming to be a real photograph of ELQ's work.
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
          <stop offset="0%" stopColor={isAfter ? "#171313" : "#121111"} />
          <stop offset="100%" stopColor={isAfter ? "#0c0a0a" : "#0a0a0a"} />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E7E4" />
          <stop offset="100%" stopColor="#D7AAA4" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill={`url(#${id}-bg)`} />

      {/* Wall / backsplash */}
      <rect x="0" y="0" width="800" height="340" fill="#141010" opacity={isAfter ? 0.5 : 0.9} />
      {/* Counter */}
      <rect x="0" y="340" width="800" height="40" fill="#1b1717" />
      <rect x="0" y="340" width="800" height="3" fill={isAfter ? "#D7AAA4" : "#3a3232"} opacity={isAfter ? 0.6 : 0.4} />
      {/* Cabinet base */}
      <rect x="0" y="380" width="800" height="220" fill="#100d0d" />
      <line x1="266" y1="380" x2="266" y2="600" stroke="#2a2323" strokeWidth="2" />
      <line x1="533" y1="380" x2="533" y2="600" stroke="#2a2323" strokeWidth="2" />

      {isAfter ? (
        <g>
          {/* Neatly arranged, aligned items */}
          <rect x="90" y="288" width="60" height="52" rx="4" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="1.5" />
          <rect x="180" y="300" width="90" height="40" rx="4" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="1.5" />
          <circle cx="420" cy="315" r="26" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="1.5" />
          <rect x="560" y="292" width="48" height="48" rx="24" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="1.5" />
          <rect x="640" y="300" width="110" height="40" rx="4" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="1.5" />
          <line x1="0" y1="365" x2="800" y2="365" stroke="#D7AAA4" strokeOpacity="0.35" strokeWidth="1" />
        </g>
      ) : (
        <g stroke="#5a5252" strokeWidth="1.5" fill="none" opacity="0.85">
          {/* Scattered, cluttered items at varied angles */}
          <rect x="96" y="292" width="58" height="46" rx="3" transform="rotate(-6 125 315)" />
          <rect x="205" y="306" width="80" height="34" rx="3" transform="rotate(4 245 323)" />
          <circle cx="410" cy="318" r="24" transform="rotate(0 410 318)" />
          <rect x="540" y="300" width="52" height="42" rx="18" transform="rotate(-10 566 321)" />
          <rect x="650" y="298" width="100" height="44" rx="3" transform="rotate(3 700 320)" />
          <path d="M330 330 l18 12 M348 330 l-18 12" strokeWidth="2" opacity="0.7" />
        </g>
      )}

      <rect x="0.5" y="0.5" width="799" height="599" fill="none" stroke="#D7AAA4" strokeOpacity="0.15" />
    </svg>
  );
}
