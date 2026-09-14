import { useId } from "react";

const SPARKLE_PATH =
  "M12 2c.6 4.2 1.4 6.1 3.5 8.5C17.9 12.6 19.8 13.4 24 14c-4.2.6-6.1 1.4-8.5 3.5C13.4 19.9 12.6 21.8 12 26c-.6-4.2-1.4-6.1-3.5-8.5C6.1 15.4 4.2 14.6 0 14c4.2-.6 6.1-1.4 8.5-3.5C10.6 8.1 11.4 6.2 12 2Z";

/**
 * Abstract, editorial hero visual built entirely from vector shapes and
 * gradients in the ELQ palette. Standing in for commissioned photography
 * (documented in README) — no stock or AI-generated imagery is used.
 */
export function HeroArt({
  className,
  label = "Abstract illustration of soft light in a freshly cleaned home",
}: {
  className?: string;
  label?: string;
}) {
  const id = useId();

  return (
    <svg viewBox="0 0 640 760" className={className} role="img" aria-label={label}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="70%" cy="8%" r="85%">
          <stop offset="0%" stopColor="#1c1616" />
          <stop offset="45%" stopColor="#121010" />
          <stop offset="100%" stopColor="#090909" />
        </radialGradient>
        <linearGradient id={`${id}-glow`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C9C3" />
          <stop offset="100%" stopColor="#D7AAA4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-ribbon`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E7E4" />
          <stop offset="55%" stopColor="#D7AAA4" />
          <stop offset="100%" stopColor="#C99790" />
        </linearGradient>
        <linearGradient id={`${id}-pane`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D7AAA4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D7AAA4" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>

      <rect width="640" height="760" fill={`url(#${id}-bg)`} />

      <circle cx="470" cy="120" r="220" fill={`url(#${id}-glow)`} opacity="0.35" filter={`url(#${id}-blur)`} />

      {/* Window / light aperture, upper right */}
      <g stroke="#D7AAA4" strokeOpacity="0.55" strokeWidth="1.25" fill="none">
        <rect x="380" y="70" width="200" height="260" rx="2" />
        <line x1="480" y1="70" x2="480" y2="330" />
        <line x1="380" y1="200" x2="580" y2="200" />
      </g>
      <rect x="380" y="70" width="200" height="130" fill={`url(#${id}-pane)`} />

      {/* Abstract folded-cloth ribbon, nodding to the brand's cleaning motif */}
      <path
        d="M90 640 C 160 560, 150 470, 230 430 C 310 390, 330 300, 300 210"
        stroke={`url(#${id}-ribbon)`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M120 660 C 190 585, 178 495, 258 452"
        stroke={`url(#${id}-ribbon)`}
        strokeWidth="4"
        strokeOpacity="0.45"
        strokeLinecap="round"
        fill="none"
      />

      {/* Editorial horizon line + floor plane */}
      <line x1="0" y1="640" x2="640" y2="640" stroke="#D7AAA4" strokeOpacity="0.18" strokeWidth="1" />
      <rect x="0" y="640" width="640" height="120" fill="#111111" />
      <rect x="0" y="640" width="640" height="2" fill="#D7AAA4" opacity="0.3" />

      {/* Grounded objects: a minimal vase + a folded linen stack, pure line art */}
      <g stroke="#F5E7E4" strokeOpacity="0.8" strokeWidth="1.5" fill="none">
        <path d="M470 640 L470 560 C470 540, 500 540, 500 560 L500 640" />
        <path d="M462 560 C480 545, 490 545, 508 560" />
      </g>
      <g fill="#171717" stroke="#D7AAA4" strokeOpacity="0.4" strokeWidth="1">
        <rect x="120" y="612" width="120" height="14" rx="3" />
        <rect x="132" y="598" width="96" height="14" rx="3" />
        <rect x="144" y="584" width="72" height="14" rx="3" />
      </g>

      <path d={SPARKLE_PATH} fill="#D7AAA4" transform="translate(60,90) scale(0.9)" />
      <path d={SPARKLE_PATH} fill="#E8C9C3" transform="translate(505,290) scale(0.65)" />

      <rect x="0.5" y="0.5" width="639" height="759" rx="23.5" stroke="#D7AAA4" strokeOpacity="0.18" fill="none" />
    </svg>
  );
}
