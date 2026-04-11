import type { Metadata } from "next";
import { ShowreelPlayer } from "@/components/showreel-player";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WORK_PROJECT_COUNT } from "@/lib/work-projects";
import styles from "./page.module.css";

const imgHeroSection = "/images/home/home-hero-artwork.png";
const homeShowreelSrc = "/images/home/Showreel-07-april-2026.mp4";
const homeShowreelPosterSrc = "/home-video-thumbnail.png";
const homeShowreelCaptionsSrc = "/videos/captions/home-showreel-en.vtt";
const imgFramesOne = "/images/home/frames-01-thumbnail.png";
const imgFramesTwo = "/images/home/ooh2.mp4";
const imgFramesThree = "/images/home/Nenu-Saitham.png";

type WorkItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoWebmSrc?: string;
  posterSrc?: string;
  bgColor?: string;
};

const workItems: WorkItem[] = [
  {
    id: "adaps-it",
    title: "Adaps IT",
    description:
      "Shaping Adaps’ visual identity for the next era of australian technology",
    href: "/project/adaps-it",
    bgColor: "#056cf2",
    videoSrc: "/thumbnails/Adaps.mp4",
    posterSrc: "/videos/posters/Adaps.jpg",
  },
  {
    id: "sanctuary-in-the-woods",
    title: "Sanctuary in the Woods",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
    href: "/project/sanctuary-in-the-woods",
    imageSrc: "/thumbnails/SITW.png",
    imageAlt: "Sanctuary in the Woods artwork",
  },
  {
    id: "elora",
    title: "Elora",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
    href: "/project/elora",
    imageSrc: "/thumbnails/Elora.png",
    imageAlt: "Elora artwork",
  },
  {
    id: "helios-stones-2024",
    title: "Helios Stone",
    description:
      "Crafting Timeless Elegance: Establishing an enduring identity for a luxury stone brand",
    href: "/project/helios-stones",
    videoSrc: "/thumbnails/Helios%20Thumbnail.mp4",
  },
];

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Brand identity and motion work by Viswanth Gudiwada, including selected projects, experiments, and contact information.",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        workCount={WORK_PROJECT_COUNT}
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introCopy}>
            <span>Hello! I&apos;m Viswanth.</span>
            <span>Self-Taught Graphic Designer.</span>
          </p>
        </div>
        <div className={styles.heroImageWrap}>
          <ShowreelPlayer
            src={homeShowreelSrc}
            posterSrc={homeShowreelPosterSrc}
            title="Home showreel"
            captionsSrc={homeShowreelCaptionsSrc}
          />
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.container}>
          <h1 className={styles.workTitle}>WORK</h1>
          <p className={styles.workSubtitle}>
            Partnering with visionary brands to build meaningful identities that
            solve real problems, inspire people, and enhance experiences.
          </p>

          <ul className={styles.workGrid}>
            {workItems.map((item) => (
              <li key={item.id} className={styles.workCard}>
                <a href={item.href} className={styles.workCardLink}>
                  <div
                    className={styles.workPlaceholder}
                    style={
                      item.bgColor
                        ? { backgroundColor: item.bgColor }
                        : undefined
                    }
                  >
                    {item.videoSrc ? (
                      <video
                        className={styles.workMedia}
                        poster={item.posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        disablePictureInPicture
                      >
                        {item.videoWebmSrc ? (
                          <source src={item.videoWebmSrc} type="video/webm" />
                        ) : null}
                        <source src={item.videoSrc} type="video/mp4" />
                      </video>
                    ) : null}
                    {!item.videoSrc && item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        className={styles.workMedia}
                      />
                    ) : null}
                  </div>
                  <p className={styles.workCardTitle}>{item.title}</p>
                  <p className={styles.workCardText}>{item.description}</p>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.workActions}>
            <a href="/work" className={styles.cta}>
              ALL PROJECTS
            </a>
          </div>
        </div>
      </section>

      <section id="frames" className={styles.framesSection}>
        <div className={styles.container}>
          <h2 className={styles.framesTitle}>FRAMES</h2>
          <p className={styles.framesSubtitle}>
            My experiments with type, motion design, design concepts that did
            not make the final cut and fun explorations.
          </p>

          <ul className={styles.framesGrid}>
            <li className={styles.frameCard}>
              <img src={imgFramesOne} alt="Frames experiment one" />
            </li>
            <li className={styles.frameCard}>
              <video
                src={imgFramesTwo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </li>
            <li className={styles.frameCard}>
              <img src={imgFramesThree} alt="Frames experiment three" />
            </li>
          </ul>

          <div className={styles.framesActions}>
            <a href="/frames" className={styles.cta}>
              VIEW FRAMES
            </a>
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
