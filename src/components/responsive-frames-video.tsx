"use client";

import { useEffect, useState } from "react";
import { SmartVideo } from "@/components/smart-video";

type ResponsiveFramesVideoProps = {
  className?: string;
  src: string;
  ariaLabel: string;
};

export function ResponsiveFramesVideo({
  className,
  src,
  ariaLabel,
}: ResponsiveFramesVideoProps) {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 760px), (pointer: coarse)",
    );

    const apply = () => {
      setShouldAutoplay(!mediaQuery.matches);
    };

    apply();
    mediaQuery.addEventListener("change", apply);

    return () => {
      mediaQuery.removeEventListener("change", apply);
    };
  }, []);

  return (
    <SmartVideo
      className={className}
      src={src}
      autoPlay={shouldAutoplay}
      muted
      loop
      playsInline
      preload={shouldAutoplay ? "metadata" : "none"}
      aria-label={ariaLabel}
    />
  );
}

