interface LearningItemProps {
  readonly title: string;
  readonly text: string;
}

export const LearningItem = ({ title, text }: LearningItemProps) => (
  <div className="rounded-r-lg border-l-4 border-accent bg-card px-5 py-4">
    <p className="font-semibold text-foreground">{title}</p>
    <p className="mt-1 text-muted">{text}</p>
  </div>
);
