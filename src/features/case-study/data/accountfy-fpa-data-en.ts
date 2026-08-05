import type { CaseStudyData } from "@/features/case-study/types";

export const ACCOUNTFY_FPA_DATA_EN: CaseStudyData = {
  seoTitle: "Case: Accountfy FP&A — Redesign and Retention | Guilherme Storti",
  badgeEmoji: "🎯",
  badgeLabel: "Strategy & Retention",
  title: "Accountfy: FP&A",
  subtitle:
    "High-churn product, overshadowed by the flagship. I led a complete redesign that not only saved retention but transformed the product into a portfolio centerpiece.",
  heroGradientFrom: "#10b981",
  heroGradientTo: "#059669",
  metadata: {
    period: "Jul 2022–Dec 2024",
    role: "PO → Product Manager",
    focus: "Retention, UX, Onboarding, Strategy",
    status: "Results consolidated",
  },
  contextParagraphs: [
    "The FP&A squad was responsible for Accountfy's budgeting product, a B2B SaaS fintech backed by Redpoint Ventures, with 350+ customers in 11 countries. It was a robust product, but lived in the shadow of the flagship: accounting and financial close.",
    'The budgeting product was seen as "complementary". Outdated UX, rising churn, perception that it was "just another" in the category.',
    "I joined as Junior PO and evolved over nearly 3 years. That gave me rare longitudinal insight.",
  ],
  problems: [
    { lead: "Rising churn.", text: "Especially in the first months." },
    { lead: "Accumulated UX.", text: "Years of features without redesign." },
    {
      lead: "Painful onboarding.",
      text: "Long, dependent on human support.",
    },
    {
      lead: "Overshadowed product.",
      text: "The flagship got all the attention.",
    },
  ],
  workBlocks: [
    {
      subheading: "Understand before acting",
      paragraphs: [
        "I extensively interviewed customers who churned, not those who stayed. The ones who left told me what I needed to know: the learning curve was too steep. Those who survived the first 90 days stayed. The problem wasn't the product. It was entry into the product, with some critical cases taking 6 months of onboarding.",
      ],
    },
    {
      subheading: "Redesign + Onboarding",
      paragraphs: [
        "I conducted a complete experience overhaul. Not iteration, redesign. Simplified flows, reorganized information architecture, eliminated unnecessary steps.",
        "Onboarding became a project within the project. The result was so positive the company created a dedicated squad born from this initiative, which reduced new user onboarding time by 85%.",
        'After the redesign, the budgeting product stopped being "the add-on" and became equal portfolio standing with accounting. The product that was "just another" became a pillar of the offering.',
      ],
    },
  ],
  results: [
    {
      lead: "-5 percentage points in monthly churn.",
      text: "Direct impact on LTV and recurring revenue.",
    },
    { lead: "-85% in onboarding time.", text: "" },
    {
      lead: "Product repositioned in company portfolio",
      text: ".",
    },
    {
      lead: "Capterra Ease of Use 2025.",
      text: "The redesigned experience contributed to the product receiving the Capterra Ease of Use 2025 badge, external validation of usability through real user reviews. The product also received the Best Value 2025 badge.",
    },
  ],
  learnings: [
    {
      title: "1. Those who left say more than those who stayed.",
      text: "The most valuable insights about retention came from customers who churned. They were honest. And honesty is what discovery needs.",
    },
    {
      title: "2. Onboarding is product, not support.",
      text: "When onboarding depends on a CS person spending hours, days, or even months with each customer, that's not onboarding, it's consulting in disguise.",
    },
    {
      title: "3. A good product changes its own perception.",
      text: "I didn't need to convince anyone the product was good. The numbers did that. When churn fell and adoption rose, internal perception changed on its own.",
    },
  ],
};
