import { CtaSection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const CaseCtaSection = () => (
  <CtaSection
    title="Quer saber mais sobre esse case?"
    text="Cada projeto tem camadas que não cabem aqui. Se quiser ir mais fundo em metodologia, decisões ou learnings, é só agendar."
  >
    <Button
      href={CONTACT_LINKS.scheduleCall}
      label="Agendar conversa"
      variant="primary"
      target="_blank"
    />
    <Button href={MAILTO_EMAIL_LINK} label="Enviar email" variant="secondary" />
  </CtaSection>
);
