import type { CaseWorkBlock } from "@/features/case-study/types";

interface CaseWorkSectionProps {
  readonly blocks: readonly CaseWorkBlock[];
}

export const CaseWorkSection = ({ blocks }: CaseWorkSectionProps) => (
  <section className="px-12 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl text-foreground">O Que Eu Fiz</h2>
      <div className="mt-6 space-y-8">
        {blocks.map((block) => (
          <div key={block.subheading}>
            <h3 className="font-semibold text-foreground">{block.subheading}</h3>
            <div className="mt-2 space-y-3 text-muted">
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
