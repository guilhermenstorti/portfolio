import { CaseCard } from "@/features/case-cards/components/case-card";
import { CASE_CARDS } from "@/features/case-cards/case-cards-data";

export const CaseCardsSection = () => (
  <section id="cases" className="px-12 py-16">
    <div className="mx-auto max-w-content">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {CASE_CARDS.map((card) => (
          <CaseCard key={card.linkTo} data={card} />
        ))}
      </div>
    </div>
  </section>
);
