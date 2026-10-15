import { useId, type ReactNode } from "react";
import { Bubble, Glint, Plant, SprayBottle } from "@/components/illustrations/cleaning-kit";
import { cn } from "@/lib/utils";

export type SceneMotif =
  | "kitchen"
  | "floor"
  | "bathroom"
  | "bedroom"
  | "detail"
  | "living"
  | "estimate"
  | "calendar"
  | "home";

/**
 * Bright, airy room vignettes in the ELQ blue palette. They stand in for
 * real photography (see README → "About the imagery") and fill any box via
 * `preserveAspectRatio="xMidYMid slice"`.
 */
export function SceneArt({
  motif,
  label,
  className,
}: {
  motif: SceneMotif;
  label?: string;
  className?: string;
}) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, "");
  const u = (name: string) => `url(#${id}-${name})`;

  const scenes: Record<SceneMotif, ReactNode> = {
    kitchen: <Kitchen u={u} />,
    floor: <Floor u={u} />,
    bathroom: <Bathroom u={u} />,
    bedroom: <Bedroom u={u} />,
    detail: <Detail u={u} />,
    living: <Living u={u} />,
    estimate: <Estimate u={u} />,
    calendar: <Calendar u={u} />,
    home: <Home u={u} />,
  };

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3f8ff" />
          <stop offset="1" stopColor="#dce9ff" />
        </linearGradient>
        <linearGradient id={`${id}-wallWarm`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7fbff" />
          <stop offset="1" stopColor="#e3eeff" />
        </linearGradient>
        <linearGradient id={`${id}-floor`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d3e2fa" />
          <stop offset="1" stopColor="#b9cff2" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f95ff" />
          <stop offset="1" stopColor="#1f5fe6" />
        </linearGradient>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfe0ff" />
          <stop offset="1" stopColor="#eef6ff" />
        </linearGradient>
        <linearGradient id={`${id}-wood`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d9b5" />
          <stop offset="1" stopColor="#ddb98a" />
        </linearGradient>
        <linearGradient id={`${id}-yellow`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe27a" />
          <stop offset="1" stopColor="#f5c200" />
        </linearGradient>
        <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7fe3f0" />
          <stop offset="1" stopColor="#1497bd" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-bubble`} cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#dcebff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#b9d3ff" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {scenes[motif]}
    </svg>
  );
}

type SceneProps = { u: (name: string) => string };

function Window({ x, y, w, h, u }: SceneProps & { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx="8" fill="#ffffff" />
      <rect x={x} y={y} width={w} height={h} rx="4" fill={u("sky")} />
      <path d={`M${x + w * 0.15} ${y + h} L${x + w * 0.55} ${y} L${x + w * 0.8} ${y} L${x + w * 0.4} ${y + h} Z`} fill="#ffffff" opacity="0.45" />
      <rect x={x + w / 2 - 2.5} y={y} width="5" height={h} fill="#ffffff" />
      <rect x={x} y={y + h / 2 - 2.5} width={w} height="5" fill="#ffffff" />
    </g>
  );
}

function Kitchen({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wall")} />
      <Window x={36} y={30} w={110} h={86} u={u} />
      {/* upper cabinets */}
      <rect x="190" y="18" width="186" height="78" rx="8" fill="#ffffff" />
      <line x1="252" y1="24" x2="252" y2="90" stroke="#dce7f8" strokeWidth="3" />
      <line x1="314" y1="24" x2="314" y2="90" stroke="#dce7f8" strokeWidth="3" />
      {[240, 264, 302, 326].map((x) => (
        <rect key={x} x={x - 2} y="70" width="4" height="14" rx="2" fill="#9db8e6" />
      ))}
      {/* backsplash */}
      <rect x="0" y="128" width="400" height="44" fill="#eaf2ff" />
      {Array.from({ length: 11 }, (_, i) => (
        <line key={i} x1={i * 40} y1="128" x2={i * 40} y2="172" stroke="#ffffff" strokeWidth="2" />
      ))}
      <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" strokeWidth="2" />
      {/* faucet + bowl + plant + board */}
      <path d="M104 172 L104 140 Q104 124 120 124 Q134 124 134 138" stroke="#a9bad6" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="200" cy="166" rx="30" ry="8" fill="#ffffff" />
      <path d="M170 160 Q200 186 230 160 Z" fill="#ffffff" />
      <circle cx="190" cy="154" r="9" fill={u("yellow")} />
      <circle cx="208" cy="152" r="9" fill="#ffd84a" />
      <rect x="252" y="112" width="40" height="60" rx="18" fill={u("wood")} transform="rotate(8 272 142)" />
      <Plant x={344} y={172} scale={0.55} />
      {/* counter + base cabinets */}
      <rect x="0" y="170" width="400" height="12" fill="#ffffff" />
      <rect x="0" y="182" width="400" height="118" fill={u("blue")} />
      {[0, 100, 200, 300].map((x) => (
        <g key={x}>
          <rect x={x + 8} y="192" width="84" height="100" rx="6" fill="#ffffff" opacity="0.08" />
          <rect x={x + 40} y="200" width="20" height="5" rx="2.5" fill="#ffffff" opacity="0.85" />
        </g>
      ))}
      <rect x="0" y="182" width="400" height="6" fill="#000" opacity="0.08" />
      <Glint cx={168} cy={116} size={10} />
      <Glint cx={300} cy={92} size={7} fill="#ffd23f" />
      <Glint cx={60} cy={150} size={8} />
    </g>
  );
}

function Floor({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wall")} />
      <Window x={250} y={26} w={110} h={100} u={u} />
      <rect x="0" y="158" width="400" height="10" fill="#ffffff" />
      <rect x="0" y="168" width="400" height="132" fill={u("floor")} />
      {[-200, -100, 0, 100, 200, 300, 400, 500, 600].map((x) => (
        <line key={x} x1={200 + (x - 200) * 0.45} y1="168" x2={x} y2="300" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
      ))}
      <path d="M210 168 L300 168 L400 300 L250 300 Z" fill={u("shine")} opacity="0.7" />
      {/* bucket */}
      <path d="M282 214 L346 214 L338 270 L290 270 Z" fill={u("yellow")} />
      <ellipse cx="314" cy="214" rx="32" ry="7" fill="#ffe788" />
      <ellipse cx="314" cy="214" rx="26" ry="4.5" fill="#3f95ff" />
      <path d="M284 216 Q314 176 344 216" stroke="#9fb3d6" strokeWidth="3" fill="none" />
      {/* mop */}
      <line x1="150" y1="30" x2="206" y2="244" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" />
      <line x1="150" y1="30" x2="206" y2="244" stroke="#c9d8f2" strokeWidth="3" strokeLinecap="round" />
      <rect x="182" y="236" width="56" height="14" rx="5" fill="#1f6bff" />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d={`M${172 + i * 6} 248 q${(i % 3) - 1} 14 ${(i % 2) * 6 - 3} 22`} stroke={i % 2 ? "#5aa2ff" : "#2f7bff"} strokeWidth="5" strokeLinecap="round" fill="none" />
      ))}
      <Glint cx={110} cy={250} size={14} />
      <Glint cx={360} cy={240} size={10} />
      <Glint cx={70} cy={210} size={7} fill="#ffd23f" />
      <Bubble cx={250} cy={196} r={8} fill={u("bubble")} />
      <Bubble cx={232} cy={176} r={5} fill={u("bubble")} />
    </g>
  );
}

function Bathroom({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill="#e7f0ff" />
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="190" stroke="#ffffff" strokeWidth="2.5" />
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50 + 40} x2="400" y2={i * 50 + 40} stroke="#ffffff" strokeWidth="2.5" />
      ))}
      {/* mirror */}
      <circle cx="200" cy="86" r="62" fill="#ffffff" />
      <circle cx="200" cy="86" r="54" fill={u("sky")} />
      <path d="M168 60 L210 34 M160 92 L228 50" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      {/* vanity */}
      <rect x="70" y="170" width="260" height="14" rx="4" fill="#ffffff" />
      <rect x="84" y="184" width="232" height="96" rx="6" fill={u("wood")} />
      <line x1="200" y1="190" x2="200" y2="274" stroke="#c99e68" strokeWidth="3" />
      <rect x="176" y="224" width="16" height="5" rx="2.5" fill="#ffffff" />
      <rect x="208" y="224" width="16" height="5" rx="2.5" fill="#ffffff" />
      <ellipse cx="200" cy="170" rx="46" ry="9" fill="#f2f7ff" />
      <path d="M200 162 L200 146 Q200 140 208 140 L218 140" stroke="#a9bad6" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* towels */}
      <rect x="272" y="150" width="54" height="10" rx="5" fill="#1f6bff" />
      <rect x="268" y="140" width="62" height="11" rx="5.5" fill="#ffffff" />
      <rect x="276" y="130" width="46" height="11" rx="5.5" fill="#ffd23f" />
      {/* soap dispenser */}
      <rect x="104" y="138" width="22" height="32" rx="6" fill={u("teal")} />
      <rect x="110" y="128" width="10" height="12" rx="2" fill="#ffffff" />
      <rect x="116" y="126" width="12" height="4" rx="2" fill="#ffffff" />
      <Plant x={50} y={300} scale={0.7} />
      <rect x="0" y="280" width="400" height="20" fill="#d3e2fa" />
      <Bubble cx={310} cy={60} r={14} fill={u("bubble")} />
      <Bubble cx={338} cy={90} r={8} fill={u("bubble")} />
      <Bubble cx={84} cy={78} r={10} fill={u("bubble")} />
      <Glint cx={244} cy={52} size={10} />
    </g>
  );
}

function Bedroom({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wallWarm")} />
      {/* art */}
      <rect x="150" y="22" width="100" height="62" rx="6" fill="#ffffff" />
      <rect x="157" y="29" width="86" height="48" rx="3" fill="#dce9ff" />
      <path d="M157 77 L185 50 L203 66 L218 54 L243 77 Z" fill="#7fb2ff" />
      <circle cx="226" cy="42" r="6" fill="#ffd23f" />
      {/* headboard */}
      <rect x="80" y="96" width="240" height="96" rx="22" fill={u("blue")} />
      {[120, 160, 200, 240, 280].map((x) => (
        <line key={x} x1={x} y1="104" x2={x} y2="186" stroke="#ffffff" strokeWidth="2" opacity="0.15" />
      ))}
      {/* pillows */}
      <rect x="104" y="140" width="84" height="40" rx="16" fill="#ffffff" />
      <rect x="212" y="140" width="84" height="40" rx="16" fill="#ffffff" />
      <rect x="168" y="150" width="64" height="32" rx="12" fill="#ffd23f" />
      {/* duvet */}
      <path d="M66 182 L334 182 Q342 182 342 192 L342 252 L58 252 L58 192 Q58 182 66 182 Z" fill="#ffffff" />
      <rect x="58" y="212" width="284" height="24" fill="#cfe0ff" />
      <rect x="58" y="252" width="284" height="10" rx="3" fill="#e6eefc" />
      {/* nightstand + lamp */}
      <rect x="348" y="200" width="46" height="60" rx="6" fill={u("wood")} />
      <rect x="356" y="222" width="30" height="4" rx="2" fill="#ffffff" />
      <rect x="368" y="176" width="6" height="24" fill="#a9bad6" />
      <path d="M352 178 L390 178 L380 150 L362 150 Z" fill="#fff5cc" />
      <circle cx="371" cy="168" r="30" fill={u("glow")} opacity="0.7" />
      <Plant x={30} y={262} scale={0.6} />
      <rect x="0" y="262" width="400" height="38" fill={u("floor")} />
      <ellipse cx="200" cy="284" rx="150" ry="10" fill="#ffffff" opacity="0.6" />
      <Glint cx={336} cy={60} size={10} />
      <Glint cx={64} cy={52} size={8} fill="#ffd23f" />
    </g>
  );
}

function Detail({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wall")} />
      <rect x="0" y="200" width="400" height="100" fill="#ffffff" />
      <path d="M0 200 L400 200 L400 214 L0 214 Z" fill="#e9f1ff" />
      <path d="M150 214 L260 214 L330 300 L170 300 Z" fill={u("shine")} opacity="0.8" />
      {/* mist */}
      <path d="M176 92 L330 40 L350 150 Z" fill="#cfe5ff" opacity="0.55" />
      {Array.from({ length: 22 }, (_, i) => (
        <circle key={i} cx={200 + ((i * 37) % 140)} cy={70 + ((i * 53) % 80)} r={1.5 + (i % 3)} fill="#7fb6ff" opacity="0.7" />
      ))}
      <g transform="rotate(-14 120 160)">
        <SprayBottle x={110} y={110} width={74} height={150} bodyFill={u("teal")} liquidFill="#0f8fb3" />
      </g>
      {/* cloth wiping */}
      <path d="M262 190 Q300 170 352 184 Q366 196 356 214 Q310 224 270 214 Q254 204 262 190 Z" fill="#ff8fb1" />
      <path d="M276 198 Q310 188 344 196" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.55" />
      <Glint cx={300} cy={246} size={18} />
      <Glint cx={364} cy={240} size={10} />
      <Glint cx={232} cy={262} size={8} fill="#ffd23f" />
      <Bubble cx={360} cy={70} r={18} fill={u("bubble")} />
      <Bubble cx={50} cy={60} r={10} fill={u("bubble")} />
    </g>
  );
}

function Living({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wall")} />
      <Window x={268} y={26} w={104} h={130} u={u} />
      {/* floor lamp */}
      <line x1="42" y1="70" x2="42" y2="240" stroke="#a9bad6" strokeWidth="4" />
      <path d="M22 72 L62 72 L54 40 L30 40 Z" fill="#ffffff" />
      <circle cx="42" cy="66" r="34" fill={u("glow")} opacity="0.6" />
      {/* sofa */}
      <rect x="70" y="128" width="190" height="62" rx="20" fill={u("blue")} />
      <rect x="62" y="166" width="206" height="54" rx="16" fill="#2d73f5" />
      <rect x="54" y="150" width="30" height="72" rx="14" fill="#3f86ff" />
      <rect x="246" y="150" width="30" height="72" rx="14" fill="#3f86ff" />
      <rect x="92" y="136" width="52" height="40" rx="12" fill="#ffd23f" transform="rotate(-8 118 156)" />
      <rect x="186" y="136" width="52" height="40" rx="12" fill="#ffffff" transform="rotate(6 212 156)" />
      <rect x="78" y="220" width="8" height="18" rx="3" fill="#c99e68" />
      <rect x="244" y="220" width="8" height="18" rx="3" fill="#c99e68" />
      {/* rug + table */}
      <rect x="0" y="236" width="400" height="64" fill={u("floor")} />
      <ellipse cx="200" cy="268" rx="170" ry="22" fill="#ffffff" opacity="0.75" />
      <rect x="150" y="238" width="140" height="10" rx="5" fill={u("wood")} />
      <rect x="162" y="248" width="6" height="22" fill="#c99e68" />
      <rect x="272" y="248" width="6" height="22" fill="#c99e68" />
      <rect x="196" y="226" width="22" height="12" rx="3" fill="#ffffff" />
      <circle cx="248" cy="232" r="7" fill="#ffd23f" />
      <Plant x={344} y={238} scale={0.85} />
      <Glint cx={300} cy={190} size={10} />
      <Glint cx={140} cy={96} size={8} fill="#ffd23f" />
    </g>
  );
}

function Estimate({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wallWarm")} />
      <circle cx="200" cy="150" r="120" fill="#ffffff" opacity="0.6" />
      <g transform="rotate(-6 190 160)">
        <rect x="118" y="46" width="150" height="210" rx="16" fill={u("blue")} />
        <rect x="132" y="64" width="122" height="180" rx="8" fill="#ffffff" />
        <rect x="160" y="36" width="66" height="26" rx="10" fill="#ffd23f" />
        <rect x="148" y="82" width="70" height="10" rx="5" fill="#0d1b3e" opacity="0.8" />
        {[112, 144, 176, 208].map((y, i) => (
          <g key={y}>
            <circle cx="156" cy={y} r="9" fill={i < 3 ? "#1f6bff" : "#e4eeff"} />
            {i < 3 ? <path d={`M151 ${y} l4 4 l7 -8`} stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" /> : null}
            <rect x="174" y={y - 4} width={i % 2 ? 56 : 66} height="8" rx="4" fill="#cfe0ff" />
          </g>
        ))}
      </g>
      {/* pen */}
      <g transform="rotate(32 300 170)">
        <rect x="292" y="92" width="14" height="120" rx="7" fill={u("yellow")} />
        <path d="M292 212 L306 212 L299 230 Z" fill="#0d1b3e" />
      </g>
      {/* phone bubble */}
      <circle cx="318" cy="76" r="30" fill="#1f6bff" />
      <path d="M306 66 q2 -4 6 -2 l5 6 q2 3 -1 5 l-3 2 q4 8 12 12 l2 -3 q2 -3 5 -1 l6 5 q2 4 -2 6 q-8 6 -20 -4 q-12 -10 -10 -26Z" fill="#ffffff" />
      <Glint cx={86} cy={84} size={12} fill="#ffd23f" />
      <Glint cx={330} cy={250} size={10} fill="#1f6bff" opacity={0.6} />
    </g>
  );
}

function Calendar({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wallWarm")} />
      <circle cx="200" cy="150" r="120" fill="#ffffff" opacity="0.6" />
      <rect x="96" y="56" width="208" height="196" rx="18" fill="#ffffff" />
      <path d="M96 74 Q96 56 114 56 L286 56 Q304 56 304 74 L304 100 L96 100 Z" fill={u("blue")} />
      <rect x="130" y="42" width="10" height="30" rx="5" fill="#0d1b3e" />
      <rect x="260" y="42" width="10" height="30" rx="5" fill="#0d1b3e" />
      <rect x="160" y="72" width="80" height="10" rx="5" fill="#ffffff" opacity="0.9" />
      {Array.from({ length: 20 }, (_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const cx = 128 + col * 36;
        const cy = 126 + row * 34;
        const active = i === 2 || i === 7 || i === 12 || i === 17;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="12" fill={active ? "#1f6bff" : "#eef4ff"} />
            {active ? <path d={`M${cx - 5} ${cy} l3.5 4 l7 -8`} stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" /> : null}
          </g>
        );
      })}
      {/* clock */}
      <circle cx="304" cy="226" r="34" fill="#ffd23f" />
      <circle cx="304" cy="226" r="26" fill="#ffffff" />
      <path d="M304 210 L304 226 L316 232" stroke="#0d1b3e" strokeWidth="4" strokeLinecap="round" fill="none" />
      <Glint cx={70} cy={90} size={12} fill="#1f6bff" opacity={0.6} />
      <Glint cx={340} cy={80} size={10} fill="#ffd23f" />
    </g>
  );
}

function Home({ u }: SceneProps) {
  return (
    <g>
      <rect width="400" height="300" fill={u("wallWarm")} />
      <circle cx="200" cy="160" r="122" fill="#ffffff" opacity="0.6" />
      <rect x="0" y="246" width="400" height="54" fill="#d6f0e2" />
      {/* house */}
      <rect x="120" y="126" width="160" height="124" rx="6" fill="#ffffff" />
      <path d="M100 136 L200 54 L300 136 Q304 142 296 144 L104 144 Q96 142 100 136 Z" fill={u("blue")} />
      <rect x="250" y="70" width="20" height="40" rx="3" fill="#2d73f5" />
      <rect x="182" y="184" width="36" height="66" rx="18" fill="#ffd23f" />
      <circle cx="210" cy="220" r="3" fill="#0d1b3e" />
      <rect x="136" y="164" width="34" height="34" rx="6" fill="#fff3c4" />
      <rect x="230" y="164" width="34" height="34" rx="6" fill="#fff3c4" />
      <path d="M153 164 V198 M136 181 H170 M247 164 V198 M230 181 H264" stroke="#ffffff" strokeWidth="3" />
      <Plant x={92} y={252} scale={0.6} />
      <Plant x={312} y={252} scale={0.5} />
      {/* heart */}
      <circle cx="318" cy="70" r="26" fill="#ff8fb1" />
      <path d="M318 82 C300 70 306 56 314 58 Q318 59 318 64 Q318 59 322 58 C330 56 336 70 318 82 Z" fill="#ffffff" />
      <Glint cx={80} cy={70} size={14} fill="#ffd23f" />
      <Glint cx={120} cy={100} size={8} fill="#1f6bff" opacity={0.6} />
      <Glint cx={300} cy={190} size={9} />
      <Bubble cx={360} cy={140} r={12} fill={u("bubble")} />
    </g>
  );
}
