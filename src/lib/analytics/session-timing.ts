let sessionStartTime: number | null = null;

export const getSessionStartTime = (): number => {
  if (sessionStartTime === null) {
    sessionStartTime = Date.now();
  }
  return sessionStartTime;
};

export const getSecondsSinceSessionStart = (): number =>
  Math.floor((Date.now() - getSessionStartTime()) / 1000);
