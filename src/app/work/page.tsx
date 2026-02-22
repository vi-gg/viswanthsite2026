import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import styles from "./work.module.css";

const imgCardMock10 =
  "https://www.figma.com/api/mcp/asset/fc147bfb-3093-4606-b52b-1e99955485a9";
const imgCardMock11 =
  "https://www.figma.com/api/mcp/asset/fe07377b-676a-45e7-b050-b04fc8e96b5d";
const imgCardMock12 =
  "https://www.figma.com/api/mcp/asset/7a686257-775a-4e6f-9541-f08e538416c1";
const imgCardMock15 =
  "https://www.figma.com/api/mcp/asset/a260d7af-9eb4-4e9c-8414-df8254c4d28a";
const imgCardMock21 =
  "https://www.figma.com/api/mcp/asset/3ce6a52f-de48-45e6-9c7f-5730f99dd32b";
const imgRectangle1 =
  "https://www.figma.com/api/mcp/asset/e7a27514-6c8a-4ecc-bd5b-df15bb046c8c";
const imgPoster1 =
  "https://www.figma.com/api/mcp/asset/76c63b2b-50de-4ec1-ad35-4d0538e4ea97";
const imgAdobeStock2968248521 =
  "https://www.figma.com/api/mcp/asset/ca956d1d-deaa-432d-a3ea-f223ae2d4a77";
const imgSignMockup4 =
  "https://www.figma.com/api/mcp/asset/95dff8c7-a1a8-436d-9d98-5b3e721f3599";
const imgLitw =
  "https://www.figma.com/api/mcp/asset/2ecbf1e5-ce5d-4570-8fda-612ad9e4d495";
const img5 =
  "https://www.figma.com/api/mcp/asset/1027fb05-fce9-4269-8954-51165da96418";
const imgLayer1 =
  "https://www.figma.com/api/mcp/asset/c78a2963-f2ab-40e8-aab9-e461fea0cb21";
const imgLayer2 =
  "https://www.figma.com/api/mcp/asset/82ab4e77-5375-4f3a-9876-b0ba9d50774a";
const imgNHempCo =
  "https://www.figma.com/api/mcp/asset/4afbed66-c05d-4364-8d01-8efb2242f0b3";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/b7501751-048d-48d6-94ac-e32395aa6ffa";

type ProjectCard = {
  id: string;
  label: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  bgColor?: string;
  overlaySrc?: string;
  overlayAlt?: string;
  overlayClassName?: string;
};

const projects: ProjectCard[] = [
  {
    id: "adaps-it-2026",
    label: "Adaps IT | 2026",
    href: "/projects/adaps-it-2026",
    bgColor: "#056cf2",
    overlaySrc: imgLayer1,
    overlayAlt: "Adaps logo",
    overlayClassName: styles.overlayAdaps,
  },
  {
    id: "sanctuary-in-the-woods-2025",
    label: "Sanctuary in the Woods | 2025",
    href: "/projects/sanctuary-in-the-woods-2025",
    imageSrc: imgPoster1,
    imageAlt: "Sanctuary in the Woods artwork",
  },
  {
    id: "holmes-ai-2025",
    label: "Holmes AI | 2025",
    href: "/projects/holmes-ai-2025",
    bgColor: "#062d33",
    overlaySrc: imgLayer2,
    overlayAlt: "Holmes AI logo",
    overlayClassName: styles.overlayHolmes,
  },
  {
    id: "helios-stones-2025",
    label: "Helios Stones | 2025",
    href: "/projects/helios-stones-2025",
    imageSrc: imgCardMock12,
    imageAlt: "Helios Stones artwork",
  },
  {
    id: "elora-2025-a",
    label: "Elora | 2025",
    href: "/projects/elora-2025",
    imageSrc: imgCardMock10,
    imageAlt: "Elora artwork",
  },
  {
    id: "charminar-gin-2025",
    label: "Charminar Gin | 2025",
    href: "/projects/charminar-gin-2025",
    imageSrc: imgCardMock11,
    imageAlt: "Charminar Gin artwork",
  },
  {
    id: "one-downtown-2026",
    label: "One Downtown | 2026",
    href: "/projects/one-downtown-2026",
    imageSrc: imgAdobeStock2968248521,
    imageAlt: "One Downtown artwork",
  },
  {
    id: "rydon-2025",
    label: "Rydon | 2025",
    href: "/projects/rydon-2025",
    imageSrc: imgSignMockup4,
    imageAlt: "Rydon artwork",
  },
  {
    id: "loyola-viscomm-2025",
    label: "Loyola Viscomm | 2025",
    href: "/projects/loyola-viscomm-2025",
    bgColor: "#056cf2",
    overlaySrc: imgFrame,
    overlayAlt: "Loyola Viscomm logo",
    overlayClassName: styles.overlayLoyola,
  },
  {
    id: "nhempco-2025",
    label: "Nhempco | 2025",
    href: "/projects/nhempco-2025",
    imageSrc: imgCardMock21,
    imageAlt: "Nhempco artwork",
    overlaySrc: imgNHempCo,
    overlayAlt: "Nhempco logo",
    overlayClassName: styles.overlayNhempco,
  },
  {
    id: "parentheses-showreel-2022",
    label: "Parentheses Showreel | 2022",
    href: "/projects/parentheses-showreel-2022",
    imageSrc: imgLitw,
    imageAlt: "Parentheses Showreel artwork",
  },
  {
    id: "charminar-2025-a",
    label: "Charminar | 2025",
    href: "/projects/charminar-2025",
    bgColor: "#d1d2d6",
  },
  {
    id: "elora-2025-b",
    label: "Elora | 2025",
    href: "/projects/elora-2025",
    imageSrc: imgCardMock15,
    imageAlt: "Elora billboard artwork",
  },
  {
    id: "totspot-2022",
    label: "Totspot | 2022",
    href: "/projects/totspot-2022",
    imageSrc: img5,
    imageAlt: "Totspot artwork",
  },
  {
    id: "charminar-2025-b",
    label: "Charminar | 2025",
    href: "/projects/charminar-2025",
    imageSrc: imgRectangle1,
    imageAlt: "Charminar artwork",
  },
];

const socialLinks = [
  { id: "instagram", label: "INSTAGRAM", href: "https://instagram.com" },
  { id: "pinterest", label: "PINTEREST", href: "https://pinterest.com" },
  { id: "behance", label: "BEHANCE", href: "https://behance.net" },
];

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "#footer" },
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
          {projects.map((project) => (
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
                  {project.imageSrc ? (
                    <img
                      className={styles.image}
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.label}
                    />
                  ) : null}
                  {project.overlaySrc ? (
                    <img
                      className={`${styles.overlay} ${project.overlayClassName ?? ""}`}
                      src={project.overlaySrc}
                      alt={project.overlayAlt ?? ""}
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
        socialLinks={socialLinks}
        copyright="© Viswanth Gudiwada 2025"
        impactText="MAKING AN IMPACT"
      />
    </main>
  );
}
