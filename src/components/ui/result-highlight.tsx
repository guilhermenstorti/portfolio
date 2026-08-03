interface ResultHighlightProps {
  readonly label: string;
  readonly value: string;
}

export const ResultHighlight = ({ label, value }: ResultHighlightProps) => (
  <div className="rounded-r-lg border-l-4 border-success bg-success/10 px-5 py-4">
    <p className="text-xs font-bold uppercase tracking-wide text-success">{label}</p>
    <p className="mt-1 text-lg font-semibold text-ink">{value}</p>
  </div>
);
