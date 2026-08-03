import type { CaseStudyData } from "@/features/case-study/types";

export const EUPHORIA_BI_DATA: CaseStudyData = {
  seoTitle: "Case: Euphoria BI — Fundação de Dados | Guilherme Storti",
  badgeEmoji: "📊",
  badgeLabel: "Dados & Fundação",
  title: "Euphoria — Fundação de BI",
  subtitle:
    "Como construí a área de Business Intelligence de uma holding com 10+ empresas, transformando dados dispersos em decisões estratégicas, e reduzindo inadimplência em 32,5% durante a pandemia.",
  heroGradientFrom: "#3b82f6",
  heroGradientTo: "#1e40af",
  metadata: {
    period: "Abr 2019–Dez 2020",
    role: "BI Analyst",
    focus: "Data Warehouse, ETL, Dashboards, Cultura",
    status: "Fundação consolidada",
  },
  contextParagraphs: [
    "O Grupo Euphoria era uma holding com mais de 10 empresas. Cada unidade tinha seus próprios processos, planilhas, softwares e verdades sobre os números. Não existia fonte única de dados. Decisões eram tomadas com base em intuição.",
    "Quando entrei, não existia a função de BI na empresa. Quando saí, BI era uma área central que orientava decisões executivas em múltiplas unidades.",
    'Esse case é diferente dos outros: não é sobre produto digital. É sobre a fundação que me tornou o PM orientado a dados que sou hoje.',
  ],
  problems: [
    {
      lead: "Dados fragmentados.",
      text: "Ferramentas e definições diferentes em cada empresa do grupo.",
    },
    {
      lead: "Sem governança.",
      text: '"Receita" significava coisas diferentes para departamentos diferentes.',
    },
    {
      lead: "Decisões no escuro.",
      text: "Diretoria decidia com experiência, não com dados.",
    },
    {
      lead: "Pandemia.",
      text: "Em 2020, a crise amplificou cada problema que já existia.",
    },
  ],
  workBlocks: [
    {
      subheading: "Fundação técnica",
      paragraphs: [
        "Projetei Data Warehouses centralizados, construí processos de ETL com Pentaho, padronizei definições de métricas e estruturei bancos de dados com SQL e PostgreSQL.",
      ],
    },
    {
      subheading: "Visualização e storytelling",
      paragraphs: [
        "Criei dashboards que contavam histórias, não que só mostravam números. Painéis executivos para a diretoria e dashboards operacionais para cada área, usando Pentaho, PowerBI e tecnologias web.",
      ],
    },
    {
      subheading: "Mudança cultural",
      paragraphs: [
        "Convencer pessoas que sempre decidiram pela intuição a confiarem nos dados. Não se faz com uma apresentação. Se faz com pequenas vitórias: um dashboard que economiza 2 horas, um dado que evita uma decisão errada.",
      ],
    },
  ],
  results: [
    {
      lead: "-32,5% em inadimplência financeira durante a pandemia.",
      text: "",
    },
    {
      lead: "BI consolidado como função central",
      text: "da organização.",
    },
    {
      lead: "Padronização de processos de dados",
      text: "em múltiplas empresas.",
    },
    {
      lead: "76% das metas alcançadas",
      text: "no planejamento estratégico estruturado em 10 empresas.",
    },
  ],
  learnings: [
    {
      title: "1. Cultura de dados é projeto, não palestra.",
      text: "A primeira pessoa que usou um dashboard para tomar uma decisão melhor virou meu maior evangelista. Uma vitória vale mais que 10 apresentações.",
    },
    {
      title: "2. Dados sem governança são piores que sem dados.",
      text: "Um número errado em que todo mundo confia é mais perigoso que não ter número nenhum.",
    },
    {
      title: "3. Essa experiência definiu quem sou como PM.",
      text: "Tudo que faço hoje — métricas, dashboards, cultura de dados — nasceu aqui. Não é teoria de curso. É prática do zero.",
    },
  ],
};
