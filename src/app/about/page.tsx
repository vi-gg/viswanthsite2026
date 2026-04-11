import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WORK_PROJECT_COUNT } from "@/lib/work-projects";
import styles from "./about.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Viswanth Gudiwada - a brand identity and motion designer based in Vijayawada.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        workCount={WORK_PROJECT_COUNT}
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.aboutTitle}>ABOUT</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.contentGrid}>
              <div className={styles.portraitPlaceholder}>
                <img
                  className={styles.portraitImage}
                  src="/viswanth-photo.png"
                  alt="Portrait of Viswanth"
                />
              </div>
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
                <a
                  href="/resume/Viswanth-Resume.pdf"
                  download
                  className={styles.resumeButton}
                >
                  VIEW MY RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter
        id="footer"
        emailHref="mailto:hello@viswanth.com"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
