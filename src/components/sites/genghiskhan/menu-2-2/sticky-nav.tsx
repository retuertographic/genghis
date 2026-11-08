"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnchorLink } from "./anchor-link";

/**
 * Porto "sticky nav" widget: a translucent bar with a single "Menu" pill that
 * pins to the top of the viewport while scrolling and highlights (scroll-spy)
 * once the #carta anchor has been reached.
 */
export function StickyNav() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const target = document.getElementById("carta");
    if (!target) return;
    const onScroll = () => {
      setActive(target.getBoundingClientRect().top <= 81);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-20 mb-5 bg-black/44 py-5">
      <ul className="flex justify-center">
        <li>
          <AnchorLink
            id="carta"
            className={cn(
              "block px-[13px] py-[10px] text-[17px] font-bold uppercase leading-5 text-white transition-colors hover:bg-[#385B6BE6]",
              active && "bg-[#385B6BE6]",
            )}
          >
            Menu
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
}
