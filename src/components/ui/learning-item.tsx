interface LearningItemProps {
  readonly title: string;
  readonly text: string;
}

export const LearningItem = ({ title, text }: LearningItemProps) => (
  <div className="rounded-r-lg border-l-4 border-accent bg-blue-50 px-5 py-4">
    <p className="font-semibold text-primary">{title}</p>
    <p className="mt-1 text-ink-light">{text}</p>
  </div>
);
