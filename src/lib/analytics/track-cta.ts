import * as amplitude from "@amplitude/analytics-browser";
import type { CtaType } from "@/lib/analytics/types";

interface CtaClickedInput {
  readonly ctaType: CtaType;
  readonly ctaLocation?: string;
}

export const trackCtaClicked = ({ ctaType, ctaLocation }: CtaClickedInput): void => {
  const properties = ctaLocation ? { cta_location: ctaLocation } : undefined;
  amplitude.track(`cta_${ctaType}_clicked`, properties);
};
