import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs font-500 uppercase tracking-[0.2em] text-[var(--color-muted)]",
        className
      )}
    >
      {number && <span>{number}</span>}
      {number && (
        <span className="w-6 h-px bg-[var(--color-border)]" aria-hidden="true" />
      )}
      <span>{label}</span>
    </div>
  );
}
