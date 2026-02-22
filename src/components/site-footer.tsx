"use client";

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./site-footer.module.css";

type SocialLink = {
  id: string;
  label: string;
  href: string;
};

type SiteFooterProps = {
  id?: string;
  emailHref: string;
  socialLinks: SocialLink[];
  copyright: string;
  impactText: string;
};

export function SiteFooter({
  id,
  emailHref,
  socialLinks,
  copyright,
  impactText,
}: SiteFooterProps) {
  const impactWrapRef = useRef<HTMLDivElement>(null);
  const impactMeasureRef = useRef<HTMLSpanElement>(null);
  const [impactSize, setImpactSize] = useState<number | null>(null);

  const recalculateImpactSize = useCallback(() => {
    const impactWrap = impactWrapRef.current;
    const impactMeasure = impactMeasureRef.current;

    if (!impactWrap || !impactMeasure) {
      return;
    }

    const containerWidth = impactWrap.clientWidth;
    const measurementBaseSize = 100;

    if (containerWidth <= 0) {
      return;
    }

    impactMeasure.textContent = impactText;
    impactMeasure.style.fontSize = `${measurementBaseSize}px`;
    const measuredWidth = impactMeasure.getBoundingClientRect().width;

    if (measuredWidth <= 0) {
      return;
    }

    const nextSize = Math.max(
      28,
      Math.min(168, (containerWidth / measuredWidth) * measurementBaseSize),
    );

    setImpactSize((currentSize) => {
      if (currentSize !== null && Math.abs(currentSize - nextSize) < 0.1) {
        return currentSize;
      }
      return nextSize;
    });
  }, [impactText]);

  useEffect(() => {
    recalculateImpactSize();
    const impactWrap = impactWrapRef.current;

    if (!impactWrap) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      recalculateImpactSize();
    });

    resizeObserver.observe(impactWrap);

    return () => {
      resizeObserver.disconnect();
    };
  }, [recalculateImpactSize]);

  useEffect(() => {
    recalculateImpactSize();

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        recalculateImpactSize();
      });
    }
  }, [recalculateImpactSize]);

  const impactStyle: CSSProperties | undefined =
    impactSize === null
      ? undefined
      : ({ "--impact-size": `${impactSize}px` } as CSSProperties);

  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <a className={styles.sayHello} href={emailHref}>
            say hello <span aria-hidden="true">&#8594;</span>
          </a>
          <ul className={styles.socials}>
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a href={social.href}>{social.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copyright}>{copyright}</p>
        <div className={styles.impactWrap} ref={impactWrapRef}>
          <p className={styles.impact} style={impactStyle}>
            {impactText}
          </p>
          <span
            ref={impactMeasureRef}
            className={styles.impactMeasure}
            aria-hidden="true"
          >
            {impactText}
          </span>
        </div>
      </div>
    </footer>
  );
}
