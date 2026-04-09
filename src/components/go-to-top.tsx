"use client";

import { useEffect, useState } from "react";
import styles from "./go-to-top.module.css";

const SHOW_AFTER_SCROLL_Y = 180;

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleGoTop}
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      aria-label="Go to top"
      title="Go to top"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.icon}
        fill="none"
      >
        <path
          d="M12 18V6M12 6L7.5 10.5M12 6L16.5 10.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
