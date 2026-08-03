interface BadgeProps {
  readonly label: string;
  readonly color: string;
}

export const Badge = ({ label, color }: BadgeProps) => (
  <span
    className="inline-block rounded-full px-4 py-1 text-sm font-semibold text-white"
    style={{ backgroundColor: color }}
  >
    {label}
  </span>
);
