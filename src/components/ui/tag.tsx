interface TagProps {
  readonly label: string;
}

export const Tag = ({ label }: TagProps) => (
  <span className="inline-block rounded bg-gray-100 px-3 py-1 text-sm text-ink">
    {label}
  </span>
);
