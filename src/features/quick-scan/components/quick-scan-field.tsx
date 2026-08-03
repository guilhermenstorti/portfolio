import type { ReactNode } from "react";

interface QuickScanFieldProps {
  readonly label: string;
  readonly children: ReactNode;
}

export const QuickScanField = ({ label, children }: QuickScanFieldProps) => (
  <div>
    <p className="font-bold text-ink">{label}</p>
    <p className="mt-1 text-ink-light">{children}</p>
  </div>
);
