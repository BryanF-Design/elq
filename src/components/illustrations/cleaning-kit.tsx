/**
 * Shared SVG building blocks for the cleaning illustrations. Each piece is a
 * plain `<g>` so it can be composed inside any `<svg>`; gradients are taken
 * as props so every parent keeps its own `useId()`-scoped `<defs>`.
 */

type SprayBottleProps = {
  /** Horizontal center of the bottle body. */
  x: number;
  /** Top of the bottle body (shoulder line). */
  y: number;
  width?: number;
  height?: number;
  bodyFill: string;
  liquidFill?: string;
  labelColor?: string;
  headColor?: string;
  flip?: boolean;
};

export function SprayBottle({
  x,
  y,
  width = 70,
  height = 150,
  bodyFill,
  liquidFill,
  labelColor = "#eb337e",
  headColor = "#ffffff",
  flip = false,
}: SprayBottleProps) {
  const half = width / 2;
  return (
    <g transform={flip ? `translate(${x * 2} 0) scale(-1 1)` : undefined}>
      {/* trigger head */}
      <path
        d={`M${x - 22} ${y - 18} L${x - 22} ${y - 46} Q${x - 22} ${y - 60} ${x - 6} ${y - 60} L${x + 40} ${y - 60} Q${x + 50} ${y - 60} ${x + 50} ${y - 50} L${x + 50} ${y - 43} L${x + 14} ${y - 38} L${x + 14} ${y - 18} Z`}
        fill={headColor}
      />
      <rect x={x + 44} y={y - 57} width="12" height="11" rx="3" fill="#fbd3e4" />
      <path
        d={`M${x + 14} ${y - 36} Q${x + 32} ${y - 28} ${x + 27} ${y - 10} L${x + 20} ${y - 10} Q${x + 21} ${y - 25} ${x + 10} ${y - 30} Z`}
        fill={headColor}
        opacity="0.9"
      />
      <rect x={x - 15} y={y - 22} width="30" height="24" rx="5" fill={headColor} />
      <rect x={x - 15} y={y - 6} width="30" height="5" fill="#000000" opacity="0.08" />
      {/* body */}
      <path
        d={`M${x - half + 6} ${y + 14} Q${x - half} ${y + 18} ${x - half} ${y + 32} L${x - half} ${y + height - 14} Q${x - half} ${y + height} ${x - half + 14} ${y + height} L${x + half - 14} ${y + height} Q${x + half} ${y + height} ${x + half} ${y + height - 14} L${x + half} ${y + 32} Q${x + half} ${y + 18} ${x + half - 6} ${y + 14} L${x + 14} ${y} L${x - 14} ${y} Z`}
        fill={bodyFill}
      />
      {liquidFill ? (
        <rect
          x={x - half + 4}
          y={y + height * 0.42}
          width={width - 8}
          height={height * 0.55}
          rx="10"
          fill={liquidFill}
          opacity="0.55"
        />
      ) : null}
      {/* label */}
      <rect x={x - half + 9} y={y + height * 0.38} width={width - 18} height={height * 0.34} rx="8" fill="#ffffff" opacity="0.92" />
      <rect x={x - half + 16} y={y + height * 0.45} width={width - 32} height="7" rx="3.5" fill={labelColor} />
      <rect x={x - half + 16} y={y + height * 0.45 + 13} width={(width - 32) * 0.65} height="5" rx="2.5" fill={labelColor} opacity="0.35" />
      <circle cx={x + half - 22} cy={y + height * 0.62} r="5" fill={labelColor} opacity="0.7" />
      {/* gloss */}
      <rect x={x - half + 7} y={y + 26} width="7" height={height - 50} rx="3.5" fill="#ffffff" opacity="0.45" />
    </g>
  );
}

/** A glossy soap bubble. `fill` should be a radial gradient url. */
export function Bubble({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#ffffff" strokeOpacity="0.85" strokeWidth={Math.max(1, r * 0.05)} />
      <path
        d={`M${cx - r * 0.55} ${cy - r * 0.2} A${r * 0.6} ${r * 0.6} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.6}`}
        stroke="#ffffff"
        strokeWidth={Math.max(1.2, r * 0.12)}
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <circle cx={cx + r * 0.35} cy={cy + r * 0.35} r={r * 0.08} fill="#ffffff" opacity="0.8" />
    </g>
  );
}

/** Four-point sparkle centered on (cx, cy). */
export function Glint({ cx, cy, size, fill = "#ffffff", opacity = 1 }: { cx: number; cy: number; size: number; fill?: string; opacity?: number }) {
  const s = size;
  return (
    <path
      d={`M${cx} ${cy - s} C${cx + s * 0.12} ${cy - s * 0.12} ${cx + s * 0.12} ${cy - s * 0.12} ${cx + s} ${cy} C${cx + s * 0.12} ${cy + s * 0.12} ${cx + s * 0.12} ${cy + s * 0.12} ${cx} ${cy + s} C${cx - s * 0.12} ${cy + s * 0.12} ${cx - s * 0.12} ${cy + s * 0.12} ${cx - s} ${cy} C${cx - s * 0.12} ${cy - s * 0.12} ${cx - s * 0.12} ${cy - s * 0.12} ${cx} ${cy - s} Z`}
      fill={fill}
      opacity={opacity}
    />
  );
}

/** A leafy potted plant whose pot base sits at (x, y). */
export function Plant({ x, y, scale = 1, pot = "#ffffff" }: { x: number; y: number; scale?: number; pot?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-4 -40 C-30 -70 -40 -95 -30 -110 C-12 -95 -6 -70 -4 -40Z" fill="#3fae7d" />
      <path d="M2 -40 C10 -80 30 -100 46 -104 C42 -80 24 -58 2 -40Z" fill="#5cc795" />
      <path d="M0 -40 C-4 -75 0 -105 10 -125 C20 -100 14 -70 0 -40Z" fill="#47b985" />
      <path d="M-2 -38 C-28 -50 -48 -48 -58 -40 C-40 -30 -22 -30 -2 -38Z" fill="#5cc795" />
      <path d="M2 -38 C24 -52 44 -54 56 -48 C42 -34 22 -32 2 -38Z" fill="#3fae7d" />
      <path d="M-24 -42 H24 L18 0 H-18 Z" fill={pot} />
      <rect x="-26" y="-46" width="52" height="8" rx="4" fill={pot} />
      <rect x="-26" y="-46" width="52" height="8" rx="4" fill="#000000" opacity="0.06" />
    </g>
  );
}
