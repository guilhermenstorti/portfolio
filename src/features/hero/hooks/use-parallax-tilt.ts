import { useRef, useState, type MouseEvent } from "react";

const MAX_TILT_DEGREES = 22;

interface TiltOffset {
  readonly rotateX: number;
  readonly rotateY: number;
}

const RESTING_OFFSET: TiltOffset = { rotateX: 0, rotateY: 0 };

interface ParallaxTilt {
  readonly sceneRef: React.RefObject<HTMLDivElement>;
  readonly offset: TiltOffset;
  readonly handleMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
  readonly resetOffset: () => void;
}

export const useParallaxTilt = (): ParallaxTilt => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<TiltOffset>(RESTING_OFFSET);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const bounds = scene.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    setOffset({
      rotateY: (relativeX - 0.5) * MAX_TILT_DEGREES,
      rotateX: (0.5 - relativeY) * MAX_TILT_DEGREES,
    });
  };

  const resetOffset = () => setOffset(RESTING_OFFSET);

  return { sceneRef, offset, handleMouseMove, resetOffset };
};
