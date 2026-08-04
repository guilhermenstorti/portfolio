import type { ReactNode } from "react";

interface QuickScanFieldProps {
  readonly label: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export const QuickScanField = ({
  label,
  children,
  className,
}: QuickScanFieldProps) => (
  <div className={`p-6 ${className ?? "bg-background"}`}>
    <p className="font-mono text-xs uppercase tracking-wide text-dim">{label}</p>
    <p className="mt-2 text-muted">{children}</p>
  </div>
);
