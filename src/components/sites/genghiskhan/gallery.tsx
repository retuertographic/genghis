"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "./data";
import { Reveal } from "./reveal";

type Group = { columns: 1 | 2; images: GalleryImage[] };

/** Elementor gallery widgets (masonry, 8px radius, 15px gap) with a shared lightbox. */
export function Galleries({ groups, className }: { groups: Group[]; className?: string }) {
  const all = groups.flatMap((g) => g.images);
  const [index, setIndex] = useState<number | null>(null);

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + all.length) % all.length)),
    [all.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, step]);

  const starts = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.images.length, 0));
  return (
    <div className={cn("flex flex-col gap-[15px] max-md:gap-[10px]", className)}>
      {groups.map((group, gi) => {
        const start = starts[gi];
        return (
          <Reveal
            key={gi}
            animation="fadeInRight"
            className={cn(
              "grid gap-[15px] max-md:gap-[10px]",
              group.columns === 2 ? "grid-cols-2 max-sm:grid-cols-1" : "grid-cols-1",
            )}
          >
            {group.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(start + i)}
                className="group relative block overflow-hidden rounded-[8px]"
                aria-label="Open image"
              >
                <Image
                  src={img.src}
                  alt=""
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="block h-auto w-full"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-[800ms] group-hover:bg-black/40" />
              </button>
            ))}
          </Reveal>
        );
      })}

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 gk-modal-in"
          onClick={() => setIndex(null)}
        >
          <button type="button" aria-label="Close" className="absolute right-4 top-4 text-white/80 hover:text-white" onClick={() => setIndex(null)}>
            <X className="size-8" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft className="size-10" strokeWidth={1.5} />
          </button>
          <Image
            src={all[index].src}
            alt=""
            width={all[index].width}
            height={all[index].height}
            className="max-h-[85vh] w-auto max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight className="size-10" strokeWidth={1.5} />
          </button>
          <div className="absolute bottom-4 text-sm text-white/70">
            {index + 1} / {all.length}
          </div>
        </div>
      )}
    </div>
  );
}
