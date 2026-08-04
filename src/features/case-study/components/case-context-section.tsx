interface CaseContextSectionProps {
  readonly paragraphs: readonly string[];
}

export const CaseContextSection = ({ paragraphs }: CaseContextSectionProps) => (
  <section className="px-12 py-16">
    <div className="mx-auto max-w-[700px]">
      <h2 className="text-2xl text-foreground">Contexto</h2>
      <div className="mt-4 space-y-4 text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
