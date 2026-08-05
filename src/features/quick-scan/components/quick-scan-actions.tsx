import { Button } from "@/components/ui/button";
import { CalendarIcon, DownloadIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { CONTACT_LINKS, MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const QuickScanActions = () => (
  <div className="mt-10 flex flex-wrap gap-4">
    <Button
      href={CONTACT_LINKS.scheduleCall}
      label="Agendar uma conversa"
      icon={<CalendarIcon className="h-4 w-4" />}
      variant="primary"
      target="_blank"
      className="shine-cta relative overflow-hidden"
    />
    <Button
      href={CONTACT_LINKS.cvPdf}
      label="Baixar CV em PDF"
      icon={<DownloadIcon className="h-4 w-4" />}
      variant="secondary"
      target="_blank"
    />
    <Button
      href={CONTACT_LINKS.linkedin}
      label="LinkedIn"
      icon={<LinkedinIcon className="h-4 w-4" />}
      variant="secondary"
      target="_blank"
    />
    <Button
      href={MAILTO_EMAIL_LINK}
      label="Email direto"
      icon={<MailIcon className="h-4 w-4" />}
      variant="secondary"
    />
  </div>
);
