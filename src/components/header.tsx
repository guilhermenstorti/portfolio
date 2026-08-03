import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { CONTACT_LINKS } from "@/lib/contact-links";

interface HeaderProps {
  readonly variant: "home" | "case";
}

const NAV_LINK_CLASSES = "text-sm font-medium text-ink hover:text-primary";

const HomeNav = () => (
  <nav className="flex items-center gap-6">
    <AnchorScrollLink targetId="cases" label="Cases" className={NAV_LINK_CLASSES} />
    <AnchorScrollLink targetId="about" label="Sobre" className={NAV_LINK_CLASSES} />
    <Button href={CONTACT_LINKS.scheduleCall} label="Conversar" variant="primary" target="_blank" />
  </nav>
);

const CaseNav = () => (
  <Link to="/" className="text-sm font-medium text-ink hover:text-primary">
    ← Voltar
  </Link>
);

export const Header = ({ variant }: HeaderProps) => (
  <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <Link to="/" className="text-xl font-bold text-primary">
        GN
      </Link>
      {variant === "home" ? <HomeNav /> : <CaseNav />}
    </div>
  </header>
);
