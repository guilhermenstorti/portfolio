import type { ReactNode } from "react";
import { CONTACT_LINKS } from "@/lib/contact-links";

interface CommunityActivity {
  readonly title: string;
  readonly description: ReactNode;
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

const COMMUNITY_ACTIVITIES: readonly CommunityActivity[] = [
  {
    title: "Mentoria",
    description: (
      <>
        Startups early-stage na <ActivityLink href="https://evoa.com.br">Evoa</ActivityLink>.
      </>
    ),
  },
  {
    title: "Comunidade",
    description: (
      <>
        Contribuinte do <ActivityLink href="https://codaqui.dev">Codaqui</ActivityLink>.
      </>
    ),
  },
  {
    title: "Desenvolvimento de equipe",
    description: "Co-Fundador do Accountfy Product Talk.",
  },
  {
    title: "Palestras",
    description: (
      <>
        Meetups <ActivityLink href="https://devpr.org/">DevParaná</ActivityLink> e Maringá PowerBI.
      </>
    ),
  },
  {
    title: "Escrita",
    description: (
      <>
        Artigos sobre product management no{" "}
        <ActivityLink href={CONTACT_LINKS.substack}>The Product Path</ActivityLink>.
      </>
    ),
  },
];

export const CommunityActivities = () => (
  <div className="rounded-r-lg border-l-4 border-accent bg-card px-6 py-5">
    <p className="font-mono text-xs uppercase tracking-wide text-dim">Além do escritório</p>
    <ul className="mt-4 space-y-3">
      {COMMUNITY_ACTIVITIES.map((activity) => (
        <li key={activity.title} className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-semibold text-foreground">{activity.title}</span>
          <span className="text-muted">{activity.description}</span>
        </li>
      ))}
    </ul>
  </div>
);
