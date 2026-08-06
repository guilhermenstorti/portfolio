import { useTranslation } from 'react-i18next';
import { QuickScanField } from "@/features/quick-scan/components/quick-scan-field";
import { QuickScanActions } from "@/features/quick-scan/components/quick-scan-actions";
import { StatPanel } from "@/components/ui/stat-panel";
import { ChevronsUpIcon, LaunchingRocketIcon } from "@/components/ui/icons";
import { useSectionTracking } from "@/hooks/use-section-tracking";

interface TextField {
  readonly label: string;
  readonly value: string;
  readonly fullWidth?: boolean;
}

const withTrend = (value: string) => (
  <span className="inline-flex items-center gap-1.5">
    {value}
    <ChevronsUpIcon className="h-3.5 w-3.5 text-green opacity-90" />
  </span>
);

export const QuickScanSection = () => {
  const { t } = useTranslation('quickScan');
  const sectionRef = useSectionTracking<HTMLElement>("quickscan");

  const TEXT_FIELDS: readonly TextField[] = [
    {
      label: t('experience'),
      value: t('experienceValue'),
    },
    {
      label: t('companies'),
      value: t('companiesValue'),
    },
    {
      label: t('specialties'),
      value: t('specialtiesValue'),
    },
    {
      label: t('education'),
      value: t('educationValue'),
    },
    { label: t('languages'), value: t('languagesValue') },
    {
      label: t('availability'),
      value: t('availabilityValue'),
    },
    {
      label: t('technicalDifference'),
      value: t('technicalDifferenceValue'),
      fullWidth: true,
    },
  ];

  const RESULT_STATS = [
    {
      value: <LaunchingRocketIcon className="h-8 w-8 text-green" />,
      label: t('aiProductLaunched'),
    },
    { value: withTrend("+11%"), label: t('revenueUpsell') },
    { value: withTrend("-22%"), label: t('supportTickets') },
    { value: withTrend("-5pp"), label: t('churnReduction') },
    { value: withTrend("-32,5%"), label: t('delinquencyReduction') },
    { value: withTrend("-85%"), label: t('onboardingTime') },
  ];

  return (
    <section ref={sectionRef} className="px-12 py-16">
      <div className="mx-auto max-w-content">
        <h2 className="text-3xl text-foreground">{t('title')}</h2>
        <p className="mt-4 max-w-[900px] text-muted">
          {t('subtitle')}
        </p>

      <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
        {TEXT_FIELDS.map((field) => (
          <QuickScanField
            key={field.label}
            label={field.label}
            className={
              field.fullWidth
                ? "border-l-4 border-accent bg-card sm:col-span-3"
                : undefined
            }
          >
            {field.value}
          </QuickScanField>
        ))}
      </div>

      <div className="mt-8">
        <StatPanel items={RESULT_STATS} />
      </div>

      <QuickScanActions />
    </div>
    </section>
  );
};
