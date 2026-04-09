"use client";

import { useEffect } from "react";

export function FramesParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let isMounted = true;
    let cleanup = () => {};

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const containers = gsap.utils.toArray<HTMLElement>(".img-container");
      const tweens = containers
        .map((container) => {
          const img = container.querySelector("img");

          if (!img) {
            return null;
          }

          return gsap.fromTo(
            img,
            { yPercent: -6, scale: 1.06, ease: "none" },
            {
              yPercent: 6,
              scale: 1.06,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        })
        .filter(Boolean);

      ScrollTrigger.refresh();

      cleanup = () => {
        for (const tween of tweens) {
          tween?.kill();
        }
      };

      if (!isMounted) {
        cleanup();
      }
    })();

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return null;
}
