import { useId } from "react";
import type { GalleryTile } from "@/data/gallery";

type GalleryMotifProps = {
  motif: GalleryTile["motif"];
  className?: string;
};

type Mood = {
  from: string;
  to: string;
  glowA: string;
  glowB: string;
  glowAPos: { cx: number; cy: number; r: number };
  glowBPos: { cx: number; cy: number; r: number };
  sweepAngle: number;
  sparkle?: boolean;
};

const MOODS: Record<GalleryTile["motif"], Mood> = {
  kitchen: {
    from: "#1d1613",
    to: "#0a0808",
    glowA: "#E8C9C3",
    glowB: "#C99790",
    glowAPos: { cx: 320, cy: 90, r: 220 },
    glowBPos: { cx: 60, cy: 420, r: 160 },
    sweepAngle: -18,
  },
  bathroom: {
    from: "#171a1c",
    to: "#08090a",
    glowA: "#F5E7E4",
    glowB: "#D7AAA4",
    glowAPos: { cx: 200, cy: 60, r: 210 },
    glowBPos: { cx: 340, cy: 460, r: 150 },
    sweepAngle: 10,
  },
  bedroom: {
    from: "#191415",
    to: "#0a0808",
    glowA: "#D7AAA4",
    glowB: "#E8C9C3",
    glowAPos: { cx: 90, cy: 480, r: 230 },
    glowBPos: { cx: 330, cy: 60, r: 140 },
    sweepAngle: -8,
  },
  living: {
    from: "#1c1512",
    to: "#0a0808",
    glowA: "#E8C9C3",
    glowB: "#C99790",
    glowAPos: { cx: 260, cy: 460, r: 240 },
    glowBPos: { cx: 60, cy: 60, r: 130 },
    sweepAngle: 14,
  },
  detail: {
    from: "#141212",
    to: "#070707",
    glowA: "#F5E7E4",
    glowB: "#D7AAA4",
    glowAPos: { cx: 200, cy: 250, r: 150 },
    glowBPos: { cx: 200, cy: 250, r: 60 },
    sweepAngle: 0,
    sparkle: true,
  },
  closet: {
    from: "#181315",
    to: "#09080a",
    glowA: "#D7AAA4",
    glowB: "#F5E7E4",
    glowAPos: { cx: 340, cy: 500, r: 200 },
    glowBPos: { cx: 80, cy: 40, r: 150 },
    sweepAngle: -22,
  },
};

/**
 * Editorial "light and material" compositions standing in for real project
 * photography — each motif carries its own color temperature and glow
 * placement rather than a literal (and easily-dated) line drawing.
 */
export function GalleryMotif({ motif, className }: GalleryMotifProps) {
  const id = useId();
  const mood = MOODS[motif];

  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mood.from} />
          <stop offset="100%" stopColor={mood.to} />
        </linearGradient>
        <radialGradient id={`${id}-glowA`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mood.glowA} stopOpacity="0.85" />
          <stop offset="100%" stopColor={mood.glowA} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-glowB`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mood.glowB} stopOpacity="0.7" />
          <stop offset="100%" stopColor={mood.glowB} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-sweep`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E7E4" stopOpacity="0" />
          <stop offset="50%" stopColor="#F5E7E4" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#F5E7E4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-vignette`} cx="50%" cy="45%" r="75%">
          <stop offset="45%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="55" />
        </filter>
        <filter id={`${id}-blur-sm`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
      </defs>

      <rect width="400" height="500" fill={`url(#${id}-bg)`} />

      <circle {...mood.glowAPos} fill={`url(#${id}-glowA)`} filter={`url(#${id}-blur)`} />
      <circle {...mood.glowBPos} fill={`url(#${id}-glowB)`} opacity="0.6" filter={`url(#${id}-blur)`} />

      {!mood.sparkle && (
        <rect
          x="-100"
          y="200"
          width="600"
          height="90"
          fill={`url(#${id}-sweep)`}
          transform={`rotate(${mood.sweepAngle} 200 250)`}
        />
      )}

      {mood.sparkle && (
        <g filter={`url(#${id}-blur-sm)`}>
          <circle cx="200" cy="250" r="70" fill={`url(#${id}-glowA)`} opacity="0.5" />
        </g>
      )}
      {mood.sparkle && (
        <path
          d="M200 190c2.5 17 6 24.5 14 32.5S232.5 233.5 250 236c-17 2.5-24.5 6-32.5 14S203.5 268.5 201 286c-2.5-17-6-24.5-14-32.5S164.5 238.5 148 236c17-2.5 24.5-6 32.5-14S198.5 207 200 190Z"
          fill="#F5E7E4"
        />
      )}

      <rect width="400" height="500" fill={`url(#${id}-grain)`} opacity="0.5" />
      <rect width="400" height="500" fill={`url(#${id}-vignette)`} />
    </svg>
  );
}
