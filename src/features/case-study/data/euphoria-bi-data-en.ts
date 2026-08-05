import type { CaseStudyData } from "@/features/case-study/types";

export const EUPHORIA_BI_DATA_EN: CaseStudyData = {
  seoTitle: "Case: Euphoria BI — Data Foundation | Guilherme Storti",
  badgeEmoji: "📊",
  badgeLabel: "Data & Foundation",
  title: "Euphoria: BI Foundation",
  subtitle:
    "How I built the Business Intelligence function for a holding with 10+ companies, transforming scattered data into strategic decisions, and reducing delinquency by 32.5% during the pandemic.",
  heroGradientFrom: "#3b82f6",
  heroGradientTo: "#1e40af",
  metadata: {
    period: "Apr 2019–Dec 2020",
    role: "BI Analyst",
    focus: "Data Warehouse, ETL, Dashboards, Culture",
    status: "Foundation consolidated",
  },
  contextParagraphs: [
    "Grupo Euphoria was a holding with 10+ companies. Each unit had its own processes, spreadsheets, software, and truths about the numbers. There was no single source of truth. Decisions were made on intuition.",
    "When I joined, there was no BI function in the company. When I left, BI was a central area guiding executive decisions across multiple units.",
    "This case is different: it's not about digital product. It's about the foundation that made me the data-driven PM I am today.",
  ],
  problems: [
    {
      lead: "Fragmented data.",
      text: "Different tools and definitions in each group company.",
    },
    {
      lead: "No governance.",
      text: '"Revenue" meant different things to different departments.',
    },
    {
      lead: "Decisions in the dark.",
      text: "Leadership decided on experience, not data.",
    },
    {
      lead: "Pandemic.",
      text: "In 2020, the crisis amplified every existing problem.",
    },
  ],
  workBlocks: [
    {
      subheading: "Technical foundation",
      paragraphs: [
        "I designed centralized Data Warehouses, built ETL processes with Pentaho, standardized metric definitions, and structured databases with SQL and PostgreSQL.",
      ],
    },
    {
      subheading: "Visualization and storytelling",
      paragraphs: [
        "I created dashboards that told stories, not just showed numbers. Executive dashboards for leadership and operational dashboards for each area, using Pentaho, PowerBI, and web technologies.",
      ],
    },
    {
      subheading: "Cultural change",
      paragraphs: [
        "Convincing people who always decided on intuition to trust data doesn't happen with a presentation. It happens with small wins: a dashboard that saves 2 hours, a number that prevents a wrong decision.",
      ],
    },
  ],
  results: [
    {
      lead: "-32.5% in financial delinquency during the pandemic.",
      text: "",
    },
    {
      lead: "BI consolidated as central function",
      text: "of the organization.",
    },
    {
      lead: "Standardized data processes",
      text: "across multiple companies.",
    },
    {
      lead: "76% of targets achieved",
      text: "in strategic planning structured across 10 companies.",
    },
  ],
  learnings: [
    {
      title: "1. Data culture is a project, not a lecture.",
      text: "The first person who used a dashboard to make a better decision became my biggest evangelist. One win beats 10 presentations.",
    },
    {
      title: "2. Data without governance is worse than no data.",
      text: "A wrong number everyone trusts is more dangerous than no number at all.",
    },
    {
      title: "3. This experience defined who I am as a PM.",
      text: "Everything I do today (metrics, dashboards, data culture) was born here. It's not textbook theory. It's practice from scratch.",
    },
  ],
};
