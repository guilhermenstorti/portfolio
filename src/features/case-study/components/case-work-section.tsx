import type { CaseWorkBlock } from "@/features/case-study/types";

interface CaseWorkSectionProps {
  readonly blocks: readonly CaseWorkBlock[];
}

export const CaseWorkSection = ({ blocks }: CaseWorkSectionProps) => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl font-bold text-ink">O Que Eu Fiz</h2>
      <div className="mt-6 space-y-8">
        {blocks.map((block) => (
          <div key={block.subheading}>
            <h3 className="font-bold text-ink">{block.subheading}</h3>
            <div className="mt-2 space-y-3 text-ink-light">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
