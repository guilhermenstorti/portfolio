import { useEffect, useRef } from "react";
import type { CaseName } from "@/lib/analytics/types";
import { trackCaseScrollMilestone } from "@/lib/analytics";
import { getScrollDepthPct } from "@/lib/analytics/scroll";

const MILESTONES = [25, 50, 75, 100] as const;

export function useCaseScrollTracking(caseName: CaseName | null): void {
  const trackedMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!caseName) {
      return;
    }
    trackedMilestonesRef.current = new Set();

    const handleScroll = () => {
      const depth = getScrollDepthPct();
      MILESTONES.forEach((milestone) => {
        if (depth >= milestone && !trackedMilestonesRef.current.has(milestone)) {
          trackedMilestonesRef.current.add(milestone);
          trackCaseScrollMilestone({ caseName, milestonePct: milestone });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [caseName]);
}
