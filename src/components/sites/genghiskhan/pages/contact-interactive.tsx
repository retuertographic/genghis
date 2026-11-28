"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "../brand-icons";
import { ASSETS, INSTAGRAM_POSTS, SOCIAL } from "../data";
import type { Lang } from "../i18n/config";
import { Rich } from "../i18n/rich";
import { Lightbox, useLightbox } from "../lightbox";
import { playfair } from "./fonts";

/** Restaurant photos from the Instagram feed (square). */
const GALLERY = INSTAGRAM_POSTS.slice(0, 6).map((post) => ({
  src: `${ASSETS}/instagram/${post.id}.jpg`,
  width: 640,
  height: 640,
  alt: post.caption,
}));

/** Six Instagram photos with the "Follow On Instagram" box over them; photos open in the shared lightbox. */
export function ContactGalleryStrip({ followText, openPhotoText }: { followText: string; openPhotoText: string }) {
  const lightbox = useLightbox(GALLERY.length);

  return (
    <section className="relative pb-[19px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => lightbox.open(i)}
            aria-label={`${openPhotoText} ${i + 1}`}
            className="group relative block overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 50vw"
              className="block h-auto w-full"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#222529]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Plus className="size-[30px] text-white" strokeWidth={1.5} />
            </span>
          </button>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 w-[480px] max-w-full -translate-x-1/2 -translate-y-1/2 max-md:w-full">
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#222529] px-0 pb-[28px] pt-[49px] text-center transition-transform duration-300 hover:scale-110"
        >
          <InstagramIcon aria-hidden className="mx-auto mb-[18px] size-[58px] text-white" />
          <h2
            className={cn(
              "mb-[9px] font-[family-name:var(--gk-playfair)] text-[32px] font-bold italic leading-[1.2] text-white max-md:text-[29.7px]",
              playfair.variable,
            )}
          >
            {followText}
          </h2>
          <p className="font-poppins text-[14px] leading-[26px] text-[#969696] max-md:text-[13px] max-md:leading-[20px]">
            @genghiskhan.grill
          </p>
        </a>
      </div>

      <Lightbox images={GALLERY} index={lightbox.index} onClose={lightbox.close} onStep={lightbox.step} />
    </section>
  );
}

/** FAQ accordion: several items can be open; the first starts open. */
export function ContactFaqs({ faqs, lang }: { faqs: { q: string; a: string }[]; lang: Lang }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="flex flex-col gap-[17px]">
      {faqs.map(({ q, a }, i) => {
        const isOpen = open.has(i);
        const id = `faq-${i}`;
        return (
          <div key={q} className="border border-[#e7e7e7] bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-[29px] py-[23px] text-left font-poppins text-[16px] font-bold leading-[26px] tracking-[-0.8px] text-[#212529] max-md:leading-[20px]"
            >
              <span>{q}</span>
              <ChevronDown
                aria-hidden
                className={cn("size-[14px] shrink-0 transition-transform duration-300", !isOpen && "rotate-180")}
                strokeWidth={2}
              />
            </button>
            <div
              id={id}
              role="region"
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="px-[32px] pb-[32px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px] [&_a]:text-[#222529] [&_a:hover]:text-[#cfa670]">
                  <Rich text={a} lang={lang} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
