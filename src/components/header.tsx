import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { CONTACT_LINKS } from "@/lib/contact-links";

interface HeaderProps {
  readonly variant: "home" | "case";
}

const NAV_LINK_CLASSES = "text-sm font-medium text-muted hover:text-accent";

const HomeNav = () => (
  <nav className="flex items-center gap-6">
    <AnchorScrollLink targetId="cases" label="Cases" className={NAV_LINK_CLASSES} />
    <AnchorScrollLink targetId="about" label="Sobre" className={NAV_LINK_CLASSES} />
    <Button
      href={CONTACT_LINKS.scheduleCall}
      label="Conversar"
      variant="primary"
      size="nav"
      target="_blank"
      className="header-cta-attention"
    />
  </nav>
);

const CaseNav = () => (
  <Link to="/" className={NAV_LINK_CLASSES}>
    ← Voltar
  </Link>
);

export const Header = ({ variant }: HeaderProps) => (
  <header className="sticky top-0 z-50 border-b border-border-soft bg-nav backdrop-blur">
    <div className="mx-auto flex max-w-content items-center justify-between px-12 py-4">
      <Link to="/" className="font-heading text-xl font-semibold text-foreground">
        GN
      </Link>
      {variant === "home" ? <HomeNav /> : <CaseNav />}
    </div>
  </header>
);
