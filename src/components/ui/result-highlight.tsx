interface ResultHighlightProps {
  readonly label: string;
  readonly value: string;
}

export const ResultHighlight = ({ label, value }: ResultHighlightProps) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-wide text-dim">{label}</p>
    <p className="mt-1 font-medium text-green-result">{value}</p>
  </div>
);
