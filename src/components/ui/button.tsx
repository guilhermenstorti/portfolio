import type { ReactNode } from "react";
import { getButtonClassName, type ButtonSize, type ButtonVariant } from "@/components/ui/button-styles";
import { cn } from "@/lib/cn";

interface ButtonProps {
  readonly href: string;
  readonly label: string;
  readonly variant: ButtonVariant;
  readonly size?: ButtonSize;
  readonly target?: "_self" | "_blank";
  readonly icon?: ReactNode;
  readonly className?: string;
  readonly onClick?: () => void;
}

export const Button = ({
  href,
  label,
  variant,
  size = "default",
  target = "_self",
  icon,
  className,
  onClick,
}: ButtonProps) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noreferrer" : undefined}
    className={cn(getButtonClassName(variant, size), className)}
    onClick={onClick}
  >
    {icon}
    {label}
  </a>
);
