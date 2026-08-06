import { CaseCard } from "@/features/case-cards/components/case-card";
import { CASE_CARDS } from "@/features/case-cards/case-cards-data";
import { useSectionTracking } from "@/hooks/use-section-tracking";

export const CaseCardsSection = () => {
  const sectionRef = useSectionTracking<HTMLElement>("cases");

  return (
    <section id="cases" ref={sectionRef} className="px-12 py-16">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {CASE_CARDS.map((card, index) => (
            <CaseCard key={card.linkTo} data={card} position={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
