import { useTranslation } from 'react-i18next';
import { InsightBox } from "@/components/ui/insight-box";
import { ExpertiseTags } from "@/features/about/components/expertise-tags";
import { EducationTimeline } from "@/features/about/components/education-timeline";
import { CommunityActivities } from "@/features/about/components/community-activities";
import { useSectionTracking } from "@/hooks/use-section-tracking";

export const AboutSection = () => {
  const { t } = useTranslation('about');
  const sectionRef = useSectionTracking<HTMLElement>("about");

  return (
    <section id="about" ref={sectionRef} className="px-12 py-16">
      <div className="mx-auto max-w-[700px]">
        <h2 className="text-3xl text-foreground">{t('title')}</h2>
        <div className="mt-6 space-y-4 text-muted">
          {t('paragraphs', { returnObjects: true }).map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <InsightBox>
            {t('insightBox')}
          </InsightBox>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-foreground">{t('educationTitle')}</h3>
        <EducationTimeline />
      </div>

      <div className="mt-8">
        <CommunityActivities />
      </div>

        <ExpertiseTags />
      </div>
    </section>
  );
};
