import { useEffect } from "react";
import { identifyContactFromToken } from "@/lib/analytics";

const TOKEN_PARAM = "t";

export function useContactIdentification(): void {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get(TOKEN_PARAM);

    if (token) {
      identifyContactFromToken(token);
    }
  }, []);
}
