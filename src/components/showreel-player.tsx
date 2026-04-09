"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";
import type Plyr from "plyr";

type ShowreelPlayerProps = {
  captionsSrc?: string;
  src: string;
  posterSrc?: string;
  title: string;
  fillParent?: boolean;
};

export function ShowreelPlayer({
  src,
  posterSrc,
  title,
  captionsSrc,
  fillParent = false,
}: ShowreelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const plyrRef = useRef<Plyr | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let isMounted = true;

    void import("plyr").then(({ default: Plyr }) => {
      if (!isMounted || plyrRef.current) {
        return;
      }

      plyrRef.current = new Plyr(video, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
        settings: [],
        disableContextMenu: true,
        hideControls: true,
        clickToPlay: true,
        keyboard: { focused: true, global: false },
        iconUrl: "/plyr.svg",
      });

      plyrRef.current.on("play", () => {
        setHasStarted(true);
      });
    });

    return () => {
      isMounted = false;
      plyrRef.current?.destroy();
      plyrRef.current = null;
    };
  }, []);

  return (
    <div
      className={`${fillParent ? styles.showreelPlayerFill : styles.showreelPlayer} showreel-player ${
        hasStarted ? "showreel-started" : ""
      }`}
    >
      <video
        ref={videoRef}
        className={styles.showreelVideo}
        playsInline
        preload="metadata"
        poster={posterSrc}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onContextMenu={(event) => event.preventDefault()}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        {captionsSrc ? (
          <track kind="captions" srcLang="en" src={captionsSrc} default />
        ) : null}
        Your browser does not support the video tag.
      </video>

      {!posterSrc ? (
        <div className={styles.showreelPosterHint} aria-hidden="true">
          Add thumbnail poster here
        </div>
      ) : null}
    </div>
  );
}
