import type { Metadata } from "next";
import { FramesParallax } from "@/components/frames-parallax";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WORK_PROJECT_COUNT } from "@/lib/work-projects";
import styles from "./frames.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Frames",
  description:
    "Experimental frame studies and motion snippets by Viswanth Gudiwada.",
};

type FrameItem = {
  id: string;
  src: string;
  alt: string;
  type: "image" | "video";
};

const frames = [
  {
    id: "frame-01",
    src: "/images/frames/1.jpg",
    alt: "Frame artwork 1",
    type: "image",
  },
  {
    id: "frame-02",
    src: "/images/frames/2.jpg",
    alt: "Frame artwork 2",
    type: "image",
  },
  {
    id: "frame-03",
    src: "/images/frames/2.mp4",
    alt: "Frame motion piece 3",
    type: "video",
  },
  {
    id: "frame-04",
    src: "/images/frames/3.jpg",
    alt: "Frame artwork 4",
    type: "image",
  },
  {
    id: "frame-05",
    src: "/images/frames/4.jpg",
    alt: "Frame artwork 5",
    type: "image",
  },
  {
    id: "frame-06",
    src: "/images/frames/4.mp4",
    alt: "Frame motion piece 6",
    type: "video",
  },
  {
    id: "frame-07",
    src: "/images/frames/5.jpg",
    alt: "Frame artwork 7",
    type: "image",
  },
  {
    id: "frame-08",
    src: "/images/frames/6.jpg",
    alt: "Frame artwork 8",
    type: "image",
  },
  {
    id: "frame-09",
    src: "/images/frames/7.jpg",
    alt: "Frame artwork 9",
    type: "image",
  },
  {
    id: "frame-10",
    src: "/images/frames/8.jpg",
    alt: "Frame artwork 10",
    type: "image",
  },
  {
    id: "frame-11",
    src: "/images/frames/9-Fanta-Frames.mp4",
    alt: "Frame motion piece 11",
    type: "video",
  },
  {
    id: "frame-12",
    src: "/images/frames/10-Gifs.mp4",
    alt: "Frame motion piece 12",
    type: "video",
  },
] satisfies FrameItem[];

export default function FramesPage() {
  return (
    <main className={styles.page}>
      <FramesParallax />
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        workCount={WORK_PROJECT_COUNT}
      />

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
                <div
                  className={`${styles.mediaWrap} ${
                    frame.type === "image" ? "img-container" : ""
                  }`}
                >
                  {frame.type === "video" ? (
                    <video
                      className={styles.media}
                      src={frame.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={frame.alt}
                    />
                  ) : (
                    <img
                      className={styles.media}
                      src={frame.src}
                      alt={frame.alt}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter
        id="footer"
        emailHref="mailto:hello@example.com"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
