"use client";

import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from "./in-view-dual-text.module.css";

type InViewDualTextProps = {
  text: string;
  className?: string;
  revealOnce?: boolean;
};

export function InViewDualText({
  text,
  className,
  revealOnce = true,
}: InViewDualTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const letters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const node = wordRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        if (revealOnce) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [revealOnce]);

  return (
    <span
      ref={wordRef}
      className={`${styles.root} ${isVisible ? styles.visible : ""} ${
        className ?? ""
      }`.trim()}
    >
      <span className={styles.srOnly}>{text}</span>
      <span className={styles.dualWord} aria-hidden="true">
        <span className={`${styles.word} ${styles.wordTop}`}>
          {letters.map((char, index) => (
            <span
              key={`top-${char}-${index}`}
              className={styles.letter}
              style={{ "--i": index } as CSSProperties}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className={`${styles.word} ${styles.wordBottom}`}>
          {letters.map((char, index) => (
            <span
              key={`bottom-${char}-${index}`}
              className={styles.letter}
              style={{ "--i": index } as CSSProperties}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
