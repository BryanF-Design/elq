"use client";

import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { BeforeAfterArt } from "@/components/illustrations/before-after-art";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeLabel: string;
  afterLabel: string;
  className?: string;
};

export function BeforeAfterSlider({ beforeLabel, afterLabel, className }: BeforeAfterSliderProps) {
  const [percentage, setPercentage] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercentage(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const startDragging = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      (event.target as Element).setPointerCapture?.(event.pointerId);
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const stopDragging = useCallback(() => {
    draggingRef.current = false;
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      setPercentage((p) => Math.max(0, p - 5));
    } else if (event.key === "ArrowRight") {
      setPercentage((p) => Math.min(100, p + 5));
    } else if (event.key === "Home") {
      setPercentage(0);
    } else if (event.key === "End") {
      setPercentage(100);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-[1.5rem] border border-border-strong",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      {/* Base layer: "after" fills the frame; "before" is clipped on top so the
          region left of the handle always reads as before and right of it as
          after, matching the fixed corner labels at every handle position. */}
      <BeforeAfterArt state="after" className="absolute inset-0 h-full w-full" />

      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
      >
        <BeforeAfterArt state="before" className="absolute inset-0 h-full w-full" />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-strong backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-champagne backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 w-px bg-rose"
        style={{ left: `${percentage}%` }}
        aria-hidden="true"
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${beforeLabel} / ${afterLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percentage)}
        onPointerDown={startDragging}
        onKeyDown={handleKeyDown}
        style={{ left: `${percentage}%` }}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-rose bg-background text-rose shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <GripVertical className="h-4 w-4" aria-hidden="true" />
      </div>
    </div>
  );
}
