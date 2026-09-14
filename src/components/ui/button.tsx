import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-rose text-background hover:bg-champagne shadow-[0_0_0_1px_rgba(215,170,164,0.4)] hover:shadow-[0_8px_30px_-8px_rgba(215,170,164,0.55)]",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:border-rose hover:bg-surface-hover",
  outline:
    "bg-transparent text-foreground border border-white/20 hover:border-rose hover:text-champagne",
  ghost: "bg-transparent text-foreground hover:text-champagne",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
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
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
