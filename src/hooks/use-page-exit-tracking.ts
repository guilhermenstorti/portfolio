import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageExited } from "@/lib/analytics";
import { getScrollDepthPct } from "@/lib/analytics/scroll";

const MS_PER_SECOND = 1000;

export function usePageExitTracking(): void {
  const location = useLocation();
  const startTimeRef = useRef(Date.now());
  const maxScrollRef = useRef(0);

  useEffect(() => {
    const pagePath = location.pathname;
    startTimeRef.current = Date.now();
    maxScrollRef.current = getScrollDepthPct();
    let hasReported = false;

    const updateMaxScroll = () => {
      maxScrollRef.current = Math.max(maxScrollRef.current, getScrollDepthPct());
    };

    const reportExit = () => {
      if (hasReported) {
        return;
      }
      hasReported = true;
      trackPageExited({
        pagePath,
        timeOnPageSeconds: Math.floor((Date.now() - startTimeRef.current) / MS_PER_SECOND),
        maxScrollPct: maxScrollRef.current,
      });
    };

    window.addEventListener("scroll", updateMaxScroll, { passive: true });
    window.addEventListener("beforeunload", reportExit);

    return () => {
      window.removeEventListener("scroll", updateMaxScroll);
      window.removeEventListener("beforeunload", reportExit);
      reportExit();
    };
  }, [location.pathname]);
}
