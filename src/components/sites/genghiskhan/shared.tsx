import Image from "next/image";
import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS, REVIEWS, SOCIAL } from "./data";
import { InstagramFeed } from "./instagram-feed";
import { Tilt } from "./tilt";

export function Script({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-script text-[65px] leading-[65px] tracking-[2.7px] max-md:text-[50px] max-md:leading-[50px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Display({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-cinzel text-[55px] font-semibold uppercase leading-[55px] tracking-[-2px] max-md:text-[40px] max-md:leading-[40px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function BgSection({
  image,
  overlay,
  className,
  children,
  position = "50% 50%",
}: {
  image: string;
  overlay: string;
  className?: string;
  children: ReactNode;
  position?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div aria-hidden className={cn("absolute inset-0", overlay)} />
      {children}
    </section>
  );
}

/* ---------- Sections ---------- */

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-[2] bg-white px-[50px] py-[50px] text-center shadow-[0_2px_60px_rgba(0,0,0,0.1)] max-md:px-4 max-md:py-[40px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <BgSection
      image={`${ASSETS}/images/reviews-bg.jpg`}
      overlay="bg-white/[0.66]"
      className="flex min-h-[600px] items-center"
    >
      <Tilt position="top" />
      <div className="gk-container relative z-[2] grid w-full grid-cols-1 gap-[16px] py-[90px] md:grid-cols-3">
        {REVIEWS.map((r) => (
          <a
            key={r.name}
            href={SOCIAL.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${r.name}'s review on Google`}
            className="group block font-[Helvetica_Neue,Helvetica,Arial,sans-serif] max-md:px-[60px]"
          >
            <figure>
              <blockquote className="relative mb-[25px] border border-[#f5f5f5] bg-white py-[20px] pl-[48px] pr-[25px] shadow-[2px_2px_2px_rgba(0,0,0,0.098)] transition-shadow group-hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
                <span
                  aria-hidden
                  className="absolute left-[14px] top-[12px] font-serif text-[40px] leading-none text-[#ccc]"
                >
                  &ldquo;
                </span>
                <p className="text-[14px] italic leading-[22.4px] text-[#777]">
                  <span
                    className="mr-[2px] inline-flex align-[-2px]"
                    aria-label="5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-[16px] fill-[#fdd022] text-[#fdd022]"
                      />
                    ))}
                  </span>
                  {r.text}
                </p>
                <span
                  aria-hidden
                  className="absolute -bottom-[23px] left-[80px] size-0 border-x-[0_solid_transparent] border-t-[23px] border-r-[23px] border-r-transparent border-t-white"
                />
              </blockquote>
              <figcaption className="flex items-center gap-[10px] pl-[14px]">
                <Image
                  src={r.avatar}
                  alt={`${r.name} Avatar`}
                  width={50}
                  height={50}
                  className="size-[50px] rounded-full"
                />
                <div className="text-[13px] uppercase leading-[20.8px] text-[#555]">
                  <div>{r.name}</div>
                  <div>{r.date}</div>
                </div>
              </figcaption>
            </figure>
          </a>
        ))}
        <div className="flex justify-center md:col-span-3">
          <a
            href={SOCIAL.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[4px] bg-black px-[14px] py-[7px] font-poppins text-[13px] leading-[19.5px] text-white transition-opacity hover:opacity-85"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

export function InstagramSection() {
  return (
    <section className="pb-[10px]">
      <div className="gk-container">
        <Display className="text-center text-[35px] leading-[35px] text-[#cfa670] max-md:text-[40px] max-md:leading-[40px]">
          Connect with us
        </Display>
        <Display className="mt-[15px] text-center text-black max-md:mt-[55px]">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#cfa670]"
          >
            Instagram
          </a>
        </Display>
        <div className="mt-[30px]">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}
