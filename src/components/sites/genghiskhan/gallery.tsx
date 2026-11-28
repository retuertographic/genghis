"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "./data";
import { useI18n } from "./i18n/context";
import { Lightbox, useLightbox } from "./lightbox";
import { Reveal } from "./reveal";

type Group = { columns: 1 | 2; images: GalleryImage[] };

/** Elementor gallery widgets (masonry, 8px radius, 15px gap) with a shared lightbox. */
export function Galleries({ groups, className }: { groups: Group[]; className?: string }) {
  const all = groups.flatMap((g) => g.images);
  const { t } = useI18n();
  const lightbox = useLightbox(all.length);

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
                onClick={() => lightbox.open(start + i)}
                className="group relative block overflow-hidden rounded-[8px]"
                aria-label={t.openImage}
              >
                <Image
                  src={img.src}
                  alt=""
                  width={img.width}
                  height={img.height}
                  sizes={group.columns === 2 ? "(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 760px, 100vw"}
                  className="block h-auto w-full"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-[800ms] group-hover:bg-black/40" />
              </button>
            ))}
          </Reveal>
        );
      })}

      <Lightbox images={all} index={lightbox.index} onClose={lightbox.close} onStep={lightbox.step} />
    </div>
  );
}
