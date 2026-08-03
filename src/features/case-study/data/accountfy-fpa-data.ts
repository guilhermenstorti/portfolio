import type { CaseStudyData } from "@/features/case-study/types";

export const ACCOUNTFY_FPA_DATA: CaseStudyData = {
  seoTitle: "Case: Accountfy FP&A — Redesign e Retenção | Guilherme Storti",
  badgeEmoji: "🎯",
  badgeLabel: "Estratégia & Retenção",
  title: "Accountfy — FP&A",
  subtitle:
    "Produto com churn alto, ofuscado pelo carro-chefe da empresa. Conduzi um redesign completo que não só salvou a retenção, mas transformou o produto em peça central do portfólio.",
  heroGradientFrom: "#10b981",
  heroGradientTo: "#059669",
  metadata: {
    period: "Jul 2022–Dez 2024",
    role: "PO → Product Manager",
    focus: "Retenção, UX, Onboarding, Estratégia",
    status: "Resultados consolidados",
  },
  contextParagraphs: [
    "A squad de FP&A era responsável pelo produto de planejamento orçamentário da Accountfy — fintech SaaS B2B investida pela Redpoint Eventures, com 350+ clientes em 11 países. Era um produto robusto, mas que vivia na sombra do carro-chefe: controladoria e fechamento contábil.",
    'O produto de orçamento era visto como "complementar". UX defasada, churn crescente, e a percepção de que era "mais um" na categoria.',
    "Entrei como Junior PO e evoluí ao longo de quase 3 anos. Isso me deu uma visão longitudinal rara.",
  ],
  problems: [
    { lead: "Churn crescente.", text: "Especialmente nos primeiros meses." },
    { lead: "UX acumulada.", text: "Anos de features sem redesign." },
    {
      lead: "Onboarding doloroso.",
      text: "Longo, dependente de suporte humano.",
    },
    {
      lead: "Produto ofuscado.",
      text: "O carro-chefe recebia toda a atenção.",
    },
  ],
  workBlocks: [
    {
      subheading: "Entender antes de agir",
      paragraphs: [
        "Conversei extensivamente com clientes que deram churn, não com os que ficaram. Os que saíram contaram o que eu precisava saber: a curva de aprendizado era íngreme demais. Quem sobrevivia aos primeiros 60 dias ficava. O problema não era o produto. Era a entrada no produto.",
      ],
    },
    {
      subheading: "Redesign + Onboarding",
      paragraphs: [
        "Conduzi uma reformulação completa da experiência. Não iteração, redesign. Simplificação de fluxos, reorganização da arquitetura de informação, eliminação de passos desnecessários.",
        "O onboarding virou um projeto dentro do projeto. O resultado foi tão positivo que a empresa criou uma squad dedicada, nascida dessa iniciativa, que reduziu em 85% o tempo de onboarding de usuários novos e colaboradores.",
        'Depois do redesign, o produto de orçamento deixou de ser "o complemento" e passou a compor o portfólio de igual para igual com controladoria. O produto que era "mais um" virou um pilar da oferta.',
      ],
    },
  ],
  results: [
    {
      lead: "-5 pontos percentuais de churn mensal.",
      text: "Impacto direto em LTV e receita recorrente.",
    },
    { lead: "-85% no tempo de onboarding.", text: "" },
    {
      lead: "Produto reposicionado no portfólio",
      text: "da empresa.",
    },
    {
      lead: "Capterra Ease of Use 2025.",
      text: "A experiência redesenhada contribuiu para o produto receber o selo Capterra Ease of Use 2025, uma validação externa de usabilidade por avaliações reais de usuários. O produto também recebeu o selo Best Value 2025.",
    },
  ],
  learnings: [
    {
      title: "1. Quem saiu conta mais que quem ficou.",
      text: "Os insights mais valiosos sobre retenção vieram de clientes que deram churn. Eram honestos. E honestidade é o que discovery precisa.",
    },
    {
      title: "2. Onboarding é produto, não suporte.",
      text: "Quando o onboarding depende de uma pessoa do CS passar horas com cada cliente, não é onboarding, é consultoria disfarçada.",
    },
    {
      title: "3. Um bom produto muda sua própria percepção.",
      text: "Não precisei convencer ninguém de que o produto era bom. Os números fizeram isso. Quando churn caiu e adoção subiu, a percepção interna mudou sozinha.",
    },
  ],
};
