import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

/** A link with a rose underline that reveals from the left on hover/focus. */
export function AnimatedLink({ children, className, ...props }: AnimatedLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex w-fit items-center text-sm text-muted transition-colors duration-300 hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-rose transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
    </a>
  );
}
