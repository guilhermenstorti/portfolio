import * as amplitude from "@amplitude/analytics-browser";
import { getDeviceType, isMobileDevice } from "@/lib/analytics/device";
import { getUtmParams } from "@/lib/analytics/utm";

const SESSION_STARTED_FLAG = "amplitude_session_started";

export const trackSessionStarted = (): void => {
  if (sessionStorage.getItem(SESSION_STARTED_FLAG)) {
    return;
  }
  sessionStorage.setItem(SESSION_STARTED_FLAG, "1");

  const utm = getUtmParams();
  amplitude.track("session_started", {
    referrer: document.referrer || null,
    utm_source: utm.utmSource,
    utm_medium: utm.utmMedium,
    utm_campaign: utm.utmCampaign,
    device_type: getDeviceType(),
    is_mobile: isMobileDevice(),
  });
};
