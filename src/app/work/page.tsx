import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
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
          <h1 className={styles.heroTitle}>WORK</h1>
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
                    <video
                      className={styles.video}
                      poster={project.posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      disablePictureInPicture
                    >
                      {project.videoWebmSrc ? (
                        <source src={project.videoWebmSrc} type="video/webm" />
                      ) : null}
                      <source src={project.videoSrc} type="video/mp4" />
                    </video>
                  ) : null}
                  {!project.videoSrc && project.imageSrc ? (
                    <img
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
      </section>

      <SiteFooter
        id="footer"
        emailHref="mailto:hello@example.com"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
