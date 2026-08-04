export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "default" | "nav";

const BASE_BUTTON_CLASSES = "inline-flex items-center justify-center gap-2 rounded-btn text-sm font-medium transition-colors";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-btn text-btn-foreground hover:bg-btn-hover",
  secondary: "border border-border-strong text-foreground hover:border-accent",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  default: "px-[22px] py-[13px]",
  nav: "px-[18px] py-[9px]",
};

export function getButtonClassName(variant: ButtonVariant, size: ButtonSize = "default"): string {
  return `${BASE_BUTTON_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]}`;
}
