import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import styles from "./page.module.css";

const imgHeroSection =
  "https://www.figma.com/api/mcp/asset/213e00ca-4f5e-4e39-9c98-2bdb62e608c3";
const imgFramesOne =
  "https://www.figma.com/api/mcp/asset/b12ad52a-056f-428c-801a-ce27d25d95eb";
const imgFramesTwo =
  "https://www.figma.com/api/mcp/asset/8511c255-e12f-4690-b1a3-f2e8c3724572";
const imgFramesThree =
  "https://www.figma.com/api/mcp/asset/d6076b0d-2d3f-4b29-a4fe-50a607d12cd9";

type WorkItem = {
  id: string;
  title: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    id: "adaps-it",
    title: "Adaps IT",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
  {
    id: "sanctuary-in-the-woods",
    title: "Sanctuary in the Woods",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
  {
    id: "holmes-ai",
    title: "Holmes AI",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
  {
    id: "helios-stone",
    title: "Helios Stone",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
  {
    id: "rootcos",
    title: "Rootcos",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
  {
    id: "expertise",
    title: "Expertise",
    description:
      "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
  },
];

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "#footer" },
  { id: "contact", label: "CONTACT", href: "#footer" },
];

const socialLinks = [
  { id: "instagram", label: "INSTAGRAM", href: "https://instagram.com" },
  { id: "pinterest", label: "PINTEREST", href: "https://pinterest.com" },
  { id: "behance", label: "BEHANCE", href: "https://behance.net" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteNavbar leftLinks={leftNavLinks} rightLinks={rightNavLinks} />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introCopy}>
            <span>Hello! I&apos;m Viswanth.</span>
            <span>Self-Taught Graphic Designer.</span>
          </p>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src={imgHeroSection}
            alt="Hero artwork"
            className={styles.heroImage}
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
                <div className={styles.workPlaceholder} aria-hidden="true" />
                <p className={styles.workCardTitle}>{item.title}</p>
                <p className={styles.workCardText}>{item.description}</p>
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
              <img src={imgFramesTwo} alt="Frames experiment two" />
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
        emailHref="mailto:hello@example.com"
        socialLinks={socialLinks}
        copyright="© Viswanth Gudiwada 2025"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
