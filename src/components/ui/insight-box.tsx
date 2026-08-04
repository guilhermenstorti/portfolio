import type { ReactNode } from "react";

interface InsightBoxProps {
  readonly children: ReactNode;
}

export const InsightBox = ({ children }: InsightBoxProps) => (
  <div className="rounded-r-lg border-l-4 border-warn bg-card px-5 py-4 text-foreground">
    {children}
  </div>
);
