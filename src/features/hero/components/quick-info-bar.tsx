import { StatusPulse } from "@/components/ui/status-pulse";

interface QuickInfoItem {
  readonly label: string;
  readonly value: string;
  readonly variant?: "default" | "status";
}

const QUICK_INFO_ITEMS: readonly QuickInfoItem[] = [
  { label: "Empresa Atual", value: "Mogno AI" },
  { label: "Foco Principal", value: "AI · Dados · Strategy" },
  { label: "Localização", value: "Brasil (remoto ok)" },
  { label: "Status", value: "Aberto a oportunidades", variant: "status" },
];

export const QuickInfoBar = () => (
  <div className="mt-10 grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
    {QUICK_INFO_ITEMS.map((item) => (
      <div key={item.label} className="px-4 py-3 text-left">
        <p className="font-mono text-xs uppercase tracking-wide text-faint">{item.label}</p>
        <p className="mt-1 flex items-center gap-2 font-semibold text-foreground">
          {item.value}
          {item.variant === "status" && <StatusPulse />}
        </p>
      </div>
    ))}
  </div>
);
