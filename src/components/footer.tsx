import { useTranslation } from 'react-i18next';
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";
import { trackCtaClicked } from "@/lib/analytics";
import type { CtaType } from "@/lib/analytics/types";

const CTA_LOCATION = "footer";

const getFooterLinks = (t: (key: string) => string): ReadonlyArray<{ label: string; href: string; ctaType: CtaType }> => [
  { label: t('linkedin'), href: CONTACT_LINKS.linkedin, ctaType: "linkedin" },
  { label: t('email'), href: MAILTO_EMAIL_LINK, ctaType: "email" },
  { label: t('github'), href: CONTACT_LINKS.github, ctaType: "github" },
  { label: t('whatsapp'), href: CONTACT_LINKS.whatsapp, ctaType: "whatsapp" },
];

export const Footer = () => {
  const { t: footerT } = useTranslation('footer');
  const { t: commonT } = useTranslation('common');
  const footerLinks = getFooterLinks(footerT);

  return (
    <footer className="border-t border-border-soft px-12 py-10 text-center">
      <nav className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted hover:text-accent"
            onClick={() => trackCtaClicked({ ctaType: link.ctaType, ctaLocation: CTA_LOCATION })}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mt-6 text-sm text-dim">
        {commonT('copyright')}
      </p>
    </footer>
  );
};
