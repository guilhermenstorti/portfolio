import * as amplitude from "@amplitude/analytics-browser";

let isInitialized = false;

export const initializeAmplitude = (): void => {
  if (isInitialized) {
    return;
  }

  const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY;
  if (!apiKey) {
    console.warn("[analytics] VITE_AMPLITUDE_API_KEY is not set — Amplitude tracking is disabled.");
    return;
  }

  amplitude.init(apiKey, {
    defaultTracking: {
      sessions: true,
      pageViews: false,
      formInteractions: false,
      fileDownloads: true,
    },
    autocapture: false,
  });

  isInitialized = true;
};
