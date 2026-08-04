import type { ReactNode } from "react";

interface StatItem {
  readonly value: ReactNode;
  readonly label: string;
}

interface StatPanelProps {
  readonly items: readonly StatItem[];
}

export const StatPanel = ({ items }: StatPanelProps) => (
  <div className="rounded-card bg-contrast p-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="font-mono text-2xl font-semibold text-green">{item.value}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-contrast-dim">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);
