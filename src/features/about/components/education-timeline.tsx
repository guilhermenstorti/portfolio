import { useTranslation } from 'react-i18next';

interface EducationMilestone {
  readonly year: string;
  readonly titleKey: string;
  readonly institutionKey: string;
  readonly degreeTypeKey: string;
  readonly logoSlug: string;
}

const EDUCATION_MILESTONES: readonly EducationMilestone[] = [
  {
    year: "2020",
    titleKey: "edu1Title",
    institutionKey: "edu1Institution",
    degreeTypeKey: "degreeGraduacao",
    logoSlug: "uem",
  },
  {
    year: "2020",
    titleKey: "edu2Title",
    institutionKey: "edu2Institution",
    degreeTypeKey: "degreeCertificacao",
    logoSlug: "pm3",
  },
  {
    year: "2022",
    titleKey: "edu3Title",
    institutionKey: "edu3Institution",
    degreeTypeKey: "degreeMba",
    logoSlug: "usp",
  },
  {
    year: "2024",
    titleKey: "edu4Title",
    institutionKey: "edu4Institution",
    degreeTypeKey: "degreeCertificacao",
    logoSlug: "pm3",
  },
  {
    year: "2025",
    titleKey: "edu5Title",
    institutionKey: "edu5Institution",
    degreeTypeKey: "degreePosgrado",
    logoSlug: "mit",
  },
  {
    year: "2026",
    titleKey: "edu6Title",
    institutionKey: "edu6Institution",
    degreeTypeKey: "degreeCertificacao",
    logoSlug: "branas",
  },
];

export const EducationTimeline = () => {
  const { t } = useTranslation('about');

  return (
    <ol className="mt-6">
      {EDUCATION_MILESTONES.map((milestone, index) => (
        <li key={`${milestone.year}-${milestone.titleKey}`} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background" />
            {index < EDUCATION_MILESTONES.length - 1 && (
              <span className="w-px flex-1 bg-border" />
            )}
          </div>
          <div className={`flex-1 ${index < EDUCATION_MILESTONES.length - 1 ? "pb-8" : ""}`}>
            <p className="font-mono text-xs uppercase tracking-wide text-dim">
              {milestone.year} · {t(milestone.degreeTypeKey)}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <img
                src={`/portfolio/assets/img/logos/education/${milestone.logoSlug}.png`}
                alt={t(milestone.institutionKey)}
                className="h-9 w-9 shrink-0 rounded object-contain"
              />
              <div>
                <p className="font-semibold text-foreground">{t(milestone.titleKey)}</p>
                <p className="text-sm text-muted">{t(milestone.institutionKey)}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};
