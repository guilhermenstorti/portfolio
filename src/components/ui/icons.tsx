interface IconProps {
  readonly className?: string;
}

export const CalendarIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
);

export const ChevronsUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path className="chevrons-up-top" d="m17 11-5-5-5 5" />
    <path className="chevrons-up-bottom" d="m17 18-5-5-5 5" />
  </svg>
);

export const LaunchingRocketIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`rocket-launch ${className ?? ""}`}
    aria-hidden="true"
  >
    <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 3.7-1.2 5.1L12 18l-2.8-1.9C8.5 14.7 8 13 8 11c0-3.5 1.5-7 4-9Z" />
    <circle cx="12" cy="9" r="1.4" />
    <path d="M8.5 13.5 6 15c-.5 1.5-.5 3-.5 4 1-.3 2.3-1 3-2l1-2.2" />
    <path d="M15.5 13.5 18 15c.5 1.5.5 3 .5 4-1-.3-2.3-1-3-2l-1-2.2" />
    <path className="rocket-flame" d="M10.5 18 10 21.5l2-1.3 2 1.3-.5-3.5" />
  </svg>
);
