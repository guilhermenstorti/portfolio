import { useEffect, useRef } from "react";
import { trackCompanyLogoHovered } from "@/lib/analytics";

interface CompanyLogo {
  readonly name: string;
  readonly slug: string;
}

interface LogoMarqueeProps {
  readonly logos: readonly CompanyLogo[];
}

const LOGO_IMAGE_CLASSES =
  "h-14 w-auto shrink-0 grayscale-[55%] opacity-90 transition hover:grayscale-0 hover:opacity-100";
const SPEED_PX_PER_SECOND = 44;

export const LogoMarquee = ({ logos }: LogoMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);
  const hoverStartRef = useRef<Record<string, number>>({});

  const handleLogoHoverStart = (slug: string) => {
    hoverStartRef.current[slug] = Date.now();
  };

  const handleLogoHoverEnd = (logo: CompanyLogo) => {
    const startedAt = hoverStartRef.current[logo.slug];
    if (!startedAt) {
      return;
    }
    delete hoverStartRef.current[logo.slug];
    trackCompanyLogoHovered({ companyName: logo.name, hoverDurationMs: Date.now() - startedAt });
  };

  useEffect(() => {
    const setElement = setRef.current;
    if (!setElement) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) {
        distanceRef.current = width;
      }
    });

    resizeObserver.observe(setElement);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionQuery.matches) {
      return;
    }

    let frameId: number;
    let lastTimestamp: number | null = null;

    const step = (timestamp: number) => {
      const distance = distanceRef.current;
      if (lastTimestamp !== null && distance > 0 && !isPausedRef.current) {
        const deltaSeconds = (timestamp - lastTimestamp) / 1000;
        positionRef.current = (positionRef.current + SPEED_PX_PER_SECOND * deltaSeconds) % distance;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
        }
      }
      lastTimestamp = timestamp;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className="logo-marquee-fade overflow-hidden"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div ref={trackRef} className="flex w-max items-center will-change-transform">
        <div ref={setRef} className="flex shrink-0 items-center gap-10 pr-10">
          {logos.map((logo) => (
            <img
              key={logo.slug}
              src={`/portfolio/assets/img/logos/${logo.slug}.png`}
              alt={logo.name}
              className={LOGO_IMAGE_CLASSES}
              onMouseEnter={() => handleLogoHoverStart(logo.slug)}
              onMouseLeave={() => handleLogoHoverEnd(logo)}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
          {logos.map((logo) => (
            <img
              key={logo.slug}
              src={`/portfolio/assets/img/logos/${logo.slug}.png`}
              alt=""
              className={LOGO_IMAGE_CLASSES}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
