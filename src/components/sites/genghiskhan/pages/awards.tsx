import Link from "next/link";
import { cn } from "@/lib/utils";
import { getDictionary, localizedPath, type Dictionary, type Lang } from "../i18n";
import { AwardCard, FeatureCards, GourmetBanner, InstagramSection } from "../shared";
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

/** Custom-HTML awards block: hero band, TripAdvisor card, stat strip and CTA on #0c0c0c. */
function AwardsShowcase({ t, lang }: { t: Dictionary["awards"]; lang: Lang }) {
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
          {t.eyebrow}
        </p>
        <h1
          className={cn(
            "mb-6 text-[clamp(48px,8vw,90px)] font-light italic leading-[1.05] tracking-[-1px] text-[#f5f0e8]",
            serif,
          )}
        >
          {t.title.line1}
          <br />
          <em className="font-semibold not-italic text-[#c8a028]">{t.title.highlight}</em>
          <br />
          {t.title.line2}
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
        <AwardCard lang={lang} dividers="diamond" />

        {/* Stat strip */}
        <div className="mt-[2px] grid grid-cols-3 gap-px border border-t-0 border-[rgba(200,160,40,0.12)] bg-[rgba(200,160,40,0.12)]">
          {t.stats.map((s, i) => (
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
            {t.cta}
          </p>
          <Link
            href={localizedPath(lang, "/bookings/")}
            className="inline-block border border-[#c8a028] bg-transparent px-[48px] py-[16px] text-[11px] font-semibold uppercase leading-[26px] tracking-[4px] text-[#c8a028] transition-colors duration-300 hover:bg-[#c8a028] hover:text-[#0c0c0c] max-md:leading-[20px]"
          >
            {t.reserve}
          </Link>
          <div className="mt-[56px]">
            <GoldRule direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AwardsPage({ lang }: { lang: Lang }) {
  return (
    <div className={cn(cormorantFull.variable, montserratFull.variable)}>
      <AwardsShowcase t={getDictionary(lang).awards} lang={lang} />
      <FeatureCards lang={lang} animation="fadeInLeft" />
      <GourmetBanner lang={lang} />
      <InstagramSection lang={lang} />
    </div>
  );
}
