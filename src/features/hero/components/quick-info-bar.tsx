import { StatusPulse } from "@/components/ui/status-pulse";

interface QuickInfoItem {
  readonly label: string;
  readonly value: string;
  readonly variant?: "default" | "status";
}

const QUICK_INFO_ITEMS: readonly QuickInfoItem[] = [
  { label: "Empresa", value: "Mogno AI" },
  { label: "Foco Principal", value: "AI · Dados · Estratégia" },
  { label: "Localização", value: "Brasil" },
  { label: "Status", value: "Aberto a oportunidades", variant: "status" },
];

export const QuickInfoBar = () => (
  <div className="mx-auto mt-10 grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:w-fit lg:grid-cols-[repeat(4,auto)]">
    {QUICK_INFO_ITEMS.map((item) => (
      <div key={item.label} className="py-3 pl-4 pr-6 text-left">
        <p className="whitespace-nowrap font-mono text-xs uppercase tracking-wide text-faint">
          {item.label}
        </p>
        <p className="mt-1 flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-foreground">
          {item.value}
          {item.variant === "status" && <StatusPulse />}
        </p>
      </div>
    ))}
  </div>
);
