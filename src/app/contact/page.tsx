import type { Metadata } from "next";
import { InViewDualText } from "@/components/in-view-dual-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WORK_PROJECT_COUNT } from "@/lib/work-projects";
import styles from "./contact.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

const contactImages = [
  { id: "contact-1", src: "/Contact/1.png", alt: "Contact media 1" },
  { id: "contact-2", src: "/Contact/2.png", alt: "Contact media 2" },
  { id: "contact-3", src: "/Contact/3.png", alt: "Contact media 3" },
  { id: "contact-4", src: "/Contact/4.png", alt: "Contact media 4" },
  { id: "contact-5", src: "/Contact/5.png", alt: "Contact media 5" },
  { id: "contact-6", src: "/Contact/6.png", alt: "Contact media 6" },
  { id: "contact-7", src: "/Contact/7.png", alt: "Contact media 7" },
  { id: "contact-8", src: "/Contact/8.png", alt: "Contact media 8" },
  { id: "contact-9", src: "/Contact/9.png", alt: "Contact media 9" },
  { id: "contact-10", src: "/Contact/10.png", alt: "Contact media 10" },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Viswanth Gudiwada",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        workCount={WORK_PROJECT_COUNT}
      />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <InViewDualText text="CONTACT" />
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.subtitleLead}>
              Interested in working together? For work enquiries and
              availability
            </span>
            <span className={styles.subtitleEmail}>
              You can email me{" "}
              <a href="mailto:hello@viswanth.com" className={styles.emailLink}>
                hello@viswanth.com
              </a>
            </span>
          </p>
        </div>
      </section>

      <section className={styles.gridSection} aria-label="Contact placeholders">
        <div className={styles.container}>
          <div className={styles.gridInner}>
            <div className={styles.marqueeViewport}>
              <div className={styles.marqueeTrack}>
                <div className={styles.marqueeGroup}>
                  {contactImages.map((item) => (
                    <figure key={item.id} className={styles.card}>
                      <img
                        className={styles.cardImage}
                        src={item.src}
                        alt={item.alt}
                      />
                    </figure>
                  ))}
                </div>
                <div className={styles.marqueeGroup} aria-hidden="true">
                  {contactImages.map((item) => (
                    <figure key={`${item.id}-copy`} className={styles.card}>
                      <img
                        className={styles.cardImage}
                        src={item.src}
                        alt=""
                        aria-hidden="true"
                      />
                    </figure>
                  ))}
                </div>
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
