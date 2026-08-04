import { Tag } from "@/components/ui/tag";

interface ExpertiseCategory {
  readonly category: string;
  readonly skills: readonly string[];
}

const EXPERTISE_CATEGORIES: readonly ExpertiseCategory[] = [
  {
    category: "Produto",
    skills: [
      "Product Discovery",
      "Product Strategy",
      "Roadmap & Priorização",
      "Stakeholder Management",
      "OKR",
      "Go-to-Market",
      "User Stories",
    ],
  },
  {
    category: "Dados & Analytics",
    skills: [
      "SQL",
      "PowerBI",
      "Amplitude",
      "Google Analytics",
      "Data Warehouse",
      "ETL",
      "Data Storytelling",
      "Métricas de Produto",
    ],
  },
  {
    category: "Metodologias",
    skills: [
      "SCRUM",
      "Kanban",
      "Design Sprint",
      "Jobs to be Done",
      "RICE",
      "Continuous Discovery",
      "Experimentação",
      "Double Diamond",
    ],
  },
  {
    category: "Ferramentas",
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

export const ExpertiseTags = () => (
  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
    {EXPERTISE_CATEGORIES.map((group) => (
      <div key={group.category}>
        <p className="font-mono text-xs uppercase tracking-wide text-dim">{group.category}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
