import type { CaseCardData } from "@/features/case-cards/types";

export const CASE_CARDS: readonly CaseCardData[] = [
  {
    badgeKey: "mognoBadge",
    titleKey: "mognoTitle",
    subtitleKey: "mognoSubtitle",
    descriptionKey: "mognoDescription",
    resultKey: "mognoResult",
    linkTo: "/cases/mogno-ai",
  },
  {
    badgeKey: "accountfyAiBadge",
    titleKey: "accountfyAiTitle",
    subtitleKey: "accountfyAiSubtitle",
    descriptionKey: "accountfyAiDescription",
    resultKey: "accountfyAiResult",
    linkTo: "/cases/accountfy-ai-analytics",
  },
  {
    badgeKey: "accountfyFpaBadge",
    titleKey: "accountfyFpaTitle",
    subtitleKey: "accountfyFpaSubtitle",
    descriptionKey: "accountfyFpaDescription",
    resultKey: "accountfyFpaResult",
    linkTo: "/cases/accountfy-fpa",
  },
  {
    badgeKey: "euphoriaBadge",
    titleKey: "euphoriaTitle",
    subtitleKey: "euphoriaSubtitle",
    descriptionKey: "euphoriaDescription",
    resultKey: "euphoriaResult",
    linkTo: "/cases/euphoria-bi",
  },
];
