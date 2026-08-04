import type { CaseListItem } from "@/features/case-study/types";

interface CaseProblemsSectionProps {
  readonly items: readonly CaseListItem[];
}

export const CaseProblemsSection = ({ items }: CaseProblemsSectionProps) => (
  <section className="px-12 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl text-foreground">O Problema Real</h2>
      <ul className="mt-4 space-y-3 text-muted">
        {items.map((item) => (
          <li key={item.lead}>
            <strong className="text-foreground">{item.lead}</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
