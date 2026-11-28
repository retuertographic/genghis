import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { ASSETS, EXPERIENCE_GALLERIES, INNOVATION_GALLERIES } from "./data";
import { getDictionary, localizedPath, type Dictionary, type Lang } from "./i18n";
import { Rich } from "./i18n/rich";
import { BookNowButton } from "./booking-modal";
import { Galleries } from "./gallery";
import { ReadMore } from "./read-more";
import { Reveal } from "./reveal";
import { RestaurantJsonLd } from "./structured-data";
import { Tilt } from "./tilt";
import {
  AwardCard,
  BgSection,
  Card,
  Display,
  FeatureCards,
  GourmetBanner,
  InstagramSection,
  ReviewsSection,
  Script,
} from "./shared";

type T = Dictionary["home"];

function Hero({ t }: { t: T }) {
  return (
    <BgSection
      image={`${ASSETS}/images/hero.jpg`}
      position="50% 0%"
      priority
      overlay="bg-black/[0.39]"
      className="flex items-center md:min-h-[900px] md:h-[calc(100vh)]"
    >
      <div className="gk-container relative z-[2] w-full text-center text-white max-md:px-[48px] max-md:pb-[42px]">
        <Reveal as="div" animation="fadeIn">
          <Script>{t.heroScript}</Script>
        </Reveal>
        <Reveal animation="fadeInUp" delay={150}>
          <Display className="mt-[15px] max-md:mt-[15px]">{t.heroLine1}</Display>
          <Display className="mt-[15px]">{t.heroLine2}</Display>
        </Reveal>
        <Reveal animation="fadeInUp" delay={300} className="mt-[23px]">
          <BookNowButton />
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

function Awards({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="pt-[7px]">
      <div className="gk-container">
        <Display className="text-center text-[35px] leading-[35px] text-black max-md:text-[40px] max-md:leading-[40px]">
          {t.premium}
        </Display>
      </div>
      <div className="mx-auto mt-[55px] max-w-[960px] px-[24px] pb-[100px] max-md:mt-[20px] max-md:px-[24px]">
        <AwardCard lang={lang} />
      </div>
    </section>
  );
}

function Innovation({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="pb-[40px] pt-[30px]">
      <div className="mx-auto grid max-w-[1164px] grid-cols-1 items-start lg:grid-cols-[471px_1fr]">
        <Card className="lg:-mt-[30px]">
          <Reveal>
            <Display className="text-black">{t.innovation.line1}</Display>
            <Script className="mt-[20px] text-[#cfa670]">{t.innovation.script}</Script>
            <Display className="mt-[15px] text-black">{t.innovation.line2}</Display>
          </Reveal>
          <Reveal className="mt-[25px] flex justify-center">
            <Image src={`${ASSETS}/images/leaf.png`} alt="" width={18} height={25} />
          </Reveal>
          <Reveal className="mt-[20px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
            <p>
              <Rich text={t.intro} lang={lang} />
            </p>
          </Reveal>
          <Reveal className="font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
            <ReadMore>
              <div className="space-y-4 pt-4">
                {t.story.map((p) => (
                  <p key={p}>
                    <Rich text={p} lang={lang} />
                  </p>
                ))}
              </div>
            </ReadMore>
          </Reveal>
        </Card>
        <Galleries groups={INNOVATION_GALLERIES} className="mt-[30px] px-[10px] lg:-ml-[60px] lg:mt-[70px] lg:px-0" />
      </div>
    </section>
  );
}

function LambShoulder({ t, lang }: { t: T; lang: Lang }) {
  return (
    <BgSection
      image={`${ASSETS}/images/lamb-shoulder-bg.jpg`}
      overlay="bg-black/[0.51]"
      className="mb-[15px] flex min-h-[65vh] items-center"
    >
      <Tilt position="top" />
      <div className="gk-container relative z-[2] w-full py-[100px] text-center max-md:px-[48px]">
        <Reveal>
          <h2 className="font-cinzel text-[35px] font-semibold uppercase leading-[43px] tracking-[-2px] text-white max-md:text-[23px] max-md:tracking-[-0.3px]">
            {t.lambTeaser}
          </h2>
        </Reveal>
        <Reveal animation="slideInLeft" className="mt-[20px]">
          <Link
            href={localizedPath(lang, "/lamb-shoulder/")}
            className="inline-block rounded-[10px] border-[3px] border-[#cfa670] px-[30px] py-[15px] font-cinzel text-[14px] font-bold uppercase leading-[26px] text-[#cfa670] transition-colors hover:bg-black/[0.59] max-md:leading-[20px]"
          >
            {t.discover}
          </Link>
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

function Steps({ t }: { t: T }) {
  return (
    <div className="relative mx-auto mt-[30px] max-w-[300px] pl-[60px] text-left max-md:max-w-none">
      <div aria-hidden className="absolute bottom-0 left-[21px] top-[-24px] w-px bg-[#999]" />
      <ol className="space-y-[27px]">
        {t.steps.map((text, i) => (
          <Reveal as="li" key={text} delay={i * 120} className="relative">
            <span
              aria-hidden
              className="absolute -left-[45px] top-[18px] flex size-[13px] items-center justify-center rounded-full border-2 border-[#222529] bg-white"
            >
              <span className="size-[5px] rounded-full bg-[#222529]" />
            </span>
            <span
              aria-hidden
              className="absolute -left-[9px] top-[18px] size-[14px] rotate-45 border-b border-l border-[#eee] bg-white"
            />
            <div className="relative flex gap-[20px] border border-[#eee] bg-white px-[25px] py-[20px] min-h-[124px]">
              <Star className="mt-[3px] size-[14px] shrink-0 fill-[#777] text-[#777]" />
              <div>
                <h5 className="font-poppins text-[14px] font-bold leading-[18px] tracking-[-0.7px] text-[#212529]">{i + 1}</h5>
                <p className="mt-[14px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
                  {text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function TimeToExperience({ t }: { t: T }) {
  return (
    <section className="pb-[40px] pt-[30px]">
      <div className="mx-auto grid max-w-[1164px] grid-cols-1 items-start lg:grid-cols-[1fr_471px]">
        <Galleries groups={EXPERIENCE_GALLERIES} className="order-2 mt-[30px] px-[10px] lg:order-1 lg:mt-[70px] lg:px-0" />
        <Card className="order-1 lg:order-2 lg:-ml-[60px] lg:-mt-[30px] lg:mt-0">
          <Reveal>
            <Script className="text-[#cfa670]">{t.time.script}</Script>
            <Display className="mt-[15px] text-black">{t.time.line}</Display>
          </Reveal>
          <Steps t={t} />
          <div className="mt-[40px]">
            <BookNowButton />
          </div>
        </Card>
      </div>
    </section>
  );
}

export function GenghisKhanHome({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).home;
  return (
    <>
      <RestaurantJsonLd lang={lang} />
      <Hero t={t} />
      <Awards t={t} lang={lang} />
      <Innovation t={t} lang={lang} />
      <LambShoulder t={t} lang={lang} />
      <FeatureCards lang={lang} />
      <GourmetBanner lang={lang} />
      <TimeToExperience t={t} />
      <ReviewsSection lang={lang} />
      <InstagramSection lang={lang} />
    </>
  );
}
