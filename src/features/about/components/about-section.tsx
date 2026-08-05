import { InsightBox } from "@/components/ui/insight-box";
import { ExpertiseTags } from "@/features/about/components/expertise-tags";
import { EducationTimeline } from "@/features/about/components/education-timeline";
import { CommunityActivities } from "@/features/about/components/community-activities";

const MAIN_PARAGRAPHS: readonly string[] = [
  "Engenheiro de produção por formação, mas product manager por vocação, com uma parada técnica no meio que fez toda a diferença.",
  'Comecei em 2016 escrevendo código e criando soluções web. Aprendi o que significa colocar software em produção, debugar às 11 da noite e entender que "funciona na minha máquina" não é entrega. Essa experiência me deu algo que nunca perdi: a capacidade de falar a mesma língua do time de engenharia.',
  "De lá, migrei para planejamento estratégico em uma holding (Grupo Euphoria), onde aprendi a pensar em sistemas: como áreas se conectam, como decisões em um departamento impactam outro, e como traduzir estratégia em execução em 10 empresas diferentes.",
  "Daí fui para BI, onde aprendi que dados sem contexto não servem pra nada. Depois virei PO, onde aprendi que roadmap sem discovery é achismo. Evolui para PM, onde entendi que produto sem métrica é esperança. E cheguei a PM Senior, onde percebi que nada disso funciona sem comunicação clara e alinhamento de stakeholders.",
  "O que conecta tudo: cada fase me deu uma camada que a próxima precisava. Código me deu fluência técnica. Estratégia me deu visão sistêmica. Dados me deram rigor. E produto juntou tudo.",
  "Hoje, meu foco está na interseção entre AI, dados e estratégia de produto. Trabalho bem em ambientes com ambiguidade, gosto de complexidade e acredito que a melhor versão de um PM é aquele que faz o time ao redor ser melhor.",
];

export const AboutSection = () => (
  <section id="about" className="px-12 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-3xl text-foreground">Quem sou eu</h2>
      <div className="mt-6 space-y-4 text-muted">
        {MAIN_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <InsightBox>
          Quando um engenheiro me explica um trade-off técnico, eu entendo.
          Não porque li sobre, mas porque já vivi. Quando a equipe debate uma
          decisão arquitetural, consigo contribuir, não só ouvir. Na Mogno AI,
          essa fluência me permitiu estruturar testes de validação técnica em
          horas e dialogar com a engenharia sem intermediários. Em um mercado
          onde a maioria dos PMs depende do tech lead para qualquer decisão
          técnica, eu consigo operar com bastante autonomia.
        </InsightBox>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-foreground">Formação e especializações</h3>
        <EducationTimeline />
      </div>

      <div className="mt-8">
        <CommunityActivities />
      </div>

      <ExpertiseTags />
    </div>
  </section>
);
