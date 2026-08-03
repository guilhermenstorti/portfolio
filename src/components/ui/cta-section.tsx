import type { ReactNode } from "react";

interface CtaSectionProps {
  readonly title: string;
  readonly text: string;
  readonly children: ReactNode;
}

export const CtaSection = ({ title, text, children }: CtaSectionProps) => (
  <section className="bg-gradient-to-br from-primary to-accent px-6 py-16 text-center text-white">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="mx-auto mt-4 max-w-xl text-blue-100">{text}</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>
  </section>
);
