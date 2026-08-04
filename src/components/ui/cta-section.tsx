import type { ReactNode } from "react";

interface CtaSectionProps {
  readonly title: string;
  readonly text: string;
  readonly children: ReactNode;
}

export const CtaSection = ({ title, text, children }: CtaSectionProps) => (
  <section className="px-12 py-16 text-center">
    <div className="mx-auto max-w-content rounded-card bg-contrast px-6 py-16">
      <h2 className="text-3xl text-contrast-foreground">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-contrast-muted">{text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  </section>
);
