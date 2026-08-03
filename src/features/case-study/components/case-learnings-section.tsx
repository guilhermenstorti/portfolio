import { LearningItem } from "@/components/ui/learning-item";
import type { CaseLearning } from "@/features/case-study/types";

interface CaseLearningsSectionProps {
  readonly items: readonly CaseLearning[];
}

export const CaseLearningsSection = ({ items }: CaseLearningsSectionProps) => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl font-bold text-ink">O Que Aprendi</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <LearningItem key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  </section>
);
