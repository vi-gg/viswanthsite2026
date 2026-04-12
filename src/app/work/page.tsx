import type { Metadata } from "next";
import Link from "next/link";
import { InViewDualText } from "@/components/in-view-dual-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { SmartImage } from "@/components/smart-image";
import { SmartVideo } from "@/components/smart-video";
import { WORK_PROJECT_COUNT, visibleWorkProjects } from "@/lib/work-projects";
import styles from "./work.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by Viswanth Gudiwada",
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        tone="inverted"
        workCount={WORK_PROJECT_COUNT}
      />

      <section className={styles.hero} aria-label="Intro">
        <div className={styles.heroTitleWrap}>
          <h1 className={styles.heroTitle}>
            <InViewDualText text="WORK" />
          </h1>
        </div>
        <p className={styles.heroDescription}>
          My work sits at the intersection of visual design, motion, and
          storytelling, spanning brand identity systems, motion identities,
          packaging, and publication design.
        </p>
      </section>

      <section
        id="work-grid"
        className={styles.gridSection}
        aria-label="Project grid"
      >
        <div className={styles.container}>
          <div className={styles.gridInner}>
            <ul className={styles.grid}>
              {visibleWorkProjects.map((project) => (
                <li key={project.id} className={styles.card}>
                  <Link href={project.href} className={styles.cardLink}>
                    <div
                      className={styles.media}
                      style={
                        project.bgColor
                          ? { backgroundColor: project.bgColor }
                          : undefined
                      }
                    >
                      {project.videoSrc ? (
                        <SmartVideo
                          className={styles.video}
                          src={project.videoSrc}
                          poster={project.posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          disablePictureInPicture
                        />
                      ) : null}
                      {!project.videoSrc && project.imageSrc ? (
                        <SmartImage
                          className={styles.image}
                          src={project.imageSrc}
                          alt={project.imageAlt ?? project.label}
                        />
                      ) : null}
                    </div>
                    <p>{project.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
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
