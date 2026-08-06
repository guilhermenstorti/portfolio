import type { MouseEvent } from "react";

interface AnchorScrollLinkProps {
  readonly targetId: string;
  readonly label: string;
  readonly className: string;
  readonly onClick?: () => void;
}

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, targetId: string): void {
  event.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
}

export const AnchorScrollLink = ({ targetId, label, className, onClick }: AnchorScrollLinkProps) => (
  <a
    href={`#${targetId}`}
    className={className}
    onClick={(event) => {
      scrollToSection(event, targetId);
      onClick?.();
    }}
  >
    {label}
  </a>
);
