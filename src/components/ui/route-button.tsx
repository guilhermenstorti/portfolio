import { Link } from "react-router-dom";
import { getButtonClassName, type ButtonVariant } from "@/components/ui/button-styles";

interface RouteButtonProps {
  readonly to: string;
  readonly label: string;
  readonly variant: ButtonVariant;
  readonly onClick?: () => void;
}

export const RouteButton = ({ to, label, variant, onClick }: RouteButtonProps) => (
  <Link to={to} className={getButtonClassName(variant)} onClick={onClick}>
    {label}
  </Link>
);
