interface QuickInfoItem {
  readonly label: string;
  readonly value: string;
}

const QUICK_INFO_ITEMS: readonly QuickInfoItem[] = [
  { label: "Empresa Atual", value: "Mogno AI" },
  { label: "Foco Principal", value: "AI · Dados · Strategy" },
  { label: "Localização", value: "Brasil (remoto ok)" },
  { label: "Status", value: "Aberto a oportunidades 🟢" },
];

export const QuickInfoBar = () => (
  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {QUICK_INFO_ITEMS.map((item) => (
      <div key={item.label} className="rounded-lg bg-white/10 px-4 py-3 text-left backdrop-blur">
        <p className="text-xs uppercase tracking-wide text-blue-100">{item.label}</p>
        <p className="mt-1 font-semibold text-white">{item.value}</p>
      </div>
    ))}
  </div>
);
