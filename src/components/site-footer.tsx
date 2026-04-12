"use client";

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { InViewDualText } from "./in-view-dual-text";
import styles from "./site-footer.module.css";

type SocialLink = {
  id: string;
  label: string;
  href: string;
};

type SiteFooterProps = {
  id?: string;
  emailHref: string;
  socialLinks?: SocialLink[];
  copyright?: string;
  impactText: string;
};

const defaultSocialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "INSTAGRAM",
    href: "https://www.instagram.com/viswanthgudiwada_/",
  },
  {
    id: "pinterest",
    label: "PINTEREST",
    href: "https://in.pinterest.com/viswanthgudiwada_/",
  },
  { id: "giphy", label: "GIPHY", href: "https://giphy.com/viswanthg" },
];

export function SiteFooter({
  id,
  emailHref,
  socialLinks,
  copyright,
  impactText,
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright ?? `© Viswanth Gudiwada ${currentYear}`;
  const links = socialLinks ?? defaultSocialLinks;

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
      12,
      ((containerWidth - 2) / measuredWidth) * measurementBaseSize,
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
            <span>say hello</span>
            <svg
              width="33"
              height="23"
              viewBox="0 0 33 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className={styles.sayHelloArrow}
            >
              <path
                d="M32.0607 12.1075C32.6464 11.5217 32.6464 10.572 32.0607 9.98621L22.5147 0.440273C21.9289 -0.145514 20.9792 -0.145514 20.3934 0.440273C19.8076 1.02606 19.8076 1.97581 20.3934 2.56159L28.8787 11.0469L20.3934 19.5322C19.8076 20.1179 19.8076 21.0677 20.3934 21.6535C20.9792 22.2393 21.9289 22.2393 22.5147 21.6535L32.0607 12.1075ZM0 11.0469V12.5469H31V11.0469V9.54688H0V11.0469Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <ul className={styles.socials}>
            {links.map((social) => (
              <li key={social.id}>
                <a href={social.href}>{social.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copyright}>{copyrightText}</p>
        <div className={styles.impactWrap} ref={impactWrapRef}>
          <p className={styles.impact} style={impactStyle}>
            <InViewDualText text={impactText} className={styles.impactReveal} />
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
