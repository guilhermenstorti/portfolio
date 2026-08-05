import { useTranslation } from 'react-i18next';
import type { ReactNode } from "react";
import { CONTACT_LINKS } from "@/lib/contact-links";

interface CommunityActivity {
  readonly titleKey: string;
  readonly descriptionNode: ReactNode;
}

const ActivityLink = ({ href, children }: { readonly href: string; readonly children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-2 hover:text-accent"
  >
    {children}
  </a>
);

export const CommunityActivities = () => {
  const { t } = useTranslation('about');

  const COMMUNITY_ACTIVITIES: readonly CommunityActivity[] = [
    {
      titleKey: "mentoriaTitle",
      descriptionNode: (
        <>
          {t('mentoriaValue').split('Evoa')[0]}
          <ActivityLink href="https://evoa.com.br">Evoa</ActivityLink>
          {t('mentoriaValue').split('Evoa')[1]?.slice(0, -1)}
        </>
      ),
    },
    {
      titleKey: "communityTitle",
      descriptionNode: (
        <>
          {t('communityValue').split('Codaqui')[0]}
          <ActivityLink href="https://codaqui.dev">Codaqui</ActivityLink>
          {t('communityValue').split('Codaqui')[1]?.slice(0, -1)}
        </>
      ),
    },
    {
      titleKey: "teamDevTitle",
      descriptionNode: t('teamDevValue'),
    },
    {
      titleKey: "talksTitle",
      descriptionNode: (
        <>
          {t('talksValue').split('DevParaná')[0]}
          <ActivityLink href="https://devpr.org/">DevParaná</ActivityLink>
          {t('talksValue').split('DevParaná')[1]?.slice(0, -1)}
        </>
      ),
    },
    {
      titleKey: "writingTitle",
      descriptionNode: (
        <>
          {t('writingValue').split('The Product Path')[0]}
          <ActivityLink href={CONTACT_LINKS.substack}>The Product Path</ActivityLink>
          {t('writingValue').split('The Product Path')[1]?.slice(0, -1)}
        </>
      ),
    },
  ];

  return (
    <div className="rounded-r-lg border-l-4 border-accent bg-card px-6 py-5">
      <p className="font-mono text-xs uppercase tracking-wide text-dim">{t('beyondOfficeTitle')}</p>
      <ul className="mt-4 space-y-3">
        {COMMUNITY_ACTIVITIES.map((activity) => (
          <li key={activity.titleKey} className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-semibold text-foreground">{t(activity.titleKey)}</span>
            <span className="text-muted">{activity.descriptionNode}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
