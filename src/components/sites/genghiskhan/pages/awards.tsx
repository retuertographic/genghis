import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ASSETS, FEATURES, SOCIAL } from "../data";
import { Reveal } from "../reveal";
import { BgSection, InstagramSection } from "../shared";
import { Tilt } from "../tilt";
import { cormorantFull, montserratFull } from "./fonts";

const serif = "font-[family-name:var(--gk-cormorant)]";
const sans = "font-[family-name:var(--gk-montserrat)]";

function GoldRule({ direction }: { direction: "down" | "up" }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-[60px] w-px",
        direction === "down"
          ? "bg-[linear-gradient(to_bottom,transparent,#c8a028)]"
          : "bg-[linear-gradient(to_top,transparent,#c8a028)]",
      )}
    />
  );
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

function Corner({ className }: { className: string }) {
  return <div aria-hidden className={cn("absolute size-6 border-[#c8a028]", className)} />;
}

const STATS = [
  { value: "Top 10%", label: "Globally Ranked" },
  { value: "5 ★", label: "Guest Rating" },
  { value: "2025", label: "Best of the Best" },
];

/** Custom-HTML awards block: hero band, TripAdvisor card, stat strip and CTA on #0c0c0c. */
function AwardsShowcase() {
  return (
    <section className={cn("relative overflow-hidden bg-[#0c0c0c]", sans)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[120px] -top-[120px] size-[500px] bg-[radial-gradient(circle,rgba(200,140,40,0.12)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[120px] -right-[120px] size-[500px] bg-[radial-gradient(circle,rgba(200,140,40,0.10)_0%,transparent_70%)]"
      />

      {/* Hero band */}
      <div className="relative px-6 pb-[80px] pt-[100px] text-center">
        <GoldRule direction="down" />
        <p className="mb-[18px] mt-[36px] text-[11px] font-semibold uppercase leading-[26px] tracking-[5px] text-[#c8a028]">
          Recognition &amp; Excellence
        </p>
        <h1
          className={cn(
            "mb-6 text-[clamp(48px,8vw,90px)] font-light italic leading-[1.05] tracking-[-1px] text-[#f5f0e8]",
            serif,
          )}
        >
          Award
          <br />
          <em className="font-semibold not-italic text-[#c8a028]">Winning</em>
          <br />
          Excellence
        </h1>
        <div aria-hidden className="mx-auto mt-8 flex max-w-[320px] items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,#c8a028)]" />
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path
              d="M9 24C9 24 1 17.5 1 11C1 6.02944 4.02944 2 9 2C9 2 7 5 9 8C11 5 14 3.5 14 3.5C16.5 5.5 17 8.5 17 11C17 17.5 9 24 9 24Z"
              fill="#c8a028"
              opacity="0.9"
            />
            <path
              d="M9 20C9 20 4.5 15.5 4.5 11.5C4.5 9 6 7.5 9 7C9 7 8 9 9 10.5C10 9 11.5 8 11.5 8C13 9 13.5 10.5 13.5 11.5C13.5 15.5 9 20 9 20Z"
              fill="#fce4a0"
              opacity="0.7"
            />
          </svg>
          <div className="h-px flex-1 bg-[linear-gradient(to_left,transparent,#c8a028)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[960px] px-6 pb-[100px] max-md:px-[12px]">
        {/* TripAdvisor award card */}
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
            <div className="mb-[36px] inline-block rounded-full border border-[rgba(200,160,40,0.4)] bg-[rgba(200,160,40,0.06)] px-5 py-[6px] text-[10px] font-bold uppercase leading-[26px] tracking-[4px] text-[#c8a028]">
              2025
            </div>
            <h2
              className={cn(
                "mb-3 text-[clamp(26px,4vw,42px)] font-normal leading-[1.2] tracking-[0.5px] text-[#f5f0e8]",
                serif,
              )}
            >
              Travellers&apos; Choice Award
            </h2>
            <p className="mb-[44px] text-[12px] uppercase leading-[26px] tracking-[2px] text-[rgba(200,160,40,0.7)]">
              Best of the Best · Restaurants · 2025
            </p>
            <DiamondDivider className="mb-[48px]" />
            <a
              href={SOCIAL.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-[transform,filter] duration-300 hover:scale-[1.04] hover:brightness-110"
            >
              <Image
                src={`${ASSETS}/images/tripadvisor-tc-2025.png`}
                alt="TripAdvisor Travellers' Choice 2025"
                width={200}
                height={262}
                className="block h-auto w-[200px] max-w-full drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
              />
            </a>
            <DiamondDivider className="mb-[44px] mt-[48px]" />
            <p
              className={cn(
                "mx-auto max-w-[560px] text-[clamp(17px,2.2vw,21px)] font-light italic leading-[1.75] tracking-[0.2px] text-[rgba(245,240,232,0.75)]",
                serif,
              )}
            >
              Recognised among the world&apos;s finest dining experiences, Genghis Khan Grill has earned the TripAdvisor
              Travellers&apos; Choice Award 2025 — a tribute to every guest who shared their moment with us.
            </p>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-[2px] grid grid-cols-3 gap-px border border-t-0 border-[rgba(200,160,40,0.12)] bg-[rgba(200,160,40,0.12)]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "bg-[#0c0c0c] px-6 py-[36px] text-center",
                i === 1 && "border-x border-[rgba(200,160,40,0.12)]",
              )}
            >
              <p className={cn("mb-[6px] text-[40px] font-semibold leading-none text-[#c8a028]", serif)}>{s.value}</p>
              <p className="text-[10px] font-semibold uppercase leading-[26px] tracking-[3px] text-[rgba(245,240,232,0.45)] max-md:leading-[20px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-[72px] text-center">
          <p
            className={cn(
              "mb-[28px] text-[clamp(20px,3vw,28px)] font-light italic leading-[1.5] tracking-[0.3px] text-[rgba(245,240,232,0.55)]",
              serif,
            )}
          >
            Come taste what the world is talking about
          </p>
          <Link
            href="/bookings/"
            className="inline-block border border-[#c8a028] bg-transparent px-[48px] py-[16px] text-[11px] font-semibold uppercase leading-[26px] tracking-[4px] text-[#c8a028] transition-colors duration-300 hover:bg-[#c8a028] hover:text-[#0c0c0c] max-md:leading-[20px]"
          >
            Reserve Your Table
          </Link>
          <div className="mt-[56px]">
            <GoldRule direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-[30px]">
      <div className="gk-container grid grid-cols-1 gap-x-[24px] gap-y-[30px] md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.image} animation="fadeInLeft" delay={i * 150} className="text-center">
            <Image
              src={f.image}
              alt=""
              width={683}
              height={1024}
              sizes="(min-width: 768px) 356px, 100vw"
              className="h-auto w-full rounded-[29px]"
            />
            <p className="mt-[15px] font-poppins text-[20px] font-medium leading-[26px] text-[#777] max-md:leading-[20px]">
              {f.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Gourmet() {
  return (
    <BgSection
      image={`${ASSETS}/images/gourmet-bg.jpg`}
      overlay="bg-black/[0.84]"
      className="flex min-h-[65vh] items-center"
    >
      <Tilt position="top" />
      <div className="gk-container relative z-[2] w-full py-[100px] text-center max-md:px-[48px]">
        <Reveal>
          <h2 className="font-cinzel text-[43px] font-bold leading-[1.2] tracking-[-2.15px] text-white max-md:text-[26px] max-md:tracking-[-1.3px]">
            We firmly believe in offering nothing less than a world-class{" "}
            <span className="text-[#cfa670]">gourmet</span> experience for your events, which is why we consistently invest
            in top-notch services.
          </h2>
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

export function AwardsPage() {
  return (
    <div className={cn(cormorantFull.variable, montserratFull.variable)}>
      <AwardsShowcase />
      <Features />
      <Gourmet />
      <InstagramSection />
    </div>
  );
}
