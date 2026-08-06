import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { getButtonClassName } from "@/components/ui/button-styles";
import { CalendarIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Toast } from "@/components/ui/toast";
import { CONTACT_LINKS } from "@/lib/contact-links";
import { useToast } from "@/hooks/use-toast";
import { useSectionTracking } from "@/hooks/use-section-tracking";
import { trackCtaClicked } from "@/lib/analytics";
import { QuickInfoBar } from "@/features/hero/components/quick-info-bar";
import { ProfileAvatar } from "@/features/hero/components/profile-avatar";

const CTA_LOCATION = "hero";

export const HeroSection = () => {
  const { t } = useTranslation('hero');
  const { message, isVisible, showToast, hideToast } = useToast();
  const sectionRef = useSectionTracking<HTMLElement>("hero");

  return (
    <section ref={sectionRef} className="px-12 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <ProfileAvatar
          src="/portfolio/assets/img/logos/gns.png"
          alt={t('name')}
          onFlipComplete={() => showToast(t('coinFlipMessage'))}
        />
        <p className="mt-6 text-sm text-faint">
          {t('subtitle')}
        </p>
        <h1 className="mt-4 text-[clamp(40px,5.5vw,68px)] leading-[1.02] tracking-[-0.02em] text-foreground">
          {t('name')}
        </h1>
        <p className="mt-2 text-[22px] font-medium text-accent">{t('title')}</p>
        <p className="mx-auto mt-6 max-w-2xl text-muted">
          {t('description')}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={CONTACT_LINKS.scheduleCall}
            label={t('scheduleCall')}
            icon={<CalendarIcon className="h-4 w-4" />}
            variant="primary"
            target="_blank"
            className="shine-cta relative overflow-hidden"
            onClick={() => trackCtaClicked({ ctaType: "schedule", ctaLocation: CTA_LOCATION })}
          />
          <AnchorScrollLink
            targetId="cases"
            label={t('seeCases')}
            className={getButtonClassName("secondary")}
            onClick={() => trackCtaClicked({ ctaType: "cases_anchor" })}
          />
        </div>
        <QuickInfoBar />
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            href={CONTACT_LINKS.linkedin}
            label={t('linkedin')}
            icon={<LinkedinIcon className="h-4 w-4" />}
            variant="secondary"
            target="_blank"
            onClick={() => trackCtaClicked({ ctaType: "linkedin", ctaLocation: CTA_LOCATION })}
          />
          <Button
            href={CONTACT_LINKS.github}
            label={t('github')}
            icon={<GithubIcon className="h-4 w-4" />}
            variant="secondary"
            target="_blank"
            onClick={() => trackCtaClicked({ ctaType: "github", ctaLocation: CTA_LOCATION })}
          />
        </div>
      </div>
      <Toast message={message} isVisible={isVisible} onDismiss={hideToast} />
    </section>
  );
};
