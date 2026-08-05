import { useState, type AnimationEvent } from "react";

const TOSS_ANIMATION_NAME = "coin-toss";

interface CoinFlip {
  readonly isFlipping: boolean;
  readonly triggerFlip: () => void;
  readonly handleAnimationEnd: (event: AnimationEvent<HTMLButtonElement>) => void;
}

export const useCoinFlip = (onFlipComplete: () => void): CoinFlip => {
  const [isFlipping, setIsFlipping] = useState(false);

  const triggerFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
  };

  const handleAnimationEnd = (event: AnimationEvent<HTMLButtonElement>) => {
    if (event.animationName !== TOSS_ANIMATION_NAME) return;
    setIsFlipping(false);
    onFlipComplete();
  };

  return { isFlipping, triggerFlip, handleAnimationEnd };
};
