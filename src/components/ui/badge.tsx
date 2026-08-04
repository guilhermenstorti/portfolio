type BadgeVariant = "badge" | "hero";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  badge: "bg-badge text-badge-foreground",
  hero: "bg-white/20 text-white",
};

interface BadgeProps {
  readonly label: string;
  readonly variant: BadgeVariant;
}

export const Badge = ({ label, variant }: BadgeProps) => (
  <span
    className={`inline-block rounded-full px-4 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${VARIANT_CLASSES[variant]}`}
  >
    {label}
  </span>
);
