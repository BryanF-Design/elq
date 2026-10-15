import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small "swipe" cue shown under horizontal carousels on phones only. */
export function SwipeHint({ className }: { className?: string }) {
  const t = useTranslations("common");
  return (
    <p className={cn("mt-2 flex items-center justify-center gap-2 text-xs font-medium text-muted sm:hidden", className)}>
      {t("swipe")}
      <ArrowRight className="h-3.5 w-3.5 animate-pulse text-brand" aria-hidden="true" />
    </p>
  );
}

/**
 * Classes that turn a grid into a swipeable, snapping row on phones while
 * keeping the normal grid from `sm` up. Pair `carouselItem` on each child.
 */
export const carouselRow =
  "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0";
export const carouselItem = "w-[84%] shrink-0 snap-start sm:w-auto";
