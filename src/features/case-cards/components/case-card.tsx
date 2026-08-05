import { useTranslation } from 'react-i18next';
import { Badge } from "@/components/ui/badge";
import { ResultHighlight } from "@/components/ui/result-highlight";
import { RouteButton } from "@/components/ui/route-button";
import type { CaseCardData } from "@/features/case-cards/types";

interface CaseCardProps {
  readonly data: CaseCardData;
}

export const CaseCard = ({ data }: CaseCardProps) => {
  const { t } = useTranslation('caseCards');

  return (
    <article className="case-card flex flex-col gap-4 rounded-card border border-border bg-card p-7">
      <Badge label={t(data.badgeKey)} variant="badge" />
      <h3 className="text-xl text-foreground">{t(data.titleKey)}</h3>
      <p className="text-sm font-medium text-muted">{t(data.subtitleKey)}</p>
      <p className="text-muted">{t(data.descriptionKey)}</p>
      <ResultHighlight label={t('resultLabel')} value={t(data.resultKey)} />
      <div className="mt-auto">
        <RouteButton to={data.linkTo} label={t('readFullCase')} variant="secondary" />
      </div>
    </article>
  );
};
