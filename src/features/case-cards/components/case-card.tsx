import { Badge } from "@/components/ui/badge";
import { ResultHighlight } from "@/components/ui/result-highlight";
import { RouteButton } from "@/components/ui/route-button";
import type { CaseCardData } from "@/features/case-cards/types";

interface CaseCardProps {
  readonly data: CaseCardData;
}

export const CaseCard = ({ data }: CaseCardProps) => (
  <article className="case-card flex flex-col gap-4 rounded-card border border-border bg-card p-7">
    <Badge label={data.badgeLabel} variant="badge" />
    <h3 className="text-xl text-foreground">{data.title}</h3>
    <p className="text-sm font-medium text-muted">{data.subtitle}</p>
    <p className="text-muted">{data.description}</p>
    <ResultHighlight label="RESULTADO" value={data.resultValue} />
    <div className="mt-auto">
      <RouteButton to={data.linkTo} label="Ler o case completo →" variant="secondary" />
    </div>
  </article>
);
