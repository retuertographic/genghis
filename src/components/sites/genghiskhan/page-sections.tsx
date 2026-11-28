import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ASSETS, BOOKING_WIDGET_URL } from "./data";
import { BookNowButton } from "./booking-modal";
import { getDictionary, type Lang } from "./i18n";
import { Rich } from "./i18n/rich";
import { Reveal } from "./reveal";
import { BgSection, Display, Script } from "./shared";
import { Tilt } from "./tilt";

/** Inner-page title banner: 40vh, script line + two Cinzel lines, tilt divider at the bottom. */
export function PageBanner({
  image,
  script,
  lines,
  nextColor = "#fff",
  overlay = "bg-black/30",
}: {
  image: string;
  script: string;
  lines: [string, string];
  nextColor?: string;
  overlay?: string;
}) {
  return (
    <BgSection image={image} overlay={overlay} className="flex min-h-[40vh] items-center" position="50% 50%" priority>
      <div className="gk-container relative z-[2] w-full pb-[40px] pt-[20px] text-center text-white max-md:px-[48px] max-md:py-[50px]">
        <Reveal animation="fadeIn">
          <Script>{script}</Script>
        </Reveal>
        <Reveal delay={150}>
          <Display className="mt-[15px]">{lines[0]}</Display>
          <Display className="mt-[15px]">{lines[1]}</Display>
        </Reveal>
      </div>
      <Tilt position="bottom" fill={nextColor} />
    </BgSection>
  );
}

/** Decorative leaves photo band (padding 140/40) between content and the Instagram block. */
export function LeavesBand({ topColor = "#fff" }: { topColor?: string }) {
  return (
    <BgSection image={`${ASSETS}/images/leaves-band.jpg`} overlay="bg-transparent" className="h-[181px] max-md:h-[160px]">
      <Tilt position="top" fill={topColor} />
      <Tilt position="bottom" />
    </BgSection>
  );
}

/** Light blue section holding the inline dish.co reservation widget. */
export function BookingWidgetSection({ className }: { className?: string }) {
  return (
    <section className={cn("bg-[#9dc9dc] pb-[300px] pt-[80px] max-md:py-[2em]", className)}>
      <div className="gk-container">
        <iframe
          title="Genghis Khan Grill reservations"
          src={BOOKING_WIDGET_URL}
          loading="lazy"
          className="mx-auto block h-[664px] w-full max-w-[1116px] border-0"
        />
      </div>
    </section>
  );
}

function InfoHeading({ children }: { children: ReactNode }) {
  return <h3 className="font-montserrat text-[22px] font-semibold leading-[22px] tracking-[-1.1px] text-[#222529]">{children}</h3>;
}

const MAIL = "bookings@genghiskhangrilltenerife.com";

/** "Located in the stylish fishing village…" contact block with the black opening-times card. */
export function LocationInfo({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common.location;
  return (
    <section className="my-[80px] max-lg:my-[60px] max-md:my-[40px]">
      <div className="gk-container grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[1fr_391px] lg:gap-[100px]">
        <div className="font-montserrat text-[14px] leading-[26px] text-[#777]">
          <Reveal>
            <h3 className="max-w-[567px] text-[34px] font-semibold leading-[47.6px] tracking-[-1.7px] text-[#222529] max-md:text-[26px] max-md:leading-[36px]">
              {t.title}
            </h3>
          </Reveal>
          <div className="mt-[40px] grid grid-cols-1 gap-x-[40px] gap-y-[40px] sm:grid-cols-2 lg:-ml-[12px]">
            <Reveal className="space-y-[40px]">
              <div>
                <InfoHeading>{t.phoneTitle}</InfoHeading>
                <p className="mt-[30px]">{t.phoneIntro}</p>
                <p className="mt-[20px]">
                  <a href="tel:0034922692798">922 69 27 98</a> {t.phoneOr} &nbsp; <a href="tel:0034688151137">688 15 11 37</a>
                </p>
              </div>
              <div>
                <InfoHeading>{t.emailTitle}</InfoHeading>
                <p className="mt-[30px]">{t.emailIntro}</p>
                <a href={`mailto:${MAIL}`} className="text-[#222529] hover:text-[#cfa670]">
                  {MAIL}
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <InfoHeading>{t.groupTitle}</InfoHeading>
              <p className="mt-[30px]">
                <Rich text={t.groupText} lang={lang} linkClassName="text-[#222529] hover:text-[#cfa670]" />
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal animation="fadeInRight" className="bg-black p-[20px] lg:mt-[0px]">
          <div className="border border-white/60 px-[20px] py-[30px] font-poppins text-[14px] leading-[14px] text-white">
            <h4 className="font-montserrat text-[16px] font-black leading-[22.4px] tracking-[-0.8px]">{t.hoursTitle}</h4>
            <p className="mt-[24px]">{t.days}</p>
            <p className="mt-[32px]">{t.hours}</p>
            <h4 className="mt-[40px] font-montserrat text-[16px] font-black leading-[22.4px] tracking-[-0.8px]">{t.placeTitle}</h4>
            <p className="mt-[24px] leading-[22px]">
              {t.place}
            </p>
            <div className="mt-[30px] text-center">
              <BookNowButton className="border-[#cfa670] bg-[#cfa670] px-[25px] py-[12px] text-[15px] leading-[15px] hover:border-white hover:bg-white hover:text-black" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
