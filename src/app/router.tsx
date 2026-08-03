import { HashRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/app/scroll-to-top";
import { HomePage } from "@/pages/home-page";
import { MognoAiCasePage } from "@/pages/mogno-ai-case-page";
import { AccountfyAiAnalyticsCasePage } from "@/pages/accountfy-ai-analytics-case-page";
import { AccountfyFpaCasePage } from "@/pages/accountfy-fpa-case-page";
import { EuphoriaBiCasePage } from "@/pages/euphoria-bi-case-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const AppRouter = () => (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cases/mogno-ai" element={<MognoAiCasePage />} />
      <Route
        path="/cases/accountfy-ai-analytics"
        element={<AccountfyAiAnalyticsCasePage />}
      />
      <Route path="/cases/accountfy-fpa" element={<AccountfyFpaCasePage />} />
      <Route path="/cases/euphoria-bi" element={<EuphoriaBiCasePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
