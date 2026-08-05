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

export const DownloadIcon = ({ className }: IconProps) => (
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
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
);

export const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.5V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
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

export const CloseIcon = ({ className }: IconProps) => (
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
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const TargetIcon = ({ className }: IconProps) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

export const BrainIcon = ({ className }: IconProps) => (
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
    <path d="M12 4.5c-1.4-1.3-3.5-1.5-5-.4C5.5 5 5 6.3 5.3 7.5 4.2 8 3.5 9.1 3.5 10.4c0 1 .4 1.9 1.1 2.6-.4.6-.6 1.3-.6 2 0 1.9 1.5 3.5 3.4 3.6.3 1.4 1.6 2.4 3.1 2.4h1.2V4.5Z" />
    <path d="M12 4.5c1.4-1.3 3.5-1.5 5-.4 1.5.9 2 2.2 1.7 3.4 1.1.5 1.8 1.6 1.8 2.9 0 1-.4 1.9-1.1 2.6.4.6.6 1.3.6 2 0 1.9-1.5 3.5-3.4 3.6-.3 1.4-1.6 2.4-3.1 2.4h-1.2V4.5Z" />
    <path d="M9 8.5c.6.3 1.4.3 2 0M9.5 12c.8.4 1.7.4 2.5 0M9 15.5c.6.3 1.4.3 2 0" />
  </svg>
);
