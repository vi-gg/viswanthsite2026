"use client";

import { useMemo, useState } from "react";
import { SmartImage } from "@/components/smart-image";
import { SmartVideo } from "@/components/smart-video";
import type { ProjectPageSection } from "@/lib/project-pages";

type CaseStudyMediaArrangerProps = {
  classes: {
    mediaStack: string;
    mediaCard: string;
    mediaCardBordered: string;
    mediaCardContain: string;
    calloutSection: string;
    calloutTitle: string;
    calloutBody: string;
    placeholderCard: string;
    placeholderTitle: string;
    arrangeCanvasHighlight: string;
    arrangeToggle: string;
    arrangePanel: string;
    arrangeHeader: string;
    arrangeList: string;
    arrangeItem: string;
    arrangeItemActive: string;
    arrangeItemMeta: string;
    arrangeTypeChip: string;
    arrangeThumb: string;
    arrangeThumbPlaceholder: string;
    arrangeItemActions: string;
    arrangeBtn: string;
    arrangeBtnGhost: string;
    arrangeHint: string;
  };
  enableArranger: boolean;
  projectSlug: string;
  sections: ProjectPageSection[];
};

export function CaseStudyMediaArranger({
  classes,
  enableArranger,
  projectSlug,
  sections,
}: CaseStudyMediaArrangerProps) {
  const [orderedSections, setOrderedSections] = useState(sections);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null,
  );
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  const orderPayload = useMemo(
    () =>
      JSON.stringify(
        {
          page: `/project/${projectSlug}`,
          order: orderedSections.map((section) => section.id),
        },
        null,
        2,
      ),
    [orderedSections, projectSlug],
  );

  const move = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= orderedSections.length) {
      return;
    }

    setOrderedSections((current) => {
      const next = [...current];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
  };

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(orderPayload);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1800);
    }
  };

  return (
    <>
      <div className={classes.mediaStack}>
        {orderedSections.map((section) => {
          if (section.type === "image") {
            return (
              <figure
                key={section.id}
                className={`${classes.mediaCard} ${
                  section.bordered ? classes.mediaCardBordered : ""
                } ${section.fit === "contain" ? classes.mediaCardContain : ""} ${
                  hoveredSectionId === section.id ||
                  selectedSectionId === section.id
                    ? classes.arrangeCanvasHighlight
                    : ""
                }`}
                style={
                  section.backgroundColor
                    ? { backgroundColor: section.backgroundColor }
                    : undefined
                }
              >
                <SmartImage src={section.src} alt={section.alt} />
              </figure>
            );
          }

          if (section.type === "video") {
            return (
              <figure
                key={section.id}
                className={`${classes.mediaCard} ${
                  section.bordered ? classes.mediaCardBordered : ""
                } ${section.fit === "contain" ? classes.mediaCardContain : ""} ${
                  hoveredSectionId === section.id ||
                  selectedSectionId === section.id
                    ? classes.arrangeCanvasHighlight
                    : ""
                }`}
                style={
                  section.backgroundColor
                    ? { backgroundColor: section.backgroundColor }
                    : undefined
                }
              >
                <SmartVideo
                  src={section.src}
                  poster={section.posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </figure>
            );
          }

          if (section.type === "callout") {
            return (
              <div
                key={section.id}
                className={`${classes.calloutSection} ${
                  hoveredSectionId === section.id ||
                  selectedSectionId === section.id
                    ? classes.arrangeCanvasHighlight
                    : ""
                }`}
              >
                <h2 className={classes.calloutTitle}>{section.title}</h2>
                <p className={classes.calloutBody}>{section.body}</p>
              </div>
            );
          }

          return (
            <div
              key={section.id}
              className={`${classes.placeholderCard} ${
                hoveredSectionId === section.id ||
                selectedSectionId === section.id
                  ? classes.arrangeCanvasHighlight
                  : ""
              }`}
              style={
                section.backgroundColor
                  ? { backgroundColor: section.backgroundColor }
                  : undefined
              }
            >
              {section.title ? (
                <p
                  className={classes.placeholderTitle}
                  style={
                    section.titleColor ? { color: section.titleColor } : undefined
                  }
                >
                  {section.title}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {enableArranger ? (
        <>
          <button
            type="button"
            className={classes.arrangeToggle}
            onClick={() => setIsOpen((current) => !current)}
          >
            Arrange
          </button>

          {isOpen ? (
            <aside className={classes.arrangePanel}>
              <div className={classes.arrangeHeader}>
                <strong>Media Order</strong>
                <button
                  type="button"
                  className={classes.arrangeBtnGhost}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>

              <ul className={classes.arrangeList}>
                {orderedSections.map((section, index) => (
                  <li
                    key={section.id}
                    className={`${classes.arrangeItem} ${
                      hoveredSectionId === section.id ||
                      selectedSectionId === section.id
                        ? classes.arrangeItemActive
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredSectionId(section.id)}
                    onMouseLeave={() => setHoveredSectionId(null)}
                    onClick={() =>
                      setSelectedSectionId((current) =>
                        current === section.id ? null : section.id,
                      )
                    }
                  >
                    <div className={classes.arrangeItemMeta}>
                      <span>{index + 1}.</span>
                      <span className={classes.arrangeTypeChip}>
                        {section.type.toUpperCase()}
                      </span>
                      {"src" in section && section.src ? (
                        section.type === "video" ? (
                          <SmartVideo
                            className={classes.arrangeThumb}
                            src={section.src}
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <SmartImage
                            className={classes.arrangeThumb}
                            src={section.src}
                            alt={section.id}
                          />
                        )
                      ) : (
                        <span className={classes.arrangeThumbPlaceholder}>
                          {section.type}
                        </span>
                      )}
                      <span>{section.id}</span>
                    </div>
                    <div className={classes.arrangeItemActions}>
                      <button
                        type="button"
                        className={classes.arrangeBtn}
                        onClick={() => move(index, -1)}
                        disabled={index === 0}
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        className={classes.arrangeBtn}
                        onClick={() => move(index, 1)}
                        disabled={index === orderedSections.length - 1}
                      >
                        ↓
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <button type="button" className={classes.arrangeBtnGhost} onClick={copyOrder}>
                Copy Current Order
              </button>

              <p className={classes.arrangeHint}>
                {copyState === "copied"
                  ? "Copied. Send it to me and I’ll apply it permanently."
                  : copyState === "error"
                    ? "Copy failed. Try again."
                    : "Use arrows, then copy and send it to lock this order."}
              </p>
            </aside>
          ) : null}
        </>
      ) : null}
    </>
  );
}
