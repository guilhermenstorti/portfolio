import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: CONTACT_LINKS.linkedin },
  { label: "Email", href: MAILTO_EMAIL_LINK },
  { label: "GitHub", href: CONTACT_LINKS.github },
  { label: "WhatsApp", href: CONTACT_LINKS.whatsapp },
];

export const Footer = () => (
  <footer className="bg-ink px-6 py-10 text-center text-white">
    <nav className="flex flex-wrap justify-center gap-6">
      {FOOTER_LINKS.map((link) => (
        <a key={link.label} href={link.href} className="text-sm hover:text-white/70">
          {link.label}
        </a>
      ))}
    </nav>
    <p className="mt-6 text-sm text-gray-400">
      © 2025 Guilherme Storti. Feito com café e obsessão por produto.
    </p>
  </footer>
);
