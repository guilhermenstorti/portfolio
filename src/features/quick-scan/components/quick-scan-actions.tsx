import { Button } from "@/components/ui/button";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const QuickScanActions = () => (
  <div className="mt-10 flex flex-wrap gap-4">
    <Button
      href={CONTACT_LINKS.scheduleCall}
      label="Agendar uma conversa"
      variant="primary"
      target="_blank"
    />
    <Button href={CONTACT_LINKS.cvPdf} label="Baixar CV em PDF" variant="secondary" target="_blank" />
    <Button href={CONTACT_LINKS.linkedin} label="LinkedIn" variant="secondary" target="_blank" />
    <Button href={MAILTO_EMAIL_LINK} label="Email direto" variant="secondary" />
  </div>
);
