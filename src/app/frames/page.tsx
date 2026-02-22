import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import styles from "./frames.module.css";

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

const frames = [
  { id: "frame-01" },
  { id: "frame-02" },
  { id: "frame-03" },
  { id: "frame-04" },
  { id: "frame-05" },
  { id: "frame-06" },
];

export default function FramesPage() {
  return (
    <main className={styles.page}>
      <SiteNavbar leftLinks={leftNavLinks} rightLinks={rightNavLinks} />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>FRAMES</h1>
          <p className={styles.subtitle}>
            Showcasing my experiments with type, motiondesign, design concepts
            that did not make the final cut and fun explorations.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <ul className={styles.gallery}>
            {frames.map((frame) => (
              <li key={frame.id} className={styles.card}>
                <div className={styles.placeholder} aria-hidden="true" />
              </li>
            ))}
          </ul>
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
