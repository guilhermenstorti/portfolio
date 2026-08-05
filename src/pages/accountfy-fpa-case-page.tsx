import { useLanguage } from '@/i18n/hooks/useLanguage';
import { CaseStudyLayout } from "@/features/case-study/components/case-study-layout";
import { CapterraBadges } from "@/features/case-study/components/capterra-badges";
import { ACCOUNTFY_FPA_DATA_PT } from "@/features/case-study/data/accountfy-fpa-data";
import { ACCOUNTFY_FPA_DATA_EN } from "@/features/case-study/data/accountfy-fpa-data-en";

export const AccountfyFpaCasePage = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? ACCOUNTFY_FPA_DATA_EN : ACCOUNTFY_FPA_DATA_PT;
  return <CaseStudyLayout data={data} extraResultsContent={<CapterraBadges />} />;
};
