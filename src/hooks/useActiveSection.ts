import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently dominant in the viewport.
 * Uses a band across the middle of the screen so a section becomes
 * "active" as it takes over, not the instant it peeks in.
 */
export function useActiveSection(ids: string[], fallback = ids[0]) {
  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
