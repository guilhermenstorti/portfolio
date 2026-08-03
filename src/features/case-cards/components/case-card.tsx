import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { ResultHighlight } from "@/components/ui/result-highlight";
import { RouteButton } from "@/components/ui/route-button";
import type { CaseCardData } from "@/features/case-cards/types";

type CardAccentStyle = CSSProperties & { "--card-accent-color": string };

interface CaseCardProps {
  readonly data: CaseCardData;
}

export const CaseCard = ({ data }: CaseCardProps) => {
  const accentStyle: CardAccentStyle = { "--card-accent-color": data.badgeColor };

  return (
    <article
      style={accentStyle}
      className="case-card flex flex-col gap-4 rounded-xl border-2 border-border bg-white p-6"
    >
      <Badge label={data.badgeLabel} color={data.badgeColor} />
      <h3 className="text-xl font-bold text-ink">{data.title}</h3>
      <p className="text-sm font-medium text-ink-light">{data.subtitle}</p>
      <p className="text-ink-light">{data.description}</p>
      <ResultHighlight label="RESULTADO" value={data.resultValue} />
      <RouteButton to={data.linkTo} label="Ler o case completo →" variant="outline" />
    </article>
  );
};
