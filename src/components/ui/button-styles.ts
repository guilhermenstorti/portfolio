export type ButtonVariant = "primary" | "outline";

const BASE_BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-primary bg-white text-primary hover:bg-surface",
};

export function getButtonClassName(variant: ButtonVariant): string {
  return `${BASE_BUTTON_CLASSES} ${VARIANT_CLASSES[variant]}`;
}
