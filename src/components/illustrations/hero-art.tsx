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
          <stop offset="0" stopColor="#b0746a" />
          <stop offset="0.28" stopColor="#ca958b" />
          <stop offset="0.42" stopColor="#d4a8a0" />
          <stop offset="0.6" stopColor="#c58b81" />
          <stop offset="1" stopColor="#a86458" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#cd9b92" />
          <stop offset="0.45" stopColor="#e2c5c0" />
          <stop offset="1" stopColor="#c39087" />
        </linearGradient>
        <linearGradient id={`${id}-yellow`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#dfbf9f" />
          <stop offset="0.5" stopColor="#d2a679" />
          <stop offset="1" stopColor="#c1884e" />
        </linearGradient>
        <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6d5c59" />
          <stop offset="0.55" stopColor="#574947" />
          <stop offset="1" stopColor="#4a3e3d" />
        </linearGradient>
        <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dfc6c9" />
          <stop offset="1" stopColor="#c79ca2" />
        </linearGradient>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7cfcb" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ca958b" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id={`${id}-bubble`} cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#eedcd9" stopOpacity="0.25" />
          <stop offset="0.85" stopColor="#e5cbc7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#e3ced1" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id={`${id}-shadow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2a2221" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2a2221" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-pom`} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#dbb8b1" />
          <stop offset="1" stopColor="#c3867c" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="305" cy="540" rx="210" ry="26" fill={u("shadow")} />

      {/* handle (behind contents) */}
      <path d="M150 312 C150 92 452 92 452 312" fill="none" stroke="#d5c7c5" strokeWidth="9" strokeLinecap="round" />
      <path d="M150 312 C150 92 452 92 452 312" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

      {/* rim back + opening */}
      <ellipse cx="300" cy="305" rx="162" ry="32" fill={u("rim")} />
      <ellipse cx="300" cy="305" rx="148" ry="24" fill="#9b5b4f" />

      {/* blue pompom duster */}
      <g>
        <path d="M232 330 L168 150" stroke="#d2a679" strokeWidth="12" strokeLinecap="round" />
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
                stroke={i % 2 ? "#c89389" : "#d0a199"}
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
        <g stroke="#372d2c" strokeWidth="5" strokeLinecap="round" opacity="0.85">
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1={386 + i * 9.5} y1="70" x2={386 + i * 9.5} y2="40" />
          ))}
        </g>
      </g>

      {/* teal spray bottle */}
      <SprayBottle x={330} y={170} width={76} height={170} bodyFill={u("teal")} liquidFill="#473c3a" labelColor="#c3867c" />

      {/* yellow spray bottle */}
      <SprayBottle x={248} y={205} width={66} height={140} bodyFill={u("yellow")} labelColor="#b5776d" headColor="#ffffff" flip />

      {/* white microfiber roll */}
      <g transform="rotate(-14 385 270)">
        <rect x="360" y="215" width="58" height="110" rx="16" fill="#f3e7e5" />
        <g stroke="#e9d9d6" strokeWidth="4">
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1="364" y1={232 + i * 16} x2="414" y2={226 + i * 16} />
          ))}
        </g>
      </g>

      {/* bucket body (front) */}
      <path d="M138 305 A162 32 0 0 0 462 305 L426 512 Q300 548 174 512 Z" fill={u("bucket")} />
      <path d="M164 360 Q300 392 436 360" stroke="#9e5f53" strokeWidth="5" fill="none" opacity="0.35" />
      <path d="M176 470 Q300 500 424 470" stroke="#9e5f53" strokeWidth="5" fill="none" opacity="0.35" />
      <path d="M196 340 L214 500" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity="0.22" />
      <path d="M138 305 A162 32 0 0 0 462 305" stroke="#dcb9b3" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M150 314 A150 28 0 0 0 450 314" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.6" />
      {/* handle lugs */}
      <circle cx="150" cy="316" r="10" fill="#e6d7d5" />
      <circle cx="452" cy="316" r="10" fill="#e6d7d5" />

      {/* sponge on the rim */}
      <g transform="rotate(-10 196 318)">
        <rect x="150" y="300" width="96" height="44" rx="10" fill="#d2a679" />
        <rect x="150" y="300" width="96" height="15" rx="7" fill="#70ab84" />
        {[166, 186, 206, 226].map((cx) => (
          <circle key={cx} cx={cx} cy="330" r="3.5" fill="#bd7e3f" />
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
        <path d="M58 300 q6 12 0 18 q-6 -6 0 -18Z" fill="#d7b0aa" />
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

      <Glint cx={552} cy={300} size={14} fill="#d2a679" />
      <Glint cx={120} cy={120} size={10} fill="#c3867c" opacity={0.7} />
      <Glint cx={360} cy={110} size={9} fill="#ffffff" />
    </svg>
  );
}
