const MAX_PERCENT = 100;

export const getScrollDepthPct = (): number => {
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  if (scrollableHeight <= 0) {
    return MAX_PERCENT;
  }
  const rawPct = (window.scrollY / scrollableHeight) * MAX_PERCENT;
  return Math.min(MAX_PERCENT, Math.max(0, Math.floor(rawPct)));
};
