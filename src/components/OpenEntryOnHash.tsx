"use client";

import { useEffect } from "react";

/** When a chart row (or a shared link) points at a collapsed entry, open it and scroll to it. */
export function OpenEntryOnHash() {
  useEffect(() => {
    const open = (id: string) => {
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement) {
        if (!el.open) el.open = true;
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
      }
    };
    const fromHash = () => open(decodeURIComponent(window.location.hash.slice(1)));
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (a) open(decodeURIComponent(a.getAttribute("href")!.slice(1)));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return null;
}
