import type { ReactNode } from "react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseHero } from "@/features/case-study/components/case-hero";
import { CaseContextSection } from "@/features/case-study/components/case-context-section";
import { CaseProblemsSection } from "@/features/case-study/components/case-problems-section";
import { CaseWorkSection } from "@/features/case-study/components/case-work-section";
import { CaseResultsSection } from "@/features/case-study/components/case-results-section";
import { CaseLearningsSection } from "@/features/case-study/components/case-learnings-section";
import { CaseCtaSection } from "@/features/case-study/components/case-cta-section";
import type { CaseStudyData } from "@/features/case-study/types";

const CASE_META_DESCRIPTION =
  "Case real de gestão de produto: contexto, problema, abordagem, resultados e learnings. Por Guilherme Storti, PM Senior.";

interface CaseStudyLayoutProps {
  readonly data: CaseStudyData;
  readonly extraResultsContent?: ReactNode;
}

export const CaseStudyLayout = ({ data, extraResultsContent }: CaseStudyLayoutProps) => {
  useDocumentMeta({ title: data.seoTitle, description: CASE_META_DESCRIPTION });

  return (
    <>
      <Header variant="case" />
      <main>
        <CaseHero data={data} />
        <CaseContextSection paragraphs={data.contextParagraphs} />
        <CaseProblemsSection items={data.problems} />
        <CaseWorkSection blocks={data.workBlocks} />
        <CaseResultsSection items={data.results} />
        {extraResultsContent}
        <CaseLearningsSection items={data.learnings} />
        <CaseCtaSection />
      </main>
      <Footer />
    </>
  );
};
