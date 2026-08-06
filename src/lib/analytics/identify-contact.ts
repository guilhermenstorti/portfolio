import * as amplitude from "@amplitude/analytics-browser";

export const identifyContactFromToken = (token: string): void => {
  amplitude.setUserId(token);

  const identifyEvent = new amplitude.Identify();
  identifyEvent.setOnce("first_seen_date", new Date().toISOString());
  amplitude.identify(identifyEvent);

  amplitude.track("user_identified");
};
