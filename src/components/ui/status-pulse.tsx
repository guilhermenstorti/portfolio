export const StatusPulse = () => (
  <span className="relative inline-flex h-3 w-3" role="img" aria-label="Status online">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green" />
  </span>
);
