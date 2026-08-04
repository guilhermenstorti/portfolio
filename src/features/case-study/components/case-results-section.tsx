import type { CaseListItem } from "@/features/case-study/types";

interface CaseResultsSectionProps {
  readonly items: readonly CaseListItem[];
}

export const CaseResultsSection = ({ items }: CaseResultsSectionProps) => (
  <section className="px-12 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl text-foreground">Os Resultados</h2>
      <ul className="mt-4 space-y-3 text-muted">
        {items.map((item) => (
          <li key={item.lead}>
            <strong className="text-green-result">{item.lead}</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
