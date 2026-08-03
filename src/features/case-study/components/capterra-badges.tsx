interface CapterraBadge {
  readonly src: string;
  readonly alt: string;
}

const CAPTERRA_BADGES: readonly CapterraBadge[] = [
  {
    src: "/portfolio/assets/img/capterra/ease-of-use-2025.svg",
    alt: "Selo Capterra Ease of Use 2025",
  },
  {
    src: "/portfolio/assets/img/capterra/best-value-2025.svg",
    alt: "Selo Capterra Best Value 2025",
  },
];

export const CapterraBadges = () => (
  <div className="mx-auto max-w-[700px] px-6">
    <div className="flex gap-4">
      {CAPTERRA_BADGES.map((badge) => (
        <img key={badge.src} src={badge.src} alt={badge.alt} className="h-16 w-auto" />
      ))}
    </div>
  </div>
);
