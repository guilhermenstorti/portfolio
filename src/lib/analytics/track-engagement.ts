import * as amplitude from "@amplitude/analytics-browser";
import type { NavItem, QuickScanAction } from "@/lib/analytics/types";

interface CompanyLogoHoveredInput {
  readonly companyName: string;
  readonly hoverDurationMs: number;
}

export const trackHeaderNavClicked = (navItem: NavItem): void => {
  amplitude.track("header_nav_clicked", { nav_item: navItem });
};

export const trackLogoClicked = (fromPage: string): void => {
  amplitude.track("logo_clicked", { from_page: fromPage });
};

export const trackCompanyLogoHovered = ({ companyName, hoverDurationMs }: CompanyLogoHoveredInput): void => {
  amplitude.track("company_logo_hovered", { company_name: companyName, hover_duration_ms: hoverDurationMs });
};

export const trackQuickScanActionClicked = (action: QuickScanAction): void => {
  amplitude.track("quickscan_actions_clicked", { action });
};
