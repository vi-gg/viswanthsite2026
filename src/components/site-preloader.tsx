"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./site-preloader.module.css";

const FULL_MIN_VISIBLE_MS = 2200;
const QUICK_MIN_VISIBLE_MS = 260;
const PROGRESS_STEP_MS = 32;
const SESSION_SEEN_KEY = "viswanth_preloader_seen_v1";
const SWIPE_OUT_MS = 1100;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const startedAtRef = useRef<number>(Date.now());
  const isLoadedRef = useRef<boolean>(false);
  const isQuickModeRef = useRef<boolean>(false);
  const minVisibleRef = useRef<number>(FULL_MIN_VISIBLE_MS);
  const fadeTimerRef = useRef<number | null>(null);

  const progressLabel = useMemo(() => `${Math.round(progress)}%`, [progress]);

  useEffect(() => {
    try {
      const navigationEntry = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      const isReload = navigationEntry?.type === "reload";
      const hasSeenPreloader = window.sessionStorage.getItem(SESSION_SEEN_KEY) === "1";

      let isFromWorkOrAbout = false;
      if (document.referrer) {
        const referrer = new URL(document.referrer);
        if (referrer.origin === window.location.origin) {
          const pathname = referrer.pathname.toLowerCase();
          isFromWorkOrAbout =
            pathname === "/work" ||
            pathname.startsWith("/work/") ||
            pathname === "/about" ||
            pathname.startsWith("/about/");
        }
      }

      const shouldQuickMode = hasSeenPreloader || isReload || isFromWorkOrAbout;
      isQuickModeRef.current = shouldQuickMode;
      minVisibleRef.current = shouldQuickMode ? QUICK_MIN_VISIBLE_MS : FULL_MIN_VISIBLE_MS;
      window.sessionStorage.setItem(SESSION_SEEN_KEY, "1");
    } catch {
      isQuickModeRef.current = false;
      minVisibleRef.current = FULL_MIN_VISIBLE_MS;
    }

    const markLoaded = () => {
      isLoadedRef.current = true;
    };

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }

    const tick = window.setInterval(() => {
      setProgress((current) => {
        const elapsed = Date.now() - startedAtRef.current;
        const hardCap = isLoadedRef.current ? 100 : isQuickModeRef.current ? 94 : 92;
        const next =
          current +
          (isQuickModeRef.current
            ? elapsed < 160
              ? 10
              : elapsed < 360
                ? 6
                : 3
            : elapsed < 420
              ? 3
              : elapsed < 1400
                ? 1.25
                : 0.45);
        return clamp(next, 0, hardCap);
      });
    }, PROGRESS_STEP_MS);

    return () => {
      window.clearInterval(tick);
      window.removeEventListener("load", markLoaded);
    };
  }, []);

  useEffect(() => {
    if (!isLoadedRef.current || progress < 100) {
      return;
    }

    const elapsed = Date.now() - startedAtRef.current;
    const delay = Math.max(0, minVisibleRef.current - elapsed);

    const hideTimer = window.setTimeout(() => {
      setIsHiding(true);
      fadeTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, SWIPE_OUT_MS);
    }, delay);

    return () => {
      window.clearTimeout(hideTimer);
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }
    };
  }, [progress]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.overlay} ${isHiding ? styles.overlayHiding : ""}`} aria-hidden="true">
      <div className={styles.row}>
        <p className={styles.label}>LOADING</p>
        <p className={styles.percent}>{progressLabel}</p>
      </div>
    </div>
  );
}
