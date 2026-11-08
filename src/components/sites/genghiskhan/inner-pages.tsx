import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ASSETS, type GalleryImage } from "./data";
import { Galleries } from "./gallery";
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

export function BookingsPage() {
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-bookings.jpg`}
        script="Take part of the experience"
        lines={["Place your", "Booking"]}
        nextColor="#9dc9dc"
      />
      <BookingWidgetSection />
      <LeavesBand topColor="#9dc9dc" />
      <InstagramSection />
    </>
  );
}

/* ---------- /lamb-shoulder/ ---------- */

const MENU_LINKS = [
  { label: "Hot appetisers", col: 0 },
  { label: "Skewers", col: 0 },
  { label: "Fire & Flavour", col: 1 },
  { label: "Seafood specialties", col: 1 },
];

export function LambShoulderPage() {
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-lamb-shoulder.jpg`}
        script="We present: Our menu star"
        lines={["Charcoal grilled", "Lamb shoulder"]}
      />
      <StorySection
        title={["in the heart", "of our kitchen", "a spectacle"]}
        galleries={[
          { columns: 1, images: [img("lamb-shoulder-dish.jpg", 1334, 1772)] },
          { columns: 2, images: [img("Untitled-2-4.jpg", 768, 512), img("Untitled-2-5.jpg", 768, 512)] },
        ]}
      >
        <p>
          Unfolds as we proudly present the masterpiece of our menu: the <strong>Charcoal Grilled Lamb Shoulder</strong>,
          prepared in the authentic Mongolian style. This exceptional dish begins its journey in the verdant landscapes of{" "}
          <strong>New Zealand</strong>, where the finest lamb shoulders are handpicked and sent to our exclusive Spanish
          establishment. Before the lamb shoulder meets the scorching heat of charcoal, it is bathed in an exclusive mixture
          of herbs and spices – a closely guarded secret honed over years. This marinade seeps into the very essence of the
          lamb, casting a spell of irresistible flavors that dance on your tastebuds. The performance doesn’t end there.
          Each succulent piece, tender and adorned with a smoky crust, is treated to our unique in-house ageing techniques.
          Borrowing from traditional Mongolian practices, these techniques serve to enhance and intensify the lamb
          shoulder’s flavors with each passing moment. Thus, in a world teeming with lamb shoulder dishes, our{" "}
          <strong>Charcoal Grilled Lamb Shoulder</strong> steals the limelight. It’s more than just a dish; it’s an
          unforgettable culinary voyage that can only be embarked in <strong>Spain</strong> within the walls of our
          restaurant. We eagerly await to guide you on this gastronomic odyssey. So it is, the{" "}
          <strong>Charcoal Grilled Lamb Shoulder</strong> takes center stage in our menu, promising not just a meal, but an
          unforgettable gastronomic adventure that we are thrilled to share with you.
        </p>
      </StorySection>

      <section className="pb-[80px] pt-[40px]">
        <div className="gk-container grid grid-cols-1 gap-x-[30px] gap-y-[20px] md:grid-cols-2">
          {[0, 1].map((col) => (
            <div key={col} className={col === 1 ? "space-y-[20px] md:-mt-[40px]" : "space-y-[20px]"}>
              {MENU_LINKS.filter((l) => l.col === col).map((l) => (
                <Reveal key={l.label}>
                  <Link
                    href="/menu-2-2/"
                    className="block border border-black/80 px-[25px] py-[30px] font-cinzel text-[32px] font-semibold leading-[32px] tracking-[-1.6px] text-black transition-colors hover:border-[#cfa670] hover:text-[#cfa670] max-md:text-[26px]"
                  >
                    {l.label}
                  </Link>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </section>

      <LeavesBand />
      <LocationInfo />
      <InstagramSection />
    </>
  );
}

/* ---------- /about/ ---------- */

export function AboutPage() {
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-about.jpg`}
        script="Discover"
        lines={["Flavours of", "unique moments"]}
      />
      <StorySection
        title={["Innovation", "Meets", "tradition"]}
        galleries={[
          { columns: 2, images: [img("Untitled-2-2.jpg", 768, 512), img("Untitled-2-3.jpg", 768, 512)] },
          { columns: 1, images: [img("Untitled-3-3.jpg", 959, 539)] },
          { columns: 2, images: [img("Untitled-2-4.jpg", 768, 512), img("Untitled-2-5.jpg", 768, 512)] },
        ]}
      >
        <p>
          In this place, the story of the discovery of <strong>cooking with fire</strong> is told in an original and
          captivating way. A prominent part of this story is how the use of charcoal in the kitchen becomes a key element to
          enhance the <strong>flavors of the dishes.</strong>
          <br />
          The restaurant features tables inspired by the time of the great conqueror Genghis Khan,{" "}
          <strong>a key feature of the culinary experience</strong> that you can enjoy while cooking a wide variety of fresh
          meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness.
          <br />A place in Costa Adeje designed for those who seek to{" "}
          <strong>delight not only in food but also in unique stories and moments.</strong> With its innovative approach and
          return to origins with charcoal cooking, it is able to transport you to another era while enjoying the most{" "}
          <strong>exquisite flavors and textures.</strong>
        </p>
      </StorySection>
      <LeavesBand />
      <LocationInfo />
      <InstagramSection />
    </>
  );
}
