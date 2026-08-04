interface EducationMilestone {
  readonly year: string;
  readonly title: string;
  readonly degreeType: string;
  readonly institution: string;
  readonly logoSlug: string;
}

const EDUCATION_MILESTONES: readonly EducationMilestone[] = [
  {
    year: "2020",
    title: "Engenharia de Produção",
    degreeType: "Graduação",
    institution: "Universidade Estadual de Maringá",
    logoSlug: "uem",
  },
  {
    year: "2020",
    title: "Product Management",
    degreeType: "Certificação",
    institution: "PM3",
    logoSlug: "pm3",
  },
  {
    year: "2022",
    title: "Digital Business",
    degreeType: "MBA",
    institution: "Universidade de São Paulo",
    logoSlug: "usp",
  },
  {
    year: "2024",
    title: "Product Analytics",
    degreeType: "Certificação",
    institution: "PM3",
    logoSlug: "pm3",
  },
  {
    year: "2025",
    title: "Generative AI",
    degreeType: "Pós-graduação profissional",
    institution: "Massachusetts Institute of Technology",
    logoSlug: "mit",
  },
];

export const EducationTimeline = () => (
  <ol className="mt-6">
    {EDUCATION_MILESTONES.map((milestone, index) => (
      <li key={`${milestone.year}-${milestone.title}`} className="flex gap-4">
        <div className="flex flex-col items-center">
          <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background" />
          {index < EDUCATION_MILESTONES.length - 1 && (
            <span className="w-px flex-1 bg-border" />
          )}
        </div>
        <div className={`flex-1 ${index < EDUCATION_MILESTONES.length - 1 ? "pb-8" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-wide text-dim">
            {milestone.year} · {milestone.degreeType}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <img
              src={`/portfolio/assets/img/logos/education/${milestone.logoSlug}.svg`}
              alt={milestone.institution}
              className="h-9 w-9 shrink-0 rounded border border-border-soft object-contain"
            />
            <div>
              <p className="font-semibold text-foreground">{milestone.title}</p>
              <p className="text-sm text-muted">{milestone.institution}</p>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ol>
);
