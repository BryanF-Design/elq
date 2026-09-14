import { useId } from "react";

/**
 * Atmospheric, editorial hero visual: layered light, soft focus, and film
 * grain in the ELQ black/rose-gold palette. Reads as a moody photograph of
 * light in a clean space rather than a literal drawn scene — standing in
 * for commissioned photography (documented in README).
 */
export function HeroArt({
  className,
  label = "Soft light filtering through a freshly cleaned home",
}: {
  className?: string;
  label?: string;
}) {
  const id = useId();

  return (
    <svg viewBox="0 0 640 760" className={className} role="img" aria-label={label}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="72%" cy="6%" r="95%">
          <stop offset="0%" stopColor="#221a19" />
          <stop offset="35%" stopColor="#150f0f" />
          <stop offset="100%" stopColor="#070707" />
        </radialGradient>
        <radialGradient id={`${id}-glow1`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8C9C3" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#D7AAA4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D7AAA4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-glow2`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C99790" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C99790" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-sweep`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E7E4" stopOpacity="0" />
          <stop offset="45%" stopColor="#F5E7E4" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#D7AAA4" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#D7AAA4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-floor`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c0a0a" stopOpacity="0" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={`${id}-vignette`} cx="50%" cy="45%" r="75%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </radialGradient>
        <filter id={`${id}-blur-lg`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
        <filter id={`${id}-blur-md`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="34" />
        </filter>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
      </defs>

      <rect width="640" height="760" fill={`url(#${id}-bg)`} />

      {/* Soft layered light — the visual anchor, standing in for a window/highlight */}
      <circle cx="460" cy="150" r="230" fill={`url(#${id}-glow1)`} filter={`url(#${id}-blur-lg)`} />
      <circle cx="150" cy="560" r="170" fill={`url(#${id}-glow2)`} opacity="0.55" filter={`url(#${id}-blur-lg)`} />
      <circle cx="500" cy="520" r="90" fill={`url(#${id}-glow1)`} opacity="0.4" filter={`url(#${id}-blur-md)`} />

      {/* Diagonal sheen, like light catching a polished surface */}
      <rect x="-80" y="260" width="820" height="140" fill={`url(#${id}-sweep)`} transform="rotate(-16 320 330)" />

      {/* Grounded floor plane for depth */}
      <rect x="0" y="600" width="640" height="160" fill={`url(#${id}-floor)`} />
      <line x1="0" y1="608" x2="640" y2="608" stroke="#D7AAA4" strokeOpacity="0.16" strokeWidth="1" />

      {/* Fine sparkle accents */}
      <g fill="#F5E7E4">
        <path
          d="M96 118c.9 6.3 2.1 9.2 5.3 12.8 3.6 3.1 6.5 4.3 12.8 5.3-6.3.9-9.2 2.1-12.8 5.3-3.1 3.6-4.3 6.5-5.3 12.8-.9-6.3-2.1-9.2-5.3-12.8-3.6-3.1-6.5-4.3-12.8-5.3 6.3-.9 9.2-2.1 12.8-5.3 3.1-3.6 4.3-6.5 5.3-12.8Z"
          opacity="0.9"
        />
        <path
          d="M508 300c.6 4.4 1.5 6.4 3.7 8.9 2.5 2.2 4.5 3 8.9 3.7-4.4.6-6.4 1.5-8.9 3.7-2.2 2.5-3 4.5-3.7 8.9-.6-4.4-1.5-6.4-3.7-8.9-2.5-2.2-4.5-3-8.9-3.7 4.4-.6 6.4-1.5 8.9-3.7 2.2-2.5 3-4.5 3.7-8.9Z"
          opacity="0.7"
        />
      </g>

      <rect width="640" height="760" fill={`url(#${id}-grain)`} opacity="0.5" />
      <rect width="640" height="760" fill={`url(#${id}-vignette)`} />
      <rect x="0.5" y="0.5" width="639" height="759" rx="23.5" stroke="#D7AAA4" strokeOpacity="0.18" fill="none" />
    </svg>
  );
}
