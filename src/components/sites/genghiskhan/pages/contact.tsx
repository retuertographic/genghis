"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS } from "../data";
import { InstagramIcon } from "../brand-icons";
import { playfair } from "./fonts";

/*
 * NOTE: the live Contact page still carries the Porto "Beauty" demo content (address, phone, map,
 * gallery, FAQ, Instagram handle, Book Now link). It is cloned 1:1 here on purpose; replace later.
 */

/** Porto Google Map widget: demo coordinates 40.75198, -73.96978 (New York), zoom 14. */
const MAP_EMBED_URL = "https://maps.google.com/maps?q=40.75198,-73.96978&z=14&output=embed";
const BOOK_NOW_URL = "https://www.portotheme.com/wordpress/porto/elementor/beauty/book-now/";

/** Source order of the beauty-gallery images. */
const GALLERY = [1, 6, 5, 4, 3, 2].map((n) => ({
  src: `${ASSETS}/images/contact/gallery-${n}.webp`,
  alt: `beauty-gallery-${n}`,
}));

const LOREM =
  "Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.";

const FAQS = [
  "1 – Tristique Sit Amet Condim Vel?",
  "2 – Cras A Elit Sit Amet Leo Accumsan?",
  "3 – Hel Officitur Felis Ultricis Nan?",
  "4 – Wuspaisse Hendreirit Vehicula Leo?",
  "5 – Lintegers Aliquet Ullamcorper Dollor, Quis Sollic Tudin?",
];

function InfoColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="px-[12px] py-[16px] text-center">
      <h4 className="font-poppins text-[25.2px] font-semibold leading-[27px] tracking-[2px] text-[#222529] max-md:text-[23.4px]">
        {title}
      </h4>
      <div className="mt-[14px] flex flex-col gap-[29px] font-poppins text-[18.9px] leading-[26px] text-[#969696] max-md:gap-[27px] max-md:text-[17.55px]">
        {children}
      </div>
    </div>
  );
}

function FindUs() {
  return (
    <section className="my-[80px]">
      <div className="gk-container grid grid-cols-1 md:grid-cols-2 max-md:px-[7px]">
        <InfoColumn title="Find Us">
          <span>999 Porto Theme Drive</span>
          <span>West Hollywood, CA 90069</span>
        </InfoColumn>
        <InfoColumn title="Contact Us">
          <a href="tel:123-456-7890" className="transition-colors hover:text-[#222529]">
            123-456-7890
          </a>
          <a href="mailto:mail@domain.com" className="transition-colors hover:text-[#222529]">
            mail@domain.com
          </a>
        </InfoColumn>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="h-[580px] bg-[#e5e3df]">
      <iframe
        title="Map"
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block size-full border-0 grayscale-[0.9] contrast-[0.9] brightness-[1.05]"
      />
    </section>
  );
}

function Lightbox({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (d: number) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  const img = GALLERY[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="gk-modal-in fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-[40px]"
      onClick={onClose}
    >
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white">
        <X className="size-8" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronLeft className="size-10" strokeWidth={1.5} />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="text-center">
        <Image src={img.src} alt={img.alt} width={320} height={318} className="h-auto max-h-[80vh] w-[min(320px,80vw)]" />
        <figcaption className="mt-2 font-poppins text-[12px] text-white/70">
          {index + 1} of {GALLERY.length}
        </figcaption>
      </figure>
      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronRight className="size-10" strokeWidth={1.5} />
      </button>
    </div>
  );
}

function GalleryStrip() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)),
    [],
  );

  return (
    <section className="relative pb-[19px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open ${img.alt}`}
            className="group relative block overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={320}
              height={318}
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
        <div className="bg-[#222529] px-0 pb-[28px] pt-[49px] text-center transition-transform duration-300 hover:scale-110">
          <InstagramIcon aria-hidden className="mx-auto mb-[18px] size-[58px] text-white" />
          <h2
            className={cn(
              "mb-[9px] font-[family-name:var(--gk-playfair)] text-[32px] font-bold italic leading-[1.2] text-white max-md:text-[29.7px]",
              playfair.variable,
            )}
          >
            Follow On Instagram
          </h2>
          <p className="font-poppins text-[14px] leading-[26px] text-[#969696] max-md:text-[13px] max-md:leading-[20px]">
            @portobeautysalon
          </p>
        </div>
      </div>

      {index !== null && <Lightbox index={index} onClose={close} onStep={step} />}
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="mt-[60px]">
      <div className="gk-container">
        <div className="flex flex-col gap-[17px]">
          {FAQS.map((q, i) => {
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
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-[32px] pb-[32px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
                      {LOREM}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-[60px] mt-[31px] text-center">
          <a
            href={BOOK_NOW_URL}
            aria-label="button"
            className="inline-block bg-[#222529] px-[38.4px] py-[20px] font-poppins text-[12.8px] leading-[19px] tracking-[2.5px] text-white transition-transform duration-300 hover:scale-110 max-md:text-[11.9px]"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <FindUs />
      <MapSection />
      <GalleryStrip />
      <Faqs />
    </>
  );
}
