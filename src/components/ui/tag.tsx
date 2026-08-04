interface TagProps {
  readonly label: string;
}

export const Tag = ({ label }: TagProps) => (
  <span className="inline-block rounded border border-border bg-card px-3 py-1 text-sm text-muted">
    {label}
  </span>
);
