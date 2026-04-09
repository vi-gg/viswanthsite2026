"use client";

import { useEffect, useMemo, useState } from "react";
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
  const navToneClass =
    tone === "inverted" ? styles.navWrapInverted : styles.navWrapDefault;
  const menuToneClass =
    tone === "inverted" ? styles.mobileMenuInverted : styles.mobileMenuDefault;
  const allLinks = useMemo(
    () => [...leftLinks, ...rightLinks],
    [leftLinks, rightLinks],
  );
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
    const mediaQuery = window.matchMedia("(min-width: 993px)");

    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleDesktop);

    return () => {
      mediaQuery.removeEventListener("change", handleDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav
          aria-label="Primary"
          className={`${styles.navWrap} ${navToneClass}`}
        >
          <div className={styles.desktopLinks}>
            <ul className={styles.navGroup}>
              {leftLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{renderLabel(link)}</a>
                </li>
              ))}
            </ul>
            <a href="/" className={styles.brandLogo} aria-label="Home">
              <img
                src="/Viswanth%20Gudiwada%20Navbar%20Logo.svg"
                alt="Viswanth Gudiwada"
              />
            </a>
            <ul className={styles.navGroup}>
              {rightLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{renderLabel(link)}</a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/" className={styles.mobileBrandLogo} aria-label="Home">
            <img
              src="/Viswanth%20Gudiwada%20Navbar%20Logo.svg"
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
          {allLinks.map((link) => (
            <li key={link.id} className={styles.mobileNavItem}>
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
