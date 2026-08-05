import { useTranslation } from 'react-i18next';
import { Tag } from "@/components/ui/tag";

interface ExpertiseCategory {
  readonly categoryKey: string;
  readonly skills: readonly string[];
}

const EXPERTISE_CATEGORIES: readonly ExpertiseCategory[] = [
  {
    categoryKey: "skillsProduct",
    skills: [
      "Product Discovery",
      "Product Strategy",
      "skillRoadmapPrioritization",
      "Stakeholder Management",
      "OKR",
      "Go-to-Market",
      "User Stories",
    ],
  },
  {
    categoryKey: "skillsData",
    skills: [
      "SQL",
      "PowerBI",
      "Amplitude",
      "Google Analytics",
      "Data Warehouse",
      "ETL",
      "Data Storytelling",
      "skillProductMetrics",
    ],
  },
  {
    categoryKey: "skillsMethodologies",
    skills: [
      "SCRUM",
      "Kanban",
      "Design Sprint",
      "Jobs to be Done",
      "RICE",
      "Continuous Discovery",
      "skillExperimentation",
      "Double Diamond",
      "A/B Testing",
    ],
  },
  {
    categoryKey: "skillsTools",
    skills: [
      "Jira",
      "Miro",
      "Figma",
      "Confluence",
      "Notion",
      "Adobe XD",
      "Jenkins",
      "Git",
      "Pentaho",
      "AI Tech",
    ],
  },
];

const TRANSLATABLE_SKILL_KEYS = new Set([
  "skillRoadmapPrioritization",
  "skillProductMetrics",
  "skillExperimentation",
]);

export const ExpertiseTags = () => {
  const { t } = useTranslation('about');

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {EXPERTISE_CATEGORIES.map((group) => (
        <div key={group.categoryKey}>
          <p className="font-mono text-xs uppercase tracking-wide text-dim">{t(group.categoryKey)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Tag key={skill} label={TRANSLATABLE_SKILL_KEYS.has(skill) ? t(skill) : skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
