import { CaseStudyLayout } from "@/features/case-study/components/case-study-layout";
import { CapterraBadges } from "@/features/case-study/components/capterra-badges";
import { ACCOUNTFY_FPA_DATA } from "@/features/case-study/data/accountfy-fpa-data";

export const AccountfyFpaCasePage = () => (
  <CaseStudyLayout data={ACCOUNTFY_FPA_DATA} extraResultsContent={<CapterraBadges />} />
);
