import { useCallback, useRef, useState } from "react";

const AUTO_DISMISS_MS = 5000;

interface ToastState {
  readonly message: string;
  readonly isVisible: boolean;
  readonly showToast: (message: string) => void;
  readonly hideToast: () => void;
}

export const useToast = (): ToastState => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dismissTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const hideToast = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showToast = useCallback(
    (nextMessage: string) => {
      clearTimeout(dismissTimeoutRef.current);
      setMessage(nextMessage);
      setIsVisible(true);
      dismissTimeoutRef.current = setTimeout(hideToast, AUTO_DISMISS_MS);
    },
    [hideToast],
  );

  return { message, isVisible, showToast, hideToast };
};
