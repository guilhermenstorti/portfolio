import { QuickScanField } from "@/features/quick-scan/components/quick-scan-field";
import { QuickScanActions } from "@/features/quick-scan/components/quick-scan-actions";
import { StatPanel } from "@/components/ui/stat-panel";
import { ChevronsUpIcon, LaunchingRocketIcon } from "@/components/ui/icons";

interface TextField {
  readonly label: string;
  readonly value: string;
  readonly fullWidth?: boolean;
}

const TEXT_FIELDS: readonly TextField[] = [
  {
    label: "Experiência",
    value:
      "6+ anos em gestão de produtos digitais. Evolução de Junior PO → PO → PM → PM Senior. Background técnico como desenvolvedor e engenheiro de dados antes de migrar para produto.",
  },
  {
    label: "Empresas",
    value:
      "Mogno AI (PM Senior, AI & Plataforma) · Accountfy (PM, 4+ anos, SaaS B2B fintech) · Grupo Euphoria (BI & Estratégia) · Teclaser (Desenvolvimento & Engenharia) · EchoTech (Desenvolvimento & Engenharia).",
  },
  {
    label: "Especialidades",
    value:
      "Product Discovery · Product Strategy · AI/ML Products · Data-Driven Decision Making · Analytics · OKR · Roadmap · Technical Product Management",
  },
  {
    label: "Formação",
    value:
      "Engenharia de Produção (UEM) · MBA Digital Business (USP/ESALQ) · Certificação GenAI (MIT) · Product Management e Product Analytics (PM3) · AI (branas.io)",
  },
  { label: "Idiomas", value: "Português (nativo) · Inglês (fluente)" },
  {
    label: "Disponibilidade",
    value: "Aberto a oportunidades · Remoto ou híbrido.",
  },
  {
    label: "Diferencial técnico",
    value:
      "Background em desenvolvimento de software (ADVPL/Protheus, HTML, CSS, JavaScript, SQL, REST API), construção de ETL e Data Warehouses, e fluência em arquiteturas de IA/LLM. Falo a mesma língua do time de engenharia.",
    fullWidth: true,
  },
];

const withTrend = (value: string) => (
  <span className="inline-flex items-center gap-1.5">
    {value}
    <ChevronsUpIcon className="h-3.5 w-3.5 text-green opacity-90" />
  </span>
);

const RESULT_STATS = [
  {
    value: <LaunchingRocketIcon className="h-8 w-8 text-green" />,
    label: "Produto de IA lançado do zero (Google for Startups)",
  },
  { value: withTrend("+11%"), label: "Revenue via upsell / mês" },
  { value: withTrend("-22%"), label: "Tickets de suporte / mês" },
  { value: withTrend("-5pp"), label: "Churn mensal" },
  { value: withTrend("-32,5%"), label: "Inadimplência durante a pandemia" },
  { value: withTrend("-85%"), label: "Tempo de onboarding" },
];

export const QuickScanSection = () => (
  <section className="px-12 py-16">
    <div className="mx-auto max-w-content">
      <h2 className="text-3xl text-foreground">Pra facilitar sua vida</h2>
      <p className="mt-4 max-w-[900px] text-muted">
        Se você é recrutador e está com pressa (eu entendo), aqui está tudo
        que você precisa saber em 60 segundos. Se quiser ir mais fundo, os
        cases estão logo abaixo.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
        {TEXT_FIELDS.map((field) => (
          <QuickScanField
            key={field.label}
            label={field.label}
            className={field.fullWidth ? "sm:col-span-3" : undefined}
          >
            {field.value}
          </QuickScanField>
        ))}
      </div>

      <div className="mt-8">
        <StatPanel items={RESULT_STATS} />
      </div>

      <QuickScanActions />
    </div>
  </section>
);
