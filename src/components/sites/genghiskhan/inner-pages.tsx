import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ASSETS, type GalleryImage } from "./data";
import { Galleries } from "./gallery";
import { getDictionary, localizedPath, type Lang } from "./i18n";
import { Rich } from "./i18n/rich";
import { BookingWidgetSection, LeavesBand, LocationInfo, PageBanner } from "./page-sections";
import { Reveal } from "./reveal";
import { Card, Display, InstagramSection, Script } from "./shared";

const img = (name: string, width: number, height: number): GalleryImage => ({
  src: `${ASSETS}/images/${name}`,
  width,
  height,
});

/** Gallery column (left) + white story card (right), 50/50, as on About and Lamb Shoulder. */
function StorySection({
  galleries,
  title,
  children,
}: {
  galleries: { columns: 1 | 2; images: GalleryImage[] }[];
  title: [string, string, string];
  children: ReactNode;
}) {
  return (
    <section className="py-[30px]">
      <div className="mx-auto grid max-w-[1164px] grid-cols-1 items-start lg:grid-cols-2">
        <Galleries groups={galleries} className="order-2 mt-[30px] px-[10px] lg:order-1 lg:mt-[70px] lg:px-0" />
        <Card className="order-1 lg:order-2 lg:-ml-[60px] lg:-mt-[30px] lg:px-[70px]">
          <Reveal>
            <Display className="text-black">{title[0]}</Display>
            <Script className="mt-[20px] text-[#cfa670]">{title[1]}</Script>
            <Display className="mt-[15px] text-black">{title[2]}</Display>
          </Reveal>
          <Reveal className="mt-[25px] flex justify-center">
            <Image src={`${ASSETS}/images/leaf.png`} alt="" width={18} height={25} />
          </Reveal>
          <Reveal className="mt-[20px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
            {children}
          </Reveal>
        </Card>
      </div>
    </section>
  );
}

/* ---------- /bookings/ ---------- */

export function BookingsPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).bookings;
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-bookings.jpg`}
        script={t.script}
        lines={[t.line1, t.line2]}
        nextColor="#9dc9dc"
      />
      <BookingWidgetSection />
      <LeavesBand topColor="#9dc9dc" />
      <InstagramSection lang={lang} />
    </>
  );
}

/* ---------- /lamb-shoulder/ ---------- */

/** Each box opens the matching category of the /menu/ carta. */
const MENU_LINKS = [
  { key: "hotStarters", col: 0, category: "calientes" },
  { key: "skewers", col: 0, category: "brochetas" },
  { key: "fireFlavour", col: 1, category: "fuego-sabor" },
  { key: "seafood", col: 1, category: "mar" },
] as const;

export function LambShoulderPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).lambShoulder;
  return (
    <>
      <PageBanner image={`${ASSETS}/images/banner-lamb-shoulder.jpg`} script={t.script} lines={[t.line1, t.line2]} />
      <StorySection
        title={[t.title.line1, t.title.script, t.title.line2]}
        galleries={[
          { columns: 1, images: [img("lamb-shoulder-dish.jpg", 1334, 1772)] },
          { columns: 2, images: [img("Untitled-2-4.jpg", 768, 512), img("Untitled-2-5.jpg", 768, 512)] },
        ]}
      >
        <p>
          <Rich text={t.story} lang={lang} />
        </p>
      </StorySection>

      <section className="pb-[80px] pt-[40px]">
        <div className="gk-container grid grid-cols-1 gap-x-[30px] gap-y-[20px] md:grid-cols-2">
          {[0, 1].map((col) => (
            <div key={col} className={col === 1 ? "space-y-[20px] md:-mt-[40px]" : "space-y-[20px]"}>
              {MENU_LINKS.filter((l) => l.col === col).map((l) => (
                <Reveal key={l.key}>
                  <Link
                    href={localizedPath(lang, `/menu/#${l.category}`)}
                    className="block border border-black/80 px-[25px] py-[30px] font-cinzel text-[32px] font-semibold leading-[32px] tracking-[-1.6px] text-black transition-colors hover:border-[#cfa670] hover:text-[#cfa670] max-md:text-[26px]"
                  >
                    {t.menuLinks[l.key]}
                  </Link>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </section>

      <LeavesBand />
      <LocationInfo lang={lang} />
      <InstagramSection lang={lang} />
    </>
  );
}

/* ---------- /about/ ---------- */

export function AboutPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).about;
  return (
    <>
      <PageBanner image={`${ASSETS}/images/banner-about.jpg`} script={t.script} lines={[t.line1, t.line2]} />
      <StorySection
        title={[t.title.line1, t.title.script, t.title.line2]}
        galleries={[
          { columns: 2, images: [img("Untitled-2-2.jpg", 768, 512), img("Untitled-2-3.jpg", 768, 512)] },
          { columns: 1, images: [img("Untitled-3-3.jpg", 959, 539)] },
          { columns: 2, images: [img("Untitled-2-4.jpg", 768, 512), img("Untitled-2-5.jpg", 768, 512)] },
        ]}
      >
        {t.story.map((p) => (
          <p key={p} className="mb-[8px] last:mb-0">
            <Rich text={p} lang={lang} />
          </p>
        ))}
      </StorySection>
      <LeavesBand />
      <LocationInfo lang={lang} />
      <InstagramSection lang={lang} />
    </>
  );
}
