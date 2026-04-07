import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-mono font-500 uppercase tracking-widest",
        variant === "default" &&
          "bg-[var(--color-surface)] text-[var(--color-muted)]",
        variant === "accent" &&
          "bg-[var(--color-forest-100)] text-[var(--color-forest-600)]",
        className
      )}
    >
      {children}
    </span>
  );
}
