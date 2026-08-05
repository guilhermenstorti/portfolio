import { BrainIcon, CloseIcon } from "@/components/ui/icons";

interface ToastProps {
  readonly message: string;
  readonly isVisible: boolean;
  readonly onDismiss: () => void;
}

export const Toast = ({ message, isVisible, onDismiss }: ToastProps) => (
  <div
    role="status"
    aria-live="polite"
    className={`fixed bottom-6 left-6 z-50 flex max-w-sm items-start gap-3 rounded-card border border-border-soft bg-contrast p-4 text-contrast-foreground shadow-lg transition-opacity duration-300 ${
      isVisible ? "toast-slide-in pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
    }`}
  >
    <BrainIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
    <p className="text-sm leading-snug">{message}</p>
    <button
      type="button"
      onClick={onDismiss}
      aria-label="Fechar aviso"
      className="shrink-0 text-contrast-dim transition-colors hover:text-contrast-foreground"
    >
      <CloseIcon className="h-4 w-4" />
    </button>
  </div>
);
