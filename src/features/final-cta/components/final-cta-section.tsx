import { CtaSection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const FinalCtaSection = () => (
  <CtaSection
    title="Vamos conversar?"
    text="Se você está procurando um PM que navega ambiguidade, fala a língua de dados e entrega com ownership, eu adoraria ouvir sobre o desafio que você tem."
  >
    <Button
      href={CONTACT_LINKS.scheduleCall}
      label="📅 Agendar uma conversa de 15 min"
      variant="primary"
      target="_blank"
    />
    <Button href={MAILTO_EMAIL_LINK} label="✉️ Me mandar um email" variant="secondary" />
  </CtaSection>
);
