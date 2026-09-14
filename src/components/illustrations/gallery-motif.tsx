import { useId } from "react";
import type { GalleryTile } from "@/data/gallery";

type GalleryMotifProps = {
  motif: GalleryTile["motif"];
  className?: string;
};

/**
 * Editorial, line-art vector compositions standing in for real project
 * photography — each motif hints at a different room without depicting any
 * literal (and easily-dated) stock scene.
 */
export function GalleryMotif({ motif, className }: GalleryMotifProps) {
  const id = useId();

  const bgFrom = "#151212";
  const bgTo = "#0a0909";

  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
        <linearGradient id={`${id}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E7E4" />
          <stop offset="100%" stopColor="#D7AAA4" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${id}-bg)`} />

      {motif === "kitchen" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <rect x="40" y="260" width="320" height="16" />
          <line x1="40" y1="276" x2="40" y2="420" />
          <line x1="360" y1="276" x2="360" y2="420" />
          <rect x="90" y="180" width="70" height="70" rx="4" />
          <circle cx="125" cy="215" r="18" />
          <path d="M260 260 V220 C260 205 275 205 275 220 V240" />
        </g>
      )}

      {motif === "bathroom" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <rect x="120" y="90" width="160" height="120" rx="6" />
          <rect x="132" y="102" width="136" height="96" rx="3" opacity="0.5" />
          <rect x="90" y="330" width="70" height="46" rx="4" />
          <rect x="106" y="322" width="38" height="10" rx="2" />
          <path d="M240 340 h70 M240 356 h70 M240 372 h50" strokeLinecap="round" />
        </g>
      )}

      {motif === "bedroom" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <rect x="60" y="260" width="280" height="120" rx="8" />
          <path d="M60 300 h280" />
          <path d="M90 260 v-40 a20 20 0 0 1 40 0 v40" />
          <path d="M270 260 v-40 a20 20 0 0 1 40 0 v40" />
          <line x1="60" y1="380" x2="60" y2="420" />
          <line x1="340" y1="380" x2="340" y2="420" />
        </g>
      )}

      {motif === "living" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <path d="M70 340 v-40 a24 24 0 0 1 24-24 h172 a24 24 0 0 1 24 24 v40" />
          <rect x="60" y="340" width="280" height="18" rx="4" />
          <line x1="80" y1="358" x2="80" y2="390" />
          <line x1="320" y1="358" x2="320" y2="390" />
          <rect x="150" y="120" width="100" height="130" rx="2" opacity="0.6" />
          <line x1="200" y1="120" x2="200" y2="250" opacity="0.6" />
        </g>
      )}

      {motif === "detail" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <circle cx="200" cy="250" r="70" />
          <circle cx="200" cy="250" r="34" opacity="0.6" />
          <path
            d="M200 190c2.5 17 6 24.5 14 32.5S232.5 233.5 250 236c-17 2.5-24.5 6-32.5 14S203.5 268.5 201 286c-2.5-17-6-24.5-14-32.5S164.5 238.5 148 236c17-2.5 24.5-6 32.5-14S198.5 207 200 190Z"
            fill={`url(#${id}-line)`}
            stroke="none"
          />
        </g>
      )}

      {motif === "closet" && (
        <g fill="none" stroke={`url(#${id}-line)`} strokeWidth="1.5">
          <line x1="60" y1="130" x2="340" y2="130" />
          <path d="M150 130 v18 l20 22 20-22 v-18" />
          <rect x="80" y="260" width="110" height="16" rx="3" />
          <rect x="92" y="244" width="86" height="16" rx="3" />
          <rect x="104" y="228" width="62" height="16" rx="3" />
          <rect x="230" y="230" width="90" height="110" rx="4" opacity="0.5" />
        </g>
      )}
    </svg>
  );
}
