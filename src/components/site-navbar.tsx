"use client";

import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { mediaAssetUrl } from "@/lib/media-asset";
import styles from "./site-navbar.module.css";

type NavLink = {
  id: string;
  label: string;
  href: string;
};

type SiteNavbarProps = {
  leftLinks: NavLink[];
  rightLinks: NavLink[];
  tone?: "default" | "inverted";
  workCount?: number;
};

export function SiteNavbar({
  leftLinks,
  rightLinks,
  tone = "default",
  workCount,
}: SiteNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const headerToneClass =
    tone === "inverted" ? styles.headerInverted : styles.headerDefault;
  const navToneClass =
    tone === "inverted" ? styles.navWrapInverted : styles.navWrapDefault;
  const menuToneClass =
    tone === "inverted" ? styles.mobileMenuInverted : styles.mobileMenuDefault;
  const allLinks = useMemo(
    () => [...leftLinks, ...rightLinks],
    [leftLinks, rightLinks],
  );
  const getLinkAriaLabel = (link: NavLink) => {
    if (link.id === "work" && workCount !== undefined) {
      return `${link.label} ${workCount}`;
    }

    return link.label;
  };

  const renderAnimatedLabel = (link: NavLink) => {
    const letters = Array.from(link.label);
    const workCountText = workCount?.toString();

    return (
      <span className={styles.desktopNavLabel}>
        <span className={styles.hoverWord} aria-hidden="true">
          <span className={`${styles.word} ${styles.wordTop}`}>
            {letters.map((char, index) => (
              <span
                key={`${link.id}-top-${char}-${index}`}
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
                key={`${link.id}-bottom-${char}-${index}`}
                className={styles.letter}
                style={{ "--i": index } as CSSProperties}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </span>
        {link.id === "work" && workCountText ? (
          <span className={styles.workCountHoverWrap} aria-hidden="true">
            <sup
              className={`${styles.workCount} ${styles.workCountDesktop} ${styles.workCountDesktopTop}`}
            >
              {workCountText}
            </sup>
            <sup
              className={`${styles.workCount} ${styles.workCountDesktop} ${styles.workCountDesktopBottom}`}
            >
              {workCountText}
            </sup>
          </span>
        ) : null}
      </span>
    );
  };

  const renderLabel = (link: NavLink) => {
    if (link.id !== "work" || workCount === undefined) {
      return link.label;
    }

    return (
      <span className={styles.workLabel}>
        <span>WORK</span>
        <sup className={styles.workCount}>{workCount}</sup>
      </span>
    );
  };

  useEffect(() => {
    const compactNavQuery = window.matchMedia(
      "(max-width: 760px), (max-height: 500px) and (orientation: landscape)",
    );

    const handleNavModeChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    };

    compactNavQuery.addEventListener("change", handleNavModeChange);

    return () => {
      compactNavQuery.removeEventListener("change", handleNavModeChange);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (isMenuOpen) {
        setIsNavHidden(false);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      if (currentScrollY <= 8) {
        setIsNavHidden(false);
      } else if (scrollDelta > 6) {
        setIsNavHidden(true);
      } else if (scrollDelta < -4) {
        setIsNavHidden(false);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateNavVisibility);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${headerToneClass} ${
        !isMenuOpen && isNavHidden ? styles.headerHidden : ""
      }`}
    >
      <div className={styles.container}>
        <nav
          aria-label="Primary"
          className={`${styles.navWrap} ${navToneClass}`}
        >
          <div className={styles.desktopLinks}>
            <ul className={styles.navGroup}>
              {leftLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={styles.desktopNavLink}
                    aria-label={getLinkAriaLabel(link)}
                  >
                    {renderAnimatedLabel(link)}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/" className={styles.brandLogo} aria-label="Home">
              <img
                src={mediaAssetUrl("/Viswanth%20Gudiwada%20Navbar%20Logo.svg")}
                alt="Viswanth Gudiwada"
              />
            </a>
            <ul className={styles.navGroup}>
              {rightLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={styles.desktopNavLink}
                    aria-label={getLinkAriaLabel(link)}
                  >
                    {renderAnimatedLabel(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/" className={styles.mobileBrandLogo} aria-label="Home">
            <img
              src={mediaAssetUrl("/Viswanth%20Gudiwada%20Navbar%20Logo.svg")}
              alt="Viswanth Gudiwada"
            />
          </a>

          <button
            type="button"
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuToneClass} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileNavList}>
          {allLinks.map((link, index) => (
            <li
              key={link.id}
              className={styles.mobileNavItem}
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {renderLabel(link)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
