import { useEffect } from "react";
import { initializeAmplitude, trackSessionStarted } from "@/lib/analytics";
import { useContactIdentification } from "@/hooks/use-contact-identification";

export const AnalyticsBootstrap = () => {
  useEffect(() => {
    initializeAmplitude();
    trackSessionStarted();
  }, []);

  useContactIdentification();

  return null;
};
