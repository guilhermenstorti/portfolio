import type { DeviceType } from "@/lib/analytics/types";

const TABLET_MIN_WIDTH = 768;
const DESKTOP_MIN_WIDTH = 1024;

export const getDeviceType = (): DeviceType => {
  const width = window.innerWidth;
  if (width >= DESKTOP_MIN_WIDTH) {
    return "desktop";
  }
  if (width >= TABLET_MIN_WIDTH) {
    return "tablet";
  }
  return "mobile";
};

export const isMobileDevice = (): boolean => getDeviceType() !== "desktop";
