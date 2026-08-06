import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageViewed } from "@/lib/analytics";

export function useAmplitudePageView(): void {
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const referrerPage = previousPathRef.current ?? document.referrer;
    trackPageViewed({ pagePath: location.pathname, referrerPage });
    previousPathRef.current = location.pathname;
  }, [location.pathname]);
}
