import * as amplitude from "@amplitude/analytics-browser";
import type { CaseName } from "@/lib/analytics/types";

interface CaseCardClickedInput {
  readonly caseName: CaseName;
  readonly cardPosition: number;
}

interface CasePageViewedInput {
  readonly caseName: CaseName;
  readonly referrerPage: string;
}

interface CaseScrollMilestoneInput {
  readonly caseName: CaseName;
  readonly milestonePct: number;
}

interface CaseBackClickedInput {
  readonly caseName: CaseName;
  readonly scrollDepthPct: number;
}

export const trackCaseCardClicked = ({ caseName, cardPosition }: CaseCardClickedInput): void => {
  amplitude.track("case_card_clicked", { case_name: caseName, card_position: cardPosition });
};

export const trackCasePageViewed = ({ caseName, referrerPage }: CasePageViewedInput): void => {
  amplitude.track("case_page_viewed", { case_name: caseName, referrer_page: referrerPage });
};

export const trackCaseScrollMilestone = ({ caseName, milestonePct }: CaseScrollMilestoneInput): void => {
  amplitude.track("case_scroll_milestone", { case_name: caseName, milestone_pct: milestonePct });
};

export const trackCaseBackClicked = ({ caseName, scrollDepthPct }: CaseBackClickedInput): void => {
  amplitude.track("case_back_clicked", { case_name: caseName, scroll_depth_pct: scrollDepthPct });
};
