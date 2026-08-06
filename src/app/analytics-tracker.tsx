import { useAmplitudePageView } from "@/hooks/use-amplitude-page-view";
import { usePageExitTracking } from "@/hooks/use-page-exit-tracking";

export const AnalyticsTracker = () => {
  useAmplitudePageView();
  usePageExitTracking();
  return null;
};
