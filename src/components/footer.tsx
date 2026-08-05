import { useTranslation } from 'react-i18next';
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

const getFooterLinks = (t: (key: string) => string) => [
  { label: t('linkedin'), href: CONTACT_LINKS.linkedin },
  { label: t('email'), href: MAILTO_EMAIL_LINK },
  { label: t('github'), href: CONTACT_LINKS.github },
  { label: t('whatsapp'), href: CONTACT_LINKS.whatsapp },
];

export const Footer = () => {
  const { t: footerT } = useTranslation('footer');
  const { t: commonT } = useTranslation('common');
  const footerLinks = getFooterLinks(footerT);

  return (
    <footer className="border-t border-border-soft px-12 py-10 text-center">
      <nav className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-muted hover:text-accent">
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
