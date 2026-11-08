"use client";

import type { MouseEvent, ReactNode } from "react";

/** In-page anchor with Elementor-style smooth scrolling. */
export function AnchorLink({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };
  return (
    <a href={`#${id}`} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
