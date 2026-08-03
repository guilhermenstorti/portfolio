import { Link } from "react-router-dom";
import { getButtonClassName, type ButtonVariant } from "@/components/ui/button-styles";

interface RouteButtonProps {
  readonly to: string;
  readonly label: string;
  readonly variant: ButtonVariant;
}

export const RouteButton = ({ to, label, variant }: RouteButtonProps) => (
  <Link to={to} className={getButtonClassName(variant)}>
    {label}
  </Link>
);
