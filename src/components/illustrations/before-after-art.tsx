import { SceneArt } from "@/components/illustrations/scene-art";
import { cn } from "@/lib/utils";

/**
 * The same living-room vignette shown clean ("after") or dusty and
 * cluttered ("before"). The overlay shares the scene's 400×300 viewBox and
 * slice behaviour, so it lines up at any container size.
 */
export function BeforeAfterArt({ state, className }: { state: "before" | "after"; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden="true">
      <SceneArt motif="living" className="absolute inset-0" />
      {state === "before" ? (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          {/* dull, dusty cast */}
          <rect width="400" height="300" fill="#7d6f55" opacity="0.32" />
          <rect width="400" height="300" fill="#3b3a36" opacity="0.12" />
          {/* cobweb */}
          <g stroke="#f4efe4" strokeWidth="1" opacity="0.7" fill="none">
            <path d="M0 0 L60 40 M0 0 L30 60 M0 0 L70 14" />
            <path d="M14 10 Q22 22 10 26 M30 20 Q40 40 18 44 M46 30 Q56 52 26 60" />
          </g>
          {/* streaks on the window */}
          <g stroke="#8a7a5c" strokeWidth="3" opacity="0.5" strokeLinecap="round">
            <path d="M282 40 l10 30 M300 60 l6 40 M330 34 l12 28 M350 90 l4 30" />
          </g>
          {/* stains on the floor */}
          <ellipse cx="96" cy="270" rx="26" ry="6" fill="#6b5a3e" opacity="0.45" />
          <ellipse cx="330" cy="286" rx="34" ry="7" fill="#6b5a3e" opacity="0.4" />
          <ellipse cx="226" cy="252" rx="16" ry="4" fill="#6b5a3e" opacity="0.5" />
          {/* clutter */}
          <rect x="160" y="226" width="34" height="12" rx="2" fill="#c9b78f" transform="rotate(-14 177 232)" />
          <rect x="250" y="222" width="24" height="18" rx="3" fill="#b9a57a" transform="rotate(18 262 231)" />
          <circle cx="120" cy="262" r="9" fill="#e9e2d0" />
          <circle cx="132" cy="268" r="7" fill="#ddd3bc" />
          <path d="M300 258 q10 -8 22 0 q-4 10 -22 0Z" fill="#9c8a66" />
          <rect x="70" y="196" width="40" height="10" rx="5" fill="#d8cdb4" transform="rotate(26 90 201)" />
          {/* dust specks */}
          {Array.from({ length: 40 }, (_, i) => (
            <circle
              key={i}
              cx={(i * 73) % 400}
              cy={(i * 41) % 300}
              r={0.8 + (i % 3) * 0.6}
              fill="#f2ead8"
              opacity="0.55"
            />
          ))}
        </svg>
      ) : null}
    </div>
  );
}
