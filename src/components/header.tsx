import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { LanguageSelector } from "@/components/ui/language-selector";
import { CONTACT_LINKS } from "@/lib/contact-links";
import { trackCaseBackClicked, trackCtaClicked, trackHeaderNavClicked, trackLogoClicked } from "@/lib/analytics";
import { getCaseNameFromPath, getPageNameFromPath } from "@/lib/analytics/page-name";
import { getScrollDepthPct } from "@/lib/analytics/scroll";

interface HeaderProps {
  readonly variant: "home" | "case";
}

const NAV_LINK_CLASSES = "text-sm font-medium text-muted hover:text-accent";

const HomeNav = () => {
  const { t } = useTranslation('header');
  return (
    <nav className="flex items-center gap-6">
      <AnchorScrollLink
        targetId="cases"
        label={t('cases')}
        className={NAV_LINK_CLASSES}
        onClick={() => trackHeaderNavClicked("cases")}
      />
      <AnchorScrollLink
        targetId="about"
        label={t('about')}
        className={NAV_LINK_CLASSES}
        onClick={() => trackHeaderNavClicked("about")}
      />
      <Button
        href={CONTACT_LINKS.scheduleCall}
        label={t('talk')}
        variant="primary"
        size="nav"
        target="_blank"
        className="header-cta-attention"
        onClick={() => {
          trackHeaderNavClicked("talk");
          trackCtaClicked({ ctaType: "schedule", ctaLocation: "header" });
        }}
      />
      <LanguageSelector />
    </nav>
  );
};

const CaseNav = () => {
  const { t } = useTranslation('header');
  const location = useLocation();

  const handleBackClick = () => {
    const caseName = getCaseNameFromPath(location.pathname);
    if (caseName) {
      trackCaseBackClicked({ caseName, scrollDepthPct: getScrollDepthPct() });
    }
  };

  return (
    <div className="flex items-center gap-6">
      <Link to="/" className={NAV_LINK_CLASSES} onClick={handleBackClick}>
        {t('back')}
      </Link>
      <LanguageSelector />
    </div>
  );
};

export const Header = ({ variant }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-nav backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-12 py-4">
        <Link
          to="/"
          className="font-heading text-xl font-semibold text-foreground"
          onClick={() => trackLogoClicked(getPageNameFromPath(location.pathname))}
        >
          GN
        </Link>
        {variant === "home" ? <HomeNav /> : <CaseNav />}
      </div>
    </header>
  );
};
