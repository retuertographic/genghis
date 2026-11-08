"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookNowButton } from "../booking-modal";
import { ASSETS, INSTAGRAM_POSTS, SOCIAL } from "../data";
import { InstagramIcon } from "../brand-icons";
import { playfair } from "./fonts";

const ADDRESS = "Centro Comercial San Sebastián, Calle la Enramada, Local 21, 38679 La Caleta, Santa Cruz de Tenerife";
const MAIL = "bookings@genghiskhangrilltenerife.com";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(`Genghis Khan Grill, ${ADDRESS}`)}&z=16&output=embed`;

/** Restaurant photos from the Instagram feed (square). */
const GALLERY = INSTAGRAM_POSTS.slice(0, 6).map((post) => ({
  src: `${ASSETS}/instagram/${post.id}.jpg`,
  alt: post.caption,
}));

/** Answers use only facts stated elsewhere on the site (bookings, hours, grill, allergens). */
const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "1 – How can I book a table?",
    a: (
      <>
        Use the Book Now button to reserve online, call us at <a href="tel:0034922692798">922 69 27 98</a> or{" "}
        <a href="tel:0034688151137">688 15 11 37</a>, or write to <a href={`mailto:${MAIL}`}>{MAIL}</a>.
      </>
    ),
  },
  {
    q: "2 – Can I book for a large group or an event?",
    a: (
      <>
        Yes. For larger groups please get in touch with us directly at <a href={`mailto:${MAIL}`}>{MAIL}</a>. Our
        reservations team will be delighted to help you with your request.
      </>
    ),
  },
  {
    q: "3 – What are your opening hours?",
    a: "We are open Monday to Sunday, from 13:00 to 23:00.",
  },
  {
    q: "4 – How does the tabletop grill work?",
    a: "Our tables, inspired by the time of the great conqueror Genghis Khan, have a charcoal grill built in, so you can cook a wide variety of fresh meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness, right at your table.",
  },
  {
    q: "5 – Do you have allergen information?",
    a: "Yes. In compliance with Regulation (EU) No. 1169/2011 on the provision of food information to consumers, we have information regarding the presence of allergens in our products available for consultation. Please ask our staff.",
  },
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
          <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#222529]">
            Centro Comercial San Sebastián, Calle la Enramada, Local 21
          </a>
          <span>38679 La Caleta, Santa Cruz de Tenerife</span>
          <span>Monday to Sunday · 13:00 – 23:00</span>
        </InfoColumn>
        <InfoColumn title="Contact Us">
          <span>
            <a href="tel:0034922692798" className="transition-colors hover:text-[#222529]">
              0034 922 692 798
            </a>
            {" · "}
            <a href="tel:0034688151137" className="transition-colors hover:text-[#222529]">
              0034 688 151 137
            </a>
          </span>
          <a href={`mailto:${MAIL}`} className="transition-colors hover:text-[#222529] max-sm:text-[14.5px]">
            {MAIL}
          </a>
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#222529]">
            WhatsApp: 0034 694 462 568
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
        title="Genghis Khan Grill location map"
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
        <Image src={img.src} alt={img.alt} width={640} height={640} className="h-auto max-h-[80vh] w-[min(640px,80vw)]" />
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
            aria-label={`Open photo ${i + 1}`}
            className="group relative block overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={640}
              height={640}
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
          className="block bg-[#222529] px-0 pb-[28px] pt-[49px] text-center transition-transform duration-300 hover:scale-110">
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
            @genghiskhan.grill
          </p>
        </a>
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
          {FAQS.map(({ q, a }, i) => {
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
                    <p className="px-[32px] pb-[32px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px] [&_a]:text-[#222529] [&_a:hover]:text-[#cfa670]">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-[60px] mt-[31px] text-center">
          <BookNowButton className="rounded-none border-0 bg-[#222529] px-[38.4px] py-[20px] text-[12.8px] uppercase leading-[19px] tracking-[2.5px] transition-transform duration-300 hover:scale-110 hover:bg-[#222529] max-md:text-[11.9px]" />
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
