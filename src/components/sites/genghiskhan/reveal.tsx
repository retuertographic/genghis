"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealAnimation = "fadeInUp" | "fadeInRight" | "fadeInLeft" | "slideInLeft" | "fadeIn";

/** Elementor-style entrance animation, triggered once when the element scrolls into view. */
export function Reveal({
  as: Tag = "div",
  animation = "fadeInUp",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  animation?: RevealAnimation;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("gk-reveal", `gk-${animation}`, visible && "gk-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
