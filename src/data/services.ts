import {
  Repeat,
  Sparkles,
  PackageOpen,
  CookingPot,
  ShowerHead,
  BedDouble,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceLayout = "wide" | "tall" | "standard";

/**
 * Structural metadata paired positionally with `services.items` in the
 * messages files. `layout` drives the varied editorial grid so services
 * don't render as six identical cards.
 */
export const serviceMeta: { icon: LucideIcon; layout: ServiceLayout }[] = [
  { icon: Repeat, layout: "wide" },
  { icon: Sparkles, layout: "tall" },
  { icon: PackageOpen, layout: "standard" },
  { icon: CookingPot, layout: "standard" },
  { icon: ShowerHead, layout: "standard" },
  { icon: BedDouble, layout: "wide" },
];
