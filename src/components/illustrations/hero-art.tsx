import { useId } from "react";
import { Bubble, Glint, SprayBottle } from "@/components/illustrations/cleaning-kit";

/**
 * Hero centerpiece: a glossy blue bucket packed with cleaning supplies,
 * a splash of water and floating soap bubbles. Hand-built SVG standing in
 * for product photography (see README → "About the imagery").
 */
export function HeroArt({ className, label }: { className?: string; label: string }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, "");
  const u = (name: string) => `url(#${id}-${name})`;

  return (
    <svg viewBox="0 0 600 600" className={className} role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}-bucket`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c52665" />
          <stop offset="0.28" stopColor="#ee509a" />
          <stop offset="0.42" stopColor="#f277b2" />
          <stop offset="0.6" stopColor="#ec3d87" />
          <stop offset="1" stopColor="#a91e54" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ef5ca2" />
          <stop offset="0.45" stopColor="#f7b1d2" />
          <stop offset="1" stopColor="#e44b8e" />
        </linearGradient>
        <linearGradient id={`${id}-yellow`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe27a" />
          <stop offset="0.5" stopColor="#ffd23f" />
          <stop offset="1" stopColor="#f2b705" />
        </linearGradient>
        <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7fe3f0" />
          <stop offset="0.55" stopColor="#2fc0db" />
          <stop offset="1" stopColor="#1497bd" />
        </linearGradient>
        <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9b8ff" />
          <stop offset="1" stopColor="#9a7cf2" />
        </linearGradient>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f9c5e3" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ee50a1" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id={`${id}-bubble`} cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#fcdfed" stopOpacity="0.25" />
          <stop offset="0.85" stopColor="#f9bedb" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f5c6ff" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id={`${id}-shadow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#3a1120" stopOpacity="0.35" />
          <stop offset="1" stopColor="#3a1120" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-pom`} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#f596cb" />
          <stop offset="1" stopColor="#eb337e" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="305" cy="540" rx="210" ry="26" fill={u("shadow")} />

      {/* handle (behind contents) */}
      <path d="M150 312 C150 92 452 92 452 312" fill="none" stroke="#e0bdcc" strokeWidth="9" strokeLinecap="round" />
      <path d="M150 312 C150 92 452 92 452 312" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

      {/* rim back + opening */}
      <ellipse cx="300" cy="305" rx="162" ry="32" fill={u("rim")} />
      <ellipse cx="300" cy="305" rx="148" ry="24" fill="#911848" />

      {/* blue pompom duster */}
      <g>
        <path d="M232 330 L168 150" stroke="#ffd23f" strokeWidth="12" strokeLinecap="round" />
        <path d="M232 330 L168 150" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <g transform="translate(160 128)">
          {Array.from({ length: 28 }, (_, i) => {
            const a = (i / 28) * Math.PI * 2;
            const r = 52 + (i % 3) * 6;
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={Math.round(Math.cos(a) * r)}
                y2={Math.round(Math.sin(a) * r)}
                stroke={i % 2 ? "#ed4c99" : "#f069ad"}
                strokeWidth="9"
                strokeLinecap="round"
              />
            );
          })}
          <circle r="40" fill={u("pom")} />
          <circle cx="-12" cy="-14" r="12" fill="#ffffff" opacity="0.35" />
        </g>
      </g>

      {/* yellow scrub brush */}
      <g transform="rotate(24 410 230)">
        <rect x="396" y="150" width="26" height="190" rx="13" fill={u("yellow")} />
        <rect x="402" y="160" width="6" height="160" rx="3" fill="#ffffff" opacity="0.5" />
        <rect x="378" y="70" width="62" height="92" rx="14" fill={u("yellow")} />
        <g stroke="#41222d" strokeWidth="5" strokeLinecap="round" opacity="0.85">
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1={386 + i * 9.5} y1="70" x2={386 + i * 9.5} y2="40" />
          ))}
        </g>
      </g>

      {/* teal spray bottle */}
      <SprayBottle x={330} y={170} width={76} height={170} bodyFill={u("teal")} liquidFill="#0f8fb3" labelColor="#eb337e" />

      {/* yellow spray bottle */}
      <SprayBottle x={248} y={205} width={66} height={140} bodyFill={u("yellow")} labelColor="#f08a00" headColor="#ffffff" flip />

      {/* white microfiber roll */}
      <g transform="rotate(-14 385 270)">
        <rect x="360" y="215" width="58" height="110" rx="16" fill="#fef5f9" />
        <g stroke="#f8d9e7" strokeWidth="4">
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1="364" y1={232 + i * 16} x2="414" y2={226 + i * 16} />
          ))}
        </g>
      </g>

      {/* bucket body (front) */}
      <path d="M138 305 A162 32 0 0 0 462 305 L426 512 Q300 548 174 512 Z" fill={u("bucket")} />
      <path d="M164 360 Q300 392 436 360" stroke="#981c4c" strokeWidth="5" fill="none" opacity="0.35" />
      <path d="M176 470 Q300 500 424 470" stroke="#981c4c" strokeWidth="5" fill="none" opacity="0.35" />
      <path d="M196 340 L214 500" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity="0.22" />
      <path d="M138 305 A162 32 0 0 0 462 305" stroke="#f599c7" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M150 314 A150 28 0 0 0 450 314" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.6" />
      {/* handle lugs */}
      <circle cx="150" cy="316" r="10" fill="#f4d7e5" />
      <circle cx="452" cy="316" r="10" fill="#f4d7e5" />

      {/* sponge on the rim */}
      <g transform="rotate(-10 196 318)">
        <rect x="150" y="300" width="96" height="44" rx="10" fill="#ffd23f" />
        <rect x="150" y="300" width="96" height="15" rx="7" fill="#4ccf8f" />
        {[166, 186, 206, 226].map((cx) => (
          <circle key={cx} cx={cx} cy="330" r="3.5" fill="#e0a800" />
        ))}
      </g>

      {/* pink cloth draped over the rim */}
      <path d="M392 296 Q430 286 456 300 L470 380 Q448 392 430 380 Q414 372 404 384 Z" fill={u("pink")} />
      <path d="M408 300 L420 372" stroke="#ffffff" strokeWidth="3" opacity="0.4" />

      {/* water splash */}
      <g>
        <path
          d="M140 470 C100 455 70 420 84 380 C92 410 112 425 130 428 C112 400 110 360 132 330 C134 370 148 400 166 420 C160 450 152 462 140 470 Z"
          fill={u("water")}
        />
        <path d="M100 392 C108 410 118 420 128 424" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
        <circle cx="72" cy="356" r="9" fill={u("water")} />
        <circle cx="104" cy="318" r="6" fill={u("water")} />
        <circle cx="60" cy="410" r="5" fill={u("water")} />
        <path d="M58 300 q6 12 0 18 q-6 -6 0 -18Z" fill="#f388c1" />
      </g>

      {/* folded cloth at the base */}
      <g transform="rotate(-4 470 520)">
        <rect x="408" y="498" width="128" height="40" rx="10" fill={u("pink")} />
        <rect x="408" y="498" width="128" height="12" rx="6" fill="#ffffff" opacity="0.35" />
      </g>

      {/* bubbles */}
      <Bubble cx={470} cy={120} r={34} fill={u("bubble")} />
      <Bubble cx={530} cy={210} r={16} fill={u("bubble")} />
      <Bubble cx={92} cy={210} r={22} fill={u("bubble")} />
      <Bubble cx={300} cy={60} r={14} fill={u("bubble")} />
      <Bubble cx={520} cy={420} r={24} fill={u("bubble")} />
      <Bubble cx={52} cy={470} r={12} fill={u("bubble")} />

      <Glint cx={552} cy={300} size={14} fill="#ffd23f" />
      <Glint cx={120} cy={120} size={10} fill="#eb337e" opacity={0.7} />
      <Glint cx={360} cy={110} size={9} fill="#ffffff" />
    </svg>
  );
}
