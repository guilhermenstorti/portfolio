import { getButtonClassName, type ButtonVariant } from "@/components/ui/button-styles";

interface ButtonProps {
  readonly href: string;
  readonly label: string;
  readonly variant: ButtonVariant;
  readonly target?: "_self" | "_blank";
}

export const Button = ({ href, label, variant, target = "_self" }: ButtonProps) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noreferrer" : undefined}
    className={getButtonClassName(variant)}
  >
    {label}
  </a>
);
