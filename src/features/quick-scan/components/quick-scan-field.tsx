import type { ReactNode } from "react";

interface QuickScanFieldProps {
  readonly label: string;
  readonly children: ReactNode;
}

export const QuickScanField = ({ label, children }: QuickScanFieldProps) => (
  <div className="bg-background p-6">
    <p className="font-mono text-xs uppercase tracking-wide text-dim">{label}</p>
    <p className="mt-2 text-muted">{children}</p>
  </div>
);
