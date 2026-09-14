import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputClassName =
  "w-full rounded-xl border border-border-strong bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-rose focus:outline-none focus-visible:ring-0 aria-[invalid=true]:border-red-400/70";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, error, required, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wider text-muted-strong">
        {label}
        {required ? <span className="text-rose"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
