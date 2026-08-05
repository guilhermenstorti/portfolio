import type { CaseStudyData } from "@/features/case-study/types";

export const MOGNO_AI_DATA_EN: CaseStudyData = {
  seoTitle: "Case: Mogno AI — From Zero to Launch | Guilherme Storti",
  badgeEmoji: "🚀",
  badgeLabel: "AI & Platform",
  title: "Mogno AI",
  subtitle:
    "From internal initiative to global product: how I structured the vision, discovery, and metrics for an AI product from day one, navigating technical uncertainty with fail fast and constant experimentation.",
  heroGradientFrom: "#8b5cf6",
  heroGradientTo: "#6d28d9",
  metadata: {
    period: "Oct 2025–Jul 2026",
    role: "Senior PM",
    focus: "Discovery, Metrics, Fail Fast, GTM",
    status: "Product in production",
  },
  contextParagraphs: [
    "Mogno AI had something promising: an AI initiative generating internal value that was selected for acceleration by Google for Startups. The potential was clear, but there was no product. No roadmap, no metrics, no monetization vision.",
    "My challenge was to structure a complete product operation from discovery to measurement, from positioning to internationalization, and do it fast, because the AI market doesn't wait.",
  ],
  problems: [
    {
      lead: "No defined metrics.",
      text: "We didn't know what to measure, or how to know if we were on the right track.",
    },
    {
      lead: "Incomplete discovery.",
      text: "There were business premises, but no validation with real users.",
    },
    {
      lead: "Technology evolving faster than product.",
      text: "Generative AI was changing week to week. The engineering teams were still learning how to work with this technology (and so was I).",
    },
    {
      lead: "Architectural uncertainty.",
      text: 'It wasn\'t just "which feature to build". It was "which technical approach works?". Often, no one in the room had the answer.',
    },
  ],
  workBlocks: [
    {
      subheading: "Data-driven discovery",
      paragraphs: [
        "Before prioritizing any feature, I dove into discovery. I conducted interviews with potential users, structured hypotheses with clear validation and invalidation criteria, and crossed market data with qualitative insights.",
        'The most important insight: the user\'s pain wasn\'t "having AI". It was having AI that worked within their workflow, without friction. That completely changed our positioning.',
      ],
    },
    {
      subheading: "Fail fast as a survival method",
      paragraphs: [
        "In an AI product in 2025, the ground was shifting beneath us. The answer was to transform fail fast into daily practice.",
        "For every architectural or product decision we were unsure about, I structured short tests (executable in a few hours, not entire sprints), with success criteria defined before execution. If it passed, we moved on. If not, we pivoted without emotional weight.",
        "Example: two possible architectural approaches for a critical component. Instead of debating for days, I ran two short tests. Result was clear-cut. Weeks of rework saved.",
        "In a typical week-long sprint, we ran 3-4 of these micro-experiments in parallel with main development.",
      ],
    },
    {
      subheading: "Metrics, roadmap, and launch",
      paragraphs: [
        "I defined the metrics framework before launch: acquisition funnel, activation, retention, and feature usage. I created product OKRs aligned to company strategy and structured the backlog connecting each feature to a measurable business outcome.",
        "We launched with early users, I monitored metrics daily, and pivoted features that I thought were important but data showed nobody used.",
      ],
    },
  ],
  results: [
    {
      lead: "Product launched and in production.",
      text: "From internal initiative to real product with users generating value.",
    },
    {
      lead: "New business line with international operation.",
      text: "What was an internal project became a new unit.",
    },
    {
      lead: "Clear metrics from day one.",
      text: "All subsequent decisions were data-driven.",
    },
    {
      lead: "Experimentation culture established.",
      text: "Fail fast became team practice, not just talk.",
    },
    {
      lead: "54% user activation rate.",
      text: "A strong market entry.",
    },
  ],
  learnings: [
    {
      title: "1. Fail fast needs structure to work.",
      text: 'Without success criteria defined upfront, without execution in hours (not weeks), and without real commitment to pivot, "fail fast" is just organized chaos.',
    },
    {
      title: "2. Metrics before code.",
      text: "If you wait until the product is live to start measuring, you lose months of valuable data and make decisions in the dark when you need clarity most.",
    },
    {
      title: "3. Chaos is context, not excuse.",
      text: "New product, new team, unfamiliar market, mutant technology. The PM's job isn't to eliminate chaos, it's to navigate it with enough clarity for the team to execute.",
    },
  ],
};
