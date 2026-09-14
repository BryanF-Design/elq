import { cn } from "@/lib/utils";

type FrequencyPattern = "weekly" | "biweekly" | "monthly";

const PATTERNS: Record<FrequencyPattern, boolean[]> = {
  weekly: Array.from({ length: 28 }, (_, i) => i % 7 === 2),
  biweekly: Array.from({ length: 28 }, (_, i) => i % 14 === 2),
  monthly: Array.from({ length: 28 }, (_, i) => i === 16),
};

/** Small decorative calendar-grid glyph communicating cadence at a glance. */
export function FrequencyCalendar({ pattern }: { pattern: FrequencyPattern }) {
  const days = PATTERNS[pattern];

  return (
    <div className="grid grid-cols-7 gap-2" aria-hidden="true">
      {days.map((active, index) => (
        <span
          key={index}
          className={cn(
            "h-2.5 w-2.5 rounded-full transition-colors duration-300",
            active ? "bg-rose" : "bg-border-strong",
          )}
        />
      ))}
    </div>
  );
}
