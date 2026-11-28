import Image from "next/image";
import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS, FEATURE_IMAGES, REVIEWS, SOCIAL } from "./data";
import { getDictionary, type Lang } from "./i18n";
import { InstagramFeed } from "./instagram-feed";
import { Reveal, type RevealAnimation } from "./reveal";
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

export function ReviewsSection({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common.reviews;
  const date = new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
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
            aria-label={`${t.readOnGoogle}: ${r.name}`}
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
                    aria-label={t.stars}
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
                  <div>{date.format(new Date(r.date))}</div>
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
            {t.seeAll}
          </a>
        </div>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

export function InstagramSection({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common.instagram;
  return (
    <section className="pb-[10px]">
      <div className="gk-container">
        <Display className="text-center text-[35px] leading-[35px] text-[#cfa670] max-md:text-[40px] max-md:leading-[40px]">
          {t.connect}
        </Display>
        <Display className="mt-[15px] text-center text-black max-md:mt-[55px]">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#cfa670]"
          >
            {t.title}
          </a>
        </Display>
        <div className="mt-[30px]">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sections shared by several pages ---------- */

function Corner({ className }: { className: string }) {
  return <div aria-hidden className={cn("absolute size-6 border-[#c8a028]", className)} />;
}

function DiamondDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("mx-auto flex max-w-[400px] items-center gap-4", className)}>
      <div className="h-px flex-1 bg-[rgba(200,160,40,0.2)]" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect x="5" y="0" width="7" height="7" transform="rotate(45 5 0)" fill="#c8a028" opacity="0.6" />
      </svg>
      <div className="h-px flex-1 bg-[rgba(200,160,40,0.2)]" />
    </div>
  );
}

/** TripAdvisor Travellers' Choice card (home page: plain spacers; awards page: diamond dividers). */
export function AwardCard({ lang, dividers = "plain" }: { lang: Lang; dividers?: "plain" | "diamond" }) {
  const t = getDictionary(lang).common.award;
  const divider = (className: string) =>
    dividers === "diamond" ? <DiamondDivider className={className} /> : <div className={cn("mx-auto max-w-[400px]", className)} />;
  return (
    <div className="relative overflow-hidden rounded-[4px] border border-[rgba(200,160,40,0.25)] bg-[linear-gradient(145deg,#161410_0%,#1a1710_50%,#161410_100%)] px-[48px] py-[64px] text-center shadow-[0_0_0_1px_rgba(0,0,0,0.8),0_40px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(200,160,40,0.15)] max-md:px-[40px]">
      <Corner className="left-4 top-4 border-l border-t" />
      <Corner className="right-4 top-4 border-r border-t" />
      <Corner className="bottom-4 left-4 border-b border-l" />
      <Corner className="bottom-4 right-4 border-b border-r" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,160,40,0.04)_0%,transparent_60%)]"
      />
      <div className="relative">
        <div className="mb-[36px] inline-block rounded-full border border-[rgba(200,160,40,0.4)] bg-[rgba(200,160,40,0.06)] px-5 py-[6px] font-poppins text-[10px] font-bold uppercase leading-[26px] tracking-[4px] text-[#c8a028] max-md:leading-[20px]">
          {t.year}
        </div>
        <h2 className="mb-3 font-cormorant text-[clamp(26px,4vw,42px)] font-normal leading-[1.2] tracking-[0.5px] text-[#f5f0e8]">
          {t.title}
        </h2>
        <p className="font-montserrat text-[12px] uppercase leading-[26px] tracking-[2px] text-[rgba(200,160,40,0.7)] max-md:leading-[20px]">
          {t.subtitle}
        </p>
        {divider("my-[48px]")}
        <a
          href={SOCIAL.tripadvisor}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-[transform,filter] duration-300 hover:scale-[1.04] hover:brightness-110"
        >
          <Image
            src={`${ASSETS}/images/tripadvisor-tc-2025.png`}
            alt={t.badgeAlt}
            width={200}
            height={262}
            className="block h-auto w-[200px] max-w-full drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
          />
        </a>
        {divider("mb-[44px] mt-[48px]")}
        <p className="mx-auto max-w-[560px] font-cormorant text-[clamp(17px,2.2vw,21px)] font-light italic leading-[1.75] tracking-[0.2px] text-[rgba(245,240,232,0.75)]">
          {t.text}
        </p>
      </div>
    </div>
  );
}

/** Three rounded photos with a caption each (home and awards). */
export function FeatureCards({ lang, animation = "fadeInUp" }: { lang: Lang; animation?: RevealAnimation }) {
  const texts = getDictionary(lang).common.features;
  return (
    <section className="py-[30px]">
      <div className="gk-container grid grid-cols-1 gap-x-[24px] gap-y-[30px] md:grid-cols-3">
        {FEATURE_IMAGES.map((image, i) => (
          <Reveal key={image} animation={animation} delay={i * 150} className="text-center">
            <Image
              src={image}
              alt=""
              width={683}
              height={1024}
              sizes="(min-width: 768px) 356px, 100vw"
              className="h-auto w-full rounded-[29px]"
            />
            <p className="mt-[15px] font-poppins text-[20px] font-medium leading-[26px] text-[#777] max-md:leading-[20px]">
              {texts[i]}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Dark "world-class gourmet experience" banner (home and awards). */
export function GourmetBanner({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common.gourmet;
  return (
    <BgSection image={`${ASSETS}/images/gourmet-bg.jpg`} overlay="bg-black/[0.84]" className="flex min-h-[65vh] items-center">
      <Tilt position="top" />
      <div className="gk-container relative z-[2] w-full py-[100px] text-center max-md:px-[48px]">
        <Reveal>
          <h2 className="font-cinzel text-[43px] font-bold leading-[1.2] tracking-[-2.15px] text-white max-md:text-[26px] max-md:tracking-[-1.3px]">
            {t.before} <span className="text-[#cfa670]">{t.highlight}</span> {t.after}
          </h2>
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}
