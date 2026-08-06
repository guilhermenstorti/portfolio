import * as amplitude from "@amplitude/analytics-browser";
import type { SectionName } from "@/lib/analytics/types";
import { getSecondsSinceSessionStart } from "@/lib/analytics/session-timing";
import { getScrollDepthPct } from "@/lib/analytics/scroll";

export const trackSectionViewed = (sectionName: SectionName): void => {
  amplitude.track(`section_${sectionName}_viewed`, {
    time_since_session_start_seconds: getSecondsSinceSessionStart(),
    scroll_depth_at_view_pct: getScrollDepthPct(),
  });
};
