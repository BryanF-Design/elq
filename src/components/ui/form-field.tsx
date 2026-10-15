import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputClassName =
  "w-full rounded-2xl border border-border-strong bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-all duration-200 hover:border-brand/40 focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus-visible:outline-none aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-100";

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
      <label htmlFor={htmlFor} className="text-sm font-semibold text-muted-strong">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs font-medium text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
