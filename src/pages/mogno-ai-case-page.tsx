import { useLanguage } from '@/i18n/hooks/useLanguage';
import { CaseStudyLayout } from "@/features/case-study/components/case-study-layout";
import { MOGNO_AI_DATA_PT } from "@/features/case-study/data/mogno-ai-data";
import { MOGNO_AI_DATA_EN } from "@/features/case-study/data/mogno-ai-data-en";

export const MognoAiCasePage = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? MOGNO_AI_DATA_EN : MOGNO_AI_DATA_PT;
  return <CaseStudyLayout data={data} />;
};
