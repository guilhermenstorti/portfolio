import type { CSSProperties } from "react";
import { TargetIcon } from "@/components/ui/icons";
import { useParallaxTilt } from "@/features/hero/hooks/use-parallax-tilt";
import { useCoinFlip } from "@/features/hero/hooks/use-coin-flip";

interface ProfileAvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly onFlipComplete: () => void;
}

export const ProfileAvatar = ({ src, alt, onFlipComplete }: ProfileAvatarProps) => {
  const { sceneRef, offset, handleMouseMove, resetOffset } = useParallaxTilt();
  const { isFlipping, triggerFlip, handleAnimationEnd } = useCoinFlip(onFlipComplete);

  const tiltStyle: CSSProperties = {
    transform: `rotateX(${offset.rotateX}deg) rotateY(${offset.rotateY}deg)`,
  };

  return (
    <div
      ref={sceneRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetOffset}
      className="profile-avatar-scene relative mx-auto h-[123px] w-[123px]"
    >
      <div style={tiltStyle} className="profile-avatar-tilt h-full w-full">
        <button
          type="button"
          onClick={triggerFlip}
          onAnimationEnd={handleAnimationEnd}
          aria-label={`Foto de perfil de ${alt} — clique para girar como uma moeda`}
          className={`profile-avatar-toss relative block h-full w-full ${isFlipping ? "is-flipping" : ""}`}
        >
          <div className="avatar-ring-liquid relative h-full w-full overflow-hidden rounded-full border-[3px] border-transparent">
            <div
              className={`profile-avatar-spin relative h-full w-full ${isFlipping ? "is-flipping" : ""}`}
            >
              <span className="profile-avatar-face absolute inset-0">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="profile-avatar-face profile-avatar-face-back absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent to-warn text-background">
                <TargetIcon className="h-10 w-10" />
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
