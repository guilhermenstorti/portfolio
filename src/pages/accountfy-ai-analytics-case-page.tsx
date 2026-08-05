import { useLanguage } from '@/i18n/hooks/useLanguage';
import { CaseStudyLayout } from "@/features/case-study/components/case-study-layout";
import { ACCOUNTFY_AI_ANALYTICS_DATA_PT } from "@/features/case-study/data/accountfy-ai-analytics-data";
import { ACCOUNTFY_AI_ANALYTICS_DATA_EN } from "@/features/case-study/data/accountfy-ai-analytics-data-en";

export const AccountfyAiAnalyticsCasePage = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? ACCOUNTFY_AI_ANALYTICS_DATA_EN : ACCOUNTFY_AI_ANALYTICS_DATA_PT;
  return <CaseStudyLayout data={data} />;
};
