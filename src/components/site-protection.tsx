"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./site-protection.module.css";

type ToastState = {
  id: number;
  message: string;
};

const TOAST_DURATION_MS = 1700;
const TOAST_COOLDOWN_MS = 1000;

export function SiteProtection() {
  const [toast, setToast] = useState<ToastState | null>(null);
  const lastToastAtRef = useRef(0);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToast((currentToast) => {
        if (currentToast?.id !== toast.id) {
          return currentToast;
        }
        return null;
      });
    }, TOAST_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toast]);

  useEffect(() => {
    const showToast = (message: string) => {
      const now = Date.now();
      if (now - lastToastAtRef.current < TOAST_COOLDOWN_MS) {
        return;
      }
      lastToastAtRef.current = now;
      setToast({ id: now, message });
    };

    const hardenMediaNodes = (scope: ParentNode) => {
      scope.querySelectorAll("img, video").forEach((node) => {
        node.setAttribute("draggable", "false");
      });
    };

    hardenMediaNodes(document);

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (!(addedNode instanceof HTMLElement)) {
            continue;
          }

          if (addedNode.matches("img, video")) {
            addedNode.setAttribute("draggable", "false");
          }

          hardenMediaNodes(addedNode);
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      showToast("Right click is disabled.");
    };

    const onDragStart = (event: DragEvent) => {
      const target = event.target;
      if (target instanceof HTMLImageElement || target instanceof HTMLVideoElement) {
        event.preventDefault();
        showToast("Media download is restricted.");
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isCtrlOrMeta = event.ctrlKey || event.metaKey;
      const inspectBlocked =
        event.key === "F12" ||
        (isCtrlOrMeta && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        (isCtrlOrMeta && key === "u");
      const saveBlocked = isCtrlOrMeta && key === "s";

      if (inspectBlocked) {
        event.preventDefault();
        event.stopPropagation();
        showToast("Developer tools shortcut is disabled.");
      } else if (saveBlocked) {
        event.preventDefault();
        showToast("Download action is restricted.");
      }
    };

    document.addEventListener("contextmenu", onContextMenu, { capture: true });
    document.addEventListener("dragstart", onDragStart, { capture: true });
    document.addEventListener("keydown", onKeyDown, { capture: true });

    return () => {
      mutationObserver.disconnect();
      document.removeEventListener("contextmenu", onContextMenu, {
        capture: true,
      });
      document.removeEventListener("dragstart", onDragStart, {
        capture: true,
      });
      document.removeEventListener("keydown", onKeyDown, {
        capture: true,
      });
    };
  }, []);

  return (
    <div className={styles.toastWrap} aria-live="polite" aria-atomic="true">
      {toast ? (
        <p className={styles.toast}>
          <span className={styles.dot} aria-hidden="true" />
          <span>{toast.message}</span>
        </p>
      ) : null}
    </div>
  );
}
