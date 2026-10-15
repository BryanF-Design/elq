import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "sun" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#e8c9c3] via-brand to-brand-strong text-on-brand shadow-brand hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_40px_-12px_rgba(215,170,164,0.7)]",
  sun: "bg-brand text-on-brand shadow-brand hover:-translate-y-0.5 hover:bg-sun",
  outline:
    "border border-border-strong bg-surface/70 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-brand hover:text-brand",
  white: "bg-foreground text-on-brand shadow-soft hover:-translate-y-0.5 hover:bg-sun",
  ghost: "text-foreground hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-base",
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonOwnProps & { as?: T } & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | "as">) {
  const Component = as || "button";

  return (
    <Component className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}
