import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { CalendarIcon, DownloadIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK, getCvLink } from "@/lib/contact-links";
import { trackCtaClicked, trackQuickScanActionClicked } from "@/lib/analytics";

const CTA_LOCATION = "quick_scan";

const trackQuickScanCta = (ctaType: "schedule" | "email" | "linkedin" | "cv_download", action: "schedule" | "cv_download" | "linkedin" | "email"): void => {
  trackCtaClicked({ ctaType, ctaLocation: CTA_LOCATION });
  trackQuickScanActionClicked(action);
};

export const QuickScanActions = () => {
  const { t } = useTranslation('quickScan');
  const { i18n } = useTranslation();
  const cvLink = getCvLink(i18n.language);

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button
        href={CONTACT_LINKS.scheduleCall}
        label={t('scheduleCall')}
        icon={<CalendarIcon className="h-4 w-4" />}
        variant="primary"
        target="_blank"
        className="shine-cta relative overflow-hidden"
        onClick={() => trackQuickScanCta("schedule", "schedule")}
      />
      <Button
        href={cvLink}
        label={t('downloadCV')}
        icon={<DownloadIcon className="h-4 w-4" />}
        variant="secondary"
        target="_blank"
        onClick={() => trackQuickScanCta("cv_download", "cv_download")}
      />
      <Button
        href={CONTACT_LINKS.linkedin}
        label="LinkedIn"
        icon={<LinkedinIcon className="h-4 w-4" />}
        variant="secondary"
        target="_blank"
        onClick={() => trackQuickScanCta("linkedin", "linkedin")}
      />
      <Button
        href={MAILTO_EMAIL_LINK}
        label={t('directEmail', { defaultValue: 'Direct email' })}
        icon={<MailIcon className="h-4 w-4" />}
        variant="secondary"
        onClick={() => trackQuickScanCta("email", "email")}
      />
    </div>
  );
};
