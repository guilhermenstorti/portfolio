interface CaseContextSectionProps {
  readonly paragraphs: readonly string[];
}

export const CaseContextSection = ({ paragraphs }: CaseContextSectionProps) => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl font-bold text-ink">Contexto</h2>
      <div className="mt-4 space-y-4 text-ink-light">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
