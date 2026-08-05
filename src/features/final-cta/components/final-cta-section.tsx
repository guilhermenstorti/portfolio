import { useTranslation } from 'react-i18next';
import { CtaSection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MailIcon } from "@/components/ui/icons";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const FinalCtaSection = () => {
  const { t } = useTranslation('finalCta');

  return (
    <CtaSection
      title={t('title')}
      text={t('text')}
    >
      <Button
        href={CONTACT_LINKS.scheduleCall}
        label={t('scheduleCall')}
        icon={<CalendarIcon className="h-4 w-4" />}
        variant="primary"
        target="_blank"
        className="shine-cta relative overflow-hidden"
      />
      <Button
        href={MAILTO_EMAIL_LINK}
        label={t('sendEmail')}
        icon={<MailIcon className="h-4 w-4" />}
        variant="secondary"
      />
    </CtaSection>
  );
};
