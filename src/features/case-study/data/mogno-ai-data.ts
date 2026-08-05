import type { CaseStudyData } from "@/features/case-study/types";

export const MOGNO_AI_DATA: CaseStudyData = {
  seoTitle: "Case: Mogno AI — Do Zero ao Lançamento | Guilherme Storti",
  badgeEmoji: "🚀",
  badgeLabel: "AI & Plataforma",
  title: "Mogno AI",
  subtitle:
    "De iniciativa interna a produto global: como estruturei a visão, o discovery e as métricas de um produto de IA desde a fase zero, navegando incerteza técnica com fail fast e experimentação constante.",
  heroGradientFrom: "#8b5cf6",
  heroGradientTo: "#6d28d9",
  metadata: {
    period: "Out 2025–Jul 2026",
    role: "PM Senior",
    focus: "Discovery, Métricas, Fail Fast, GTM",
    status: "Produto em produção",
  },
  contextParagraphs: [
    "A Mogno AI tinha algo promissor nas mãos: uma iniciativa de IA que gerava valor internamente e que havia sido selecionada para aceleração pelo Google for Startups. O potencial era claro, mas não existia produto. Não havia roadmap, não havia métricas, não havia visão de monetização.",
    "Meu desafio era estruturar uma operação de produto completa, do discovery à mensuração, do posicionamento à internacionalização, e fazer isso com velocidade, porque o mercado de IA não espera.",
  ],
  problems: [
    {
      lead: "Sem métricas definidas.",
      text: "Não sabíamos o que medir, nem como saber se estávamos no caminho certo.",
    },
    {
      lead: "Discovery incompleto.",
      text: "Havia premissas de negócio, mas não validação com usuários reais.",
    },
    {
      lead: "Tecnologia evoluindo mais rápido que o produto.",
      text: "IA generativa estava mudando semana a semana. Os times de engenharia ainda estavam aprendendo a trabalhar com essa tecnologia (e eu também).",
    },
    {
      lead: "Incerteza arquitetural.",
      text: 'Não era só "qual feature construir". Era "qual abordagem técnica funciona?". Muitas vezes, ninguém na sala tinha a resposta.',
    },
  ],
  workBlocks: [
    {
      subheading: "Discovery orientado a dados",
      paragraphs: [
        "Antes de priorizar qualquer feature, mergulhei no discovery. Conduzi entrevistas com potenciais usuários, estruturei hipóteses com critérios claros de validação e invalidação, e cruzei dados de mercado com insights qualitativos.",
        'O insight mais importante: a dor do usuário não era "ter IA". Era ter IA que funcionasse dentro do workflow dele, sem fricção. Isso mudou completamente nosso posicionamento.',
      ],
    },
    {
      subheading: "Fail fast como método de sobrevivência",
      paragraphs: [
        "Em um produto de IA em 2025, o chão se movia debaixo dos pés. A resposta foi transformar o fail fast em prática diária.",
        "Para cada decisão arquitetural ou de produto que tínhamos dúvida, eu estruturava testes curtos (executáveis em poucas horas, não em sprints inteiras), com critério de sucesso definido antes da execução. Se passava, seguíamos. Se não, pivotávamos sem peso emocional.",
        "Exemplo: duas abordagens arquiteturais possíveis para um componente crítico. Em vez de debater por dias, montei dois testes de poucas horas. Resultado inequívoco. Semanas de retrabalho economizadas.",
        "Em uma sprint típica de uma semana, rodávamos 3-4 desses micro-experimentos em paralelo com o desenvolvimento principal.",
      ],
    },
    {
      subheading: "Métricas, roadmap e lançamento",
      paragraphs: [
        "Defini o framework de métricas antes do lançamento: funil de aquisição, ativação, retenção e uso de features. Criei OKRs de produto alinhados à estratégia da empresa e estruturei o backlog conectando cada feature a um resultado de negócio mensurável.",
        "Lançamos com early users, monitorei métricas diariamente, e pivotei features que achava importantes mas que os dados mostraram que ninguém usava.",
      ],
    },
  ],
  results: [
    {
      lead: "Produto lançado e em produção.",
      text: "De iniciativa interna para produto real, com usuários e gerando valor.",
    },
    {
      lead: "Nova frente de negócio com atuação internacional.",
      text: "O que era um projeto interno virou uma nova unidade.",
    },
    {
      lead: "Métricas claras desde o dia 1.",
      text: "Todas as decisões subsequentes foram baseadas em dados.",
    },
    {
      lead: "Cultura de experimentação implantada.",
      text: "Fail fast virou prática do time, não só discurso.",
    },
    {
      lead: "54% de taxa de ativação de usuários.",
      text: "Uma boa entrada de mercado.",
    },
  ],
  learnings: [
    {
      title: "1. Fail fast precisa de estrutura para funcionar.",
      text: 'Sem critério de sucesso definido antes, sem execução em horas (não semanas), e sem comprometimento real em pivotar, "fail fast" é só bagunça rápida.',
    },
    {
      title: "2. Métricas antes do código.",
      text: "Se você espera o produto estar no ar para começar a medir, perde meses de dados valiosos e toma decisões no escuro quando mais precisa de clareza.",
    },
    {
      title: "3. Caos é contexto, não desculpa.",
      text: "Produto novo, time novo, mercado desconhecido, tecnologia mutante. O trabalho do PM não é eliminar o caos, é navegar nele com clareza suficiente para o time executar.",
    },
  ],
};
