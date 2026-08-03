import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/features/hero/components/hero-section";
import { QuickScanSection } from "@/features/quick-scan/components/quick-scan-section";
import { CompaniesServedSection } from "@/features/companies-served/components/companies-served-section";
import { CaseCardsSection } from "@/features/case-cards/components/case-cards-section";
import { AboutSection } from "@/features/about/components/about-section";
import { FinalCtaSection } from "@/features/final-cta/components/final-cta-section";

const HOME_TITLE =
  "Guilherme Navakoski Storti — Product Manager Senior | AI · Dados · Estratégia";
const HOME_DESCRIPTION =
  "PM Senior com 6+ anos em produtos digitais. Experiência em AI, analytics e estratégia. Cases com impacto mensurável.";

export const HomePage = () => {
  useDocumentMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION });

  return (
    <>
      <Header variant="home" />
      <main>
        <HeroSection />
        <QuickScanSection />
        <CompaniesServedSection />
        <CaseCardsSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};
