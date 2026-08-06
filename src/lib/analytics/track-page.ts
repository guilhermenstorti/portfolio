import * as amplitude from "@amplitude/analytics-browser";
import { getPageNameFromPath } from "@/lib/analytics/page-name";

interface PageViewedInput {
  readonly pagePath: string;
  readonly referrerPage: string;
}

interface PageExitedInput {
  readonly pagePath: string;
  readonly timeOnPageSeconds: number;
  readonly maxScrollPct: number;
}

export const trackPageViewed = ({ pagePath, referrerPage }: PageViewedInput): void => {
  amplitude.track("page_viewed", {
    page_name: getPageNameFromPath(pagePath),
    page_path: pagePath,
    referrer_page: referrerPage,
  });
};

export const trackPageExited = ({ pagePath, timeOnPageSeconds, maxScrollPct }: PageExitedInput): void => {
  amplitude.track("page_exited", {
    page_name: getPageNameFromPath(pagePath),
    time_on_page_seconds: timeOnPageSeconds,
    max_scroll_pct: maxScrollPct,
  });
};
