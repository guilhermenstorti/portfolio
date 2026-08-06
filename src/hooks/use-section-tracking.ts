import { useEffect, useRef } from "react";
import type { SectionName } from "@/lib/analytics/types";
import { trackSectionViewed } from "@/lib/analytics";

const VISIBILITY_THRESHOLD = 0.3;

export function useSectionTracking<T extends HTMLElement>(sectionName: SectionName) {
  const ref = useRef<T>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedRef.current) {
          hasTrackedRef.current = true;
          trackSectionViewed(sectionName);
        }
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
