import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyMediaArranger } from "@/components/case-study-media-arranger";
import { ShowreelPlayer } from "@/components/showreel-player";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { SmartImage } from "@/components/smart-image";
import { SmartVideo } from "@/components/smart-video";
import { getAllProjectSlugs, getProjectPage } from "@/lib/project-pages";
import { WORK_PROJECT_COUNT } from "@/lib/work-projects";
import styles from "../../projects/[slug]/project-page.module.css";

const leftNavLinks = [
  { id: "work", label: "WORK", href: "/work" },
  { id: "frames", label: "FRAMES", href: "/frames" },
];

const rightNavLinks = [
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPage(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Work`,
    description: project.intro[0],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectPage(slug);

  if (!project) {
    notFound();
  }

  const isComingSoonSummary =
    project.sections.length === 0 &&
    project.summary?.trim().toLowerCase() === "coming soon";
  const isParenthesesShowreel = project.slug === "parentheses-showreel";
  const isElora = project.slug === "elora";
  const enableMediaArranger = false;

  return (
    <main className={`${styles.page} ${isElora ? styles.pageElora : ""}`}>
      <SiteNavbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        workCount={WORK_PROJECT_COUNT}
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.projectHeading}>
              <p className={styles.projectLabel}>{project.title}</p>
            </div>

            <div className={styles.introCopy}>
              {project.subtitle ? (
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
              ) : null}
              {project.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className={styles.metaList}>
              {project.facts.map((fact) => (
                <div key={fact.label} className={styles.metaItem}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div
          className={styles.heroMedia}
          style={{ backgroundColor: project.hero.backgroundColor }}
        >
          {project.hero.backgroundVideoSrc ? (
            isParenthesesShowreel ? (
              <div className={styles.heroPlayerWrap}>
                <ShowreelPlayer
                  src={project.hero.backgroundVideoSrc}
                  posterSrc={project.hero.backgroundImageSrc}
                  title={`${project.title} showreel`}
                  fillParent
                />
              </div>
            ) : (
              <SmartVideo
                className={styles.heroTexture}
                src={project.hero.backgroundVideoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            )
          ) : null}
          {project.hero.backgroundImageSrc ? (
            <SmartImage
              className={styles.heroTexture}
              src={project.hero.backgroundImageSrc}
              alt=""
              aria-hidden="true"
            />
          ) : null}
          {project.hero.logoSrc ? (
            <SmartImage
              className={styles.heroLogo}
              src={project.hero.logoSrc}
              alt={project.hero.logoAlt ?? ""}
            />
          ) : !project.hero.hideFallbackTitle ? (
            <p className={styles.heroFallbackTitle}>{project.title}</p>
          ) : null}
        </div>

        <div className={styles.container}>
          <CaseStudyMediaArranger
            sections={project.sections}
            projectSlug={project.slug}
            enableArranger={enableMediaArranger}
            classes={{
              mediaStack: styles.mediaStack,
              mediaCard: styles.mediaCard,
              mediaCardBordered: styles.mediaCardBordered,
              mediaCardContain: styles.mediaCardContain,
              calloutSection: styles.calloutSection,
              calloutTitle: styles.calloutTitle,
              calloutBody: styles.calloutBody,
              placeholderCard: styles.placeholderCard,
              placeholderTitle: styles.placeholderTitle,
              arrangeCanvasHighlight: styles.arrangeCanvasHighlight,
              arrangeToggle: styles.arrangeToggle,
              arrangePanel: styles.arrangePanel,
              arrangeHeader: styles.arrangeHeader,
              arrangeList: styles.arrangeList,
              arrangeItem: styles.arrangeItem,
              arrangeItemActive: styles.arrangeItemActive,
              arrangeItemMeta: styles.arrangeItemMeta,
              arrangeTypeChip: styles.arrangeTypeChip,
              arrangeThumb: styles.arrangeThumb,
              arrangeThumbPlaceholder: styles.arrangeThumbPlaceholder,
              arrangeItemActions: styles.arrangeItemActions,
              arrangeBtn: styles.arrangeBtn,
              arrangeBtnGhost: styles.arrangeBtnGhost,
              arrangeHint: styles.arrangeHint,
            }}
          />

          {project.summary ? (
            <div
              className={`${styles.summaryWrap} ${
                isComingSoonSummary ? styles.summaryWrapCentered : ""
              }`}
            >
              <p className={styles.summary}>{project.summary}</p>
            </div>
          ) : null}

          <section className={styles.nextProjectSection}>
            <div className={styles.nextProjectInner}>
              <div className={styles.nextProjectCopy}>
                <p className={styles.nextProjectEyebrow}>NEXT PROJECT</p>
                <div className={styles.nextProjectDetails}>
                  <Link
                    href={`/project/${project.nextProject.slug}`}
                    className={styles.nextProjectTitle}
                  >
                    <span>{project.nextProject.title}</span>
                    <span>{project.nextProject.category}</span>
                    <span>{project.nextProject.year}</span>
                  </Link>
                  <div className={styles.nextProjectActions}>
                    <Link
                      href={`/project/${project.nextProject.slug}`}
                      className={styles.nextProjectArrow}
                      aria-label={`View ${project.nextProject.title}`}
                    >
                      <svg
                        viewBox="0 0 48 23"
                        aria-hidden="true"
                        className={styles.nextProjectArrowIcon}
                        fill="none"
                      >
                        <path
                          d="M47.0607 12.1075C47.6464 11.5217 47.6464 10.572 47.0607 9.98621L37.5147 0.440273C36.9289 -0.145514 35.9792 -0.145514 35.3934 0.440273C34.8076 1.02606 34.8076 1.97581 35.3934 2.56159L43.8787 11.0469L35.3934 19.5322C34.8076 20.1179 34.8076 21.0677 35.3934 21.6535C35.9792 22.2393 36.9289 22.2393 37.5147 21.6535L47.0607 12.1075ZM0 11.0469V12.5469H46V11.0469V9.54688H0V11.0469Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link href="/work" className={styles.allProjectsLink}>
                      ALL PROJECTS
                    </Link>
                  </div>
                </div>
              </div>

              {project.nextProject.videoSrc ? (
                <Link
                  href={`/project/${project.nextProject.slug}`}
                  className={styles.nextProjectMedia}
                >
                  <SmartVideo
                    src={project.nextProject.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                </Link>
              ) : project.nextProject.imageSrc ? (
                <Link
                  href={`/project/${project.nextProject.slug}`}
                  className={styles.nextProjectMedia}
                >
                  <SmartImage
                    src={project.nextProject.imageSrc}
                    alt={
                      project.nextProject.imageAlt ?? project.nextProject.title
                    }
                  />
                </Link>
              ) : (
                <Link
                  href={`/project/${project.nextProject.slug}`}
                  className={styles.nextProjectPlaceholder}
                  style={
                    project.nextProject.backgroundColor
                      ? { backgroundColor: project.nextProject.backgroundColor }
                      : undefined
                  }
                >
                  {project.nextProject.logoSrc ? (
                    <SmartImage
                      src={project.nextProject.logoSrc}
                      alt={
                        project.nextProject.logoAlt ?? project.nextProject.title
                      }
                      className={styles.nextProjectLogo}
                    />
                  ) : null}
                </Link>
              )}
            </div>
          </section>
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
