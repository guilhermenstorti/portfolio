import type { CaseListItem } from "@/features/case-study/types";

interface CaseResultsSectionProps {
  readonly items: readonly CaseListItem[];
}

export const CaseResultsSection = ({ items }: CaseResultsSectionProps) => (
  <section className="bg-surface px-6 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl font-bold text-ink">Os Resultados</h2>
      <ul className="mt-4 space-y-3 text-ink-light">
        {items.map((item) => (
          <li key={item.lead}>
            <strong className="text-success">{item.lead}</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
