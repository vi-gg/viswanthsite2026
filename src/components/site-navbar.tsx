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
};

export function SiteNavbar({
  leftLinks,
  rightLinks,
  tone = "default",
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
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <ul className={styles.navGroup}>
              {rightLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

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
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
