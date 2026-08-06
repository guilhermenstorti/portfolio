import type { CaseName } from "@/lib/analytics/types";

const PAGE_NAMES: Record<string, string> = {
  "/": "homepage",
  "/cases/mogno-ai": "case_mogno_ai",
  "/cases/accountfy-ai-analytics": "case_accountfy_ai",
  "/cases/accountfy-fpa": "case_accountfy_fpa",
  "/cases/euphoria-bi": "case_euphoria_bi",
};

const CASE_NAMES_BY_PATH: Record<string, CaseName> = {
  "/cases/mogno-ai": "mogno_ai",
  "/cases/accountfy-ai-analytics": "accountfy_ai",
  "/cases/accountfy-fpa": "accountfy_fpa",
  "/cases/euphoria-bi": "euphoria_bi",
};

export const getPageNameFromPath = (pathname: string): string => PAGE_NAMES[pathname] ?? "unknown";

export const getCaseNameFromPath = (pathname: string): CaseName | null =>
  CASE_NAMES_BY_PATH[pathname] ?? null;
