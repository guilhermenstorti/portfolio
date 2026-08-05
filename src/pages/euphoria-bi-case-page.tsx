import { useLanguage } from '@/i18n/hooks/useLanguage';
import { CaseStudyLayout } from "@/features/case-study/components/case-study-layout";
import { EUPHORIA_BI_DATA_PT } from "@/features/case-study/data/euphoria-bi-data";
import { EUPHORIA_BI_DATA_EN } from "@/features/case-study/data/euphoria-bi-data-en";

export const EuphoriaBiCasePage = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? EUPHORIA_BI_DATA_EN : EUPHORIA_BI_DATA_PT;
  return <CaseStudyLayout data={data} />;
};
