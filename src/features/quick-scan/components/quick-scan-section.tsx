import { QuickScanField } from "@/features/quick-scan/components/quick-scan-field";
import { QuickScanActions } from "@/features/quick-scan/components/quick-scan-actions";

interface TextField {
  readonly label: string;
  readonly value: string;
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
    label: "Diferencial técnico",
    value:
      "Background em desenvolvimento de software (ADVPL/Protheus, HTML, CSS, JavaScript, SQL, REST API), construção de ETL e Data Warehouses, e fluência em arquiteturas de IA/LLM. Falo a mesma língua do time de engenharia.",
  },
];

const RESULT_ITEMS: readonly string[] = [
  "Produto de IA lançado do zero (Google for Startups)",
  "Revenue via upsell: +11% ao mês",
  "Tickets de suporte: -22% ao mês",
  "Churn: -5 pontos percentuais",
  "Inadimplência: -32,5% durante a pandemia",
  "Tempo de onboarding: -85%",
];

export const QuickScanSection = () => (
  <section className="bg-surface px-6 py-16">
    <div className="mx-auto max-w-[900px]">
      <h2 className="text-3xl font-bold text-ink">Pra facilitar sua vida</h2>
      <p className="mt-4 text-ink-light">
        Se você é recrutador e está com pressa (eu entendo), aqui está tudo
        que você precisa saber em 60 segundos. Se quiser ir mais fundo, os
        cases estão logo abaixo.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {TEXT_FIELDS.map((field) => (
          <QuickScanField key={field.label} label={field.label}>
            {field.value}
          </QuickScanField>
        ))}
        <div>
          <p className="font-bold text-ink">Resultados que importam</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-light">
            {RESULT_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <QuickScanField label="Disponibilidade">
          Aberto a oportunidades · Remoto ou híbrido.
        </QuickScanField>
      </div>
      <QuickScanActions />
    </div>
  </section>
);
