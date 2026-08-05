import type { CaseStudyData } from "@/features/case-study/types";

export const ACCOUNTFY_AI_ANALYTICS_DATA_EN: CaseStudyData = {
  seoTitle: "Case: Accountfy AI & Analytics — Growth via AI | Guilherme Storti",
  badgeEmoji: "🚀",
  badgeLabel: "Growth & AI",
  title: "Accountfy: AI & Analytics",
  subtitle:
    "From basic, disconnected chatbots to a cohesive AI layer that reduced support tickets by 22% and grew revenue by 11% monthly.",
  heroGradientFrom: "#8b5cf6",
  heroGradientTo: "#a78bfa",
  metadata: {
    period: "Dec 2024–Oct 2025",
    role: "Product Manager",
    focus: "Product Strategy, AI/ML, Metrics",
    status: "Results consolidated",
  },
  contextParagraphs: [
    "Accountfy is a B2B SaaS fintech for financial management, backed by Redpoint Ventures, with 350+ customers across 11 countries. When I took over the AI/Innovation and Analytics squads, the product had \"AI features\", but they were actually very basic chatbots, disconnected from each other, with fragmented knowledge bases and inconsistent behavior.",
    "For the user, it was confusing. For the CS team, it was a ticket generator. For leadership, it was investment with no clear return.",
  ],
  problems: [
    {
      lead: "Rudimentary chatbots",
      text: "that didn't share context and worked in isolation.",
    },
    {
      lead: "Fragmented UX.",
      text: "Each chatbot looked like a different product.",
    },
    {
      lead: "Missing metrics.",
      text: "Nobody knew which features were being used, by whom, and how often.",
    },
    {
      lead: "Revenue pressure.",
      text: "The company needed AI to generate upsell, but nobody had clarity on how.",
    },
  ],
  workBlocks: [
    {
      subheading: "Discovery and diagnosis",
      paragraphs: [
        "I analyzed raw usage data, conducted customer interviews, and mapped the user journey with AI features. The diagnosis: the problem wasn't AI itself. It was the experience around it.",
      ],
    },
    {
      subheading: "Cohesion strategy",
      paragraphs: [
        "I redesigned the information architecture to create a unified experience. Instead of isolated chatbots, users now had an intelligence layer integrated into their workflow.",
        "I structured a unified metrics framework and helped other PMs define strategic metrics and create squad dashboards.",
      ],
    },
    {
      subheading: "Execution",
      paragraphs: [
        "The AI products were selected for acceleration by Google for Startups. I contributed to international expansion (LATAM and USA).",
      ],
    },
  ],
  results: [
    { lead: "-22% monthly in CS tickets.", text: "" },
    { lead: "+11% monthly revenue via upsell.", text: "" },
    {
      lead: "Increased interaction accuracy",
      text: "and reduced time users spent in workflows.",
    },
    {
      lead: "Products accelerated by Google for Startups.",
      text: "External recognition of the strategy.",
    },
  ],
  learnings: [
    {
      title: "1. Cohesion is worth more than features.",
      text: "Having 10 disconnected chatbots is worse than 3 well-integrated ones. Value is in the complete experience, not in quantity.",
    },
    {
      title: "2. AI must be invisible to be useful.",
      text: "The best compliment an AI product can get is users not noticing they're using AI. They just notice work got easier.",
    },
    {
      title: "3. In AI, the PM needs technical fluency.",
      text: "You don't need to code the model. But you need to understand enough to ask the right questions and evaluate trade-offs without 100% dependence on engineering.",
    },
  ],
};
