import type { CaseStudyData } from "@/features/case-study/types";

export const ACCOUNTFY_AI_ANALYTICS_DATA: CaseStudyData = {
  seoTitle: "Case: Accountfy AI & Analytics — Growth via IA | Guilherme Storti",
  badgeEmoji: "🚀",
  badgeLabel: "Growth & AI",
  title: "Accountfy — AI & Analytics",
  subtitle:
    "De chatbots básicos e desconectados a uma camada de IA coesa que reduziu tickets de suporte em 22% e cresceu receita em 11% ao mês.",
  heroGradientFrom: "#8b5cf6",
  heroGradientTo: "#a78bfa",
  metadata: {
    period: "Dez 2024–Out 2025",
    role: "Product Manager",
    focus: "Estratégia de Produto, AI/ML, Métricas",
    status: "Resultados consolidados",
  },
  contextParagraphs: [
    'A Accountfy é uma fintech SaaS B2B de gestão financeira, investida pela Redpoint Eventures, com mais de 350 empresas clientes em 11 países. Quando assumi as squads de IA/Inovação e Analytics, o produto tinha "features de IA", mas na prática eram chatbots muito básicos, desconectados entre si, com bases de conhecimento fragmentadas e funcionamento inconsistente.',
    "Para o usuário, era confuso. Para o time de CS, era fonte de tickets. Para a liderança, era investimento sem retorno claro.",
  ],
  problems: [
    {
      lead: "Chatbots rudimentares",
      text: "que não compartilhavam contexto e funcionavam de forma isolada.",
    },
    {
      lead: "UX fragmentada.",
      text: "Cada chatbot parecia um produto diferente.",
    },
    {
      lead: "Métricas ausentes.",
      text: "Ninguém sabia quais features estavam sendo usadas, por quem, com que frequência.",
    },
    {
      lead: "Pressão de revenue.",
      text: "A empresa precisava que IA gerasse upsell, e ninguém tinha clareza de como.",
    },
  ],
  workBlocks: [
    {
      subheading: "Discovery e diagnóstico",
      paragraphs: [
        "Analisei dados de uso, conduzi entrevistas com clientes e mapeei a jornada do usuário com as features de IA. O diagnóstico: o problema não era a IA em si. Era a experiência em volta dela.",
      ],
    },
    {
      subheading: "Estratégia de coesão",
      paragraphs: [
        "Redesenhei a arquitetura de informação para criar uma experiência unificada. Em vez de chatbots isolados, o usuário passou a ter uma camada de inteligência integrada ao workflow.",
        "Estruturei um framework de métricas unificado e auxiliei outros POs a definirem métricas estratégicas e criarem dashboards por squad.",
      ],
    },
    {
      subheading: "Execução",
      paragraphs: [
        "Os produtos de IA foram selecionados para aceleração pelo Google for Startups. Contribuí para a expansão internacional (LATAM e EUA).",
      ],
    },
  ],
  results: [
    { lead: "-22% ao mês em tickets de CS.", text: "" },
    { lead: "+11% ao mês em receita via upsell.", text: "" },
    {
      lead: "Aumento na precisão das interações",
      text: "e redução no tempo gasto pelo usuário nos fluxos.",
    },
    {
      lead: "Google for Startups.",
      text: "Reconhecimento externo da estratégia.",
    },
  ],
  learnings: [
    {
      title: "1. Coesão vale mais que features.",
      text: "Ter 10 chatbots desconectados é pior que ter 3 bem integrados. O valor está na experiência completa, não na quantidade.",
    },
    {
      title: "2. IA precisa ser invisível para ser útil.",
      text: "O melhor elogio que um produto de IA pode receber é o usuário nem perceber que está usando IA. Ele só percebe que o trabalho ficou mais fácil.",
    },
    {
      title: "3. Em IA, o PM precisa de fluência técnica.",
      text: "Não precisa codar o modelo. Mas precisa entender o suficiente para fazer as perguntas certas e avaliar trade-offs sem depender 100% da engenharia.",
    },
  ],
};
