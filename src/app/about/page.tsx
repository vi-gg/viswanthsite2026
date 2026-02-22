import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import styles from "./about.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "#footer" },
];

const socialLinks = [
  { id: "instagram", label: "INSTAGRAM", href: "https://instagram.com" },
  { id: "pinterest", label: "PINTEREST", href: "https://pinterest.com" },
  { id: "behance", label: "BEHANCE", href: "https://behance.net" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteNavbar leftLinks={leftNavLinks} rightLinks={rightNavLinks} />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.aboutTitle}>ABOUT</h1>
          <p className={styles.introCopy}>
            <span>Hello! I&apos;m Viswanth.</span>
            <span>Self-Taught Graphic Designer.</span>
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.contentGrid}>
              <div className={styles.portraitPlaceholder} aria-hidden="true" />
              <div className={styles.contentRight}>
                <p>
                  A brand identity and motion designer based in Vijayawada. Over
                  the last 4+ years, I&apos;ve had the opportunity to work with
                  design studios, founders, and creative teams across India,
                  collaborating closely to build brand identities that are not
                  just visually strong, but strategically grounded and
                  emotionally resonant.
                </p>
                <p>
                  My work sits at the intersection of visual design, motion, and
                  storytelling, spanning brand identity systems, motion
                  identities, packaging, and publication design.
                </p>
                <p>
                  Outside of client work, I&apos;m often exploring Indian type,
                  designing experimental visuals, or animating just for fun.
                </p>
                <a href="/resume.pdf" className={styles.resumeButton}>
                  VIEW MY RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter
        id="footer"
        emailHref="mailto:hello@example.com"
        socialLinks={socialLinks}
        copyright="© Viswanth Gudiwada 2025"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
