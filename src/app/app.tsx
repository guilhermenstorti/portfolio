import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { AppRouter } from "@/app/router";
import { AnalyticsBootstrap } from "@/app/analytics-bootstrap";

export const App = () => (
  <I18nextProvider i18n={i18n}>
    <AnalyticsBootstrap />
    <AppRouter />
  </I18nextProvider>
);
