import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyData } from "@/features/case-study/types";

interface CaseHeroProps {
  readonly data: CaseStudyData;
}

interface MetadataItemProps {
  readonly label: string;
  readonly value: string;
}

const MetadataItem = ({ label, value }: MetadataItemProps) => (
  <div>
    <dt className="font-mono text-xs uppercase tracking-wide text-white/70">{label}</dt>
    <dd className="mt-1 font-semibold">{value}</dd>
  </div>
);

export const CaseHero = ({ data }: CaseHeroProps) => {
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to bottom right, ${data.heroGradientFrom}, ${data.heroGradientTo})`,
  };

  return (
    <section style={gradientStyle} className="px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <Badge label={`${data.badgeEmoji} ${data.badgeLabel}`} variant="hero" />
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{data.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">{data.subtitle}</p>
        <dl className="mx-auto mt-10 grid grid-cols-2 gap-4 rounded-lg bg-white/10 p-6 text-left backdrop-blur sm:grid-cols-4">
          <MetadataItem label="Período" value={data.metadata.period} />
          <MetadataItem label="Cargo" value={data.metadata.role} />
          <MetadataItem label="Foco" value={data.metadata.focus} />
          <MetadataItem label="Status" value={data.metadata.status} />
        </dl>
      </div>
    </section>
  );
};
