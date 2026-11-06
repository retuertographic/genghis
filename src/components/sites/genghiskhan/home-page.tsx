import Image from "next/image";
import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ASSETS,
  EXPERIENCE_GALLERIES,
  FEATURES,
  INNOVATION_GALLERIES,
  REVIEWS,
  SOCIAL,
  SOURCE,
  STEPS,
} from "./data";
import { BookNowButton, BookingProvider } from "./booking-modal";
import { Footer } from "./footer";
import { Galleries } from "./gallery";
import { Header } from "./header";
import { InstagramFeed } from "./instagram-feed";
import { ReadMore } from "./read-more";
import { Reveal } from "./reveal";
import { Tilt } from "./tilt";

/* ---------- Shared typography ---------- */

function Script({ children, className }: { children: ReactNode; className?: string }) {
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

function Display({ children, className }: { children: ReactNode; className?: string }) {
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

function BgSection({
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
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div aria-hidden className={cn("absolute inset-0", overlay)} />
      {children}
    </section>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <BgSection
      image={`${ASSETS}/images/hero.jpg`}
      position="50% 0%"
      overlay="bg-black/[0.39]"
      className="flex items-center md:min-h-[900px] md:h-[calc(100vh)]"
    >
      <div className="gk-container relative z-[2] w-full text-center text-white max-md:px-[48px] max-md:pb-[42px]">
        <Reveal as="div" animation="fadeIn">
          <Script>Welcome to the</Script>
        </Reveal>
        <Reveal animation="fadeInUp" delay={150}>
          <Display className="mt-[15px] max-md:mt-[15px]">innovative</Display>
          <Display className="mt-[15px]">grill experience</Display>
        </Reveal>
        <Reveal animation="fadeInUp" delay={300} className="mt-[23px]">
          <BookNowButton />
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

function Corner({ className }: { className: string }) {
  return <div aria-hidden className={cn("absolute size-6 border-[#c8a028]", className)} />;
}

function Awards() {
  return (
    <section className="pt-[7px]">
      <div className="gk-container">
        <Display className="text-center text-[35px] leading-[35px] text-black max-md:text-[40px] max-md:leading-[40px]">
          Premium Grill in La Caleta
        </Display>
      </div>
      <div className="mx-auto mt-[55px] max-w-[960px] px-[24px] pb-[100px] max-md:mt-[20px] max-md:px-[24px]">
        <div
          className="relative overflow-hidden rounded-[4px] border border-[rgba(200,160,40,0.25)] px-[48px] py-[64px] text-center max-md:px-[48px]"
          style={{
            background: "linear-gradient(145deg, #161410 0%, #1a1710 50%, #161410 100%)",
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.8), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(200,160,40,0.15)",
          }}
        >
          <Corner className="left-4 top-4 border-l border-t" />
          <Corner className="right-4 top-4 border-r border-t" />
          <Corner className="bottom-4 left-4 border-b border-l" />
          <Corner className="bottom-4 right-4 border-b border-r" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(200,160,40,0.04) 0%, transparent 60%)" }}
          />
          <div className="relative">
            <div className="mb-[36px] inline-block rounded-full border border-[rgba(200,160,40,0.4)] bg-[rgba(200,160,40,0.06)] px-5 py-[6px] font-poppins text-[10px] font-bold uppercase leading-[26px] tracking-[4px] text-[#c8a028] max-md:leading-[20px]">
              2025
            </div>
            <h2 className="mb-3 font-cormorant text-[clamp(26px,4vw,42px)] font-normal leading-[1.2] tracking-[0.5px] text-[#f5f0e8]">
              Travellers&apos; Choice Award
            </h2>
            <p className="font-montserrat text-[12px] uppercase leading-[26px] tracking-[2px] text-[rgba(200,160,40,0.7)] max-md:leading-[20px]">
              Best of the Best · Restaurants · 2025
            </p>
            <div className="mx-auto my-[48px] max-w-[400px]" />
            <a
              href={SOCIAL.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-[transform,filter] duration-300 hover:scale-105"
            >
              <Image
                src={`${ASSETS}/images/tripadvisor-tc-2025.png`}
                alt="TripAdvisor Travellers' Choice 2025"
                width={200}
                height={262}
                className="block h-auto w-[200px]"
                style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.7))" }}
              />
            </a>
            <div className="mx-auto my-[48px] mb-[44px] max-w-[400px]" />
            <p className="mx-auto max-w-[560px] font-cormorant text-[clamp(17px,2.2vw,21px)] font-light italic leading-[1.75] tracking-[0.2px] text-[rgba(245,240,232,0.75)]">
              Recognised among the world&apos;s finest dining experiences, Genghis Khan Grill has earned the TripAdvisor
              Travellers&apos; Choice Award 2025 — a tribute to every guest who shared their moment with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ children, className }: { children: ReactNode; className?: string }) {
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

function Innovation() {
  return (
    <section className="pb-[40px] pt-[30px]">
      <div className="mx-auto grid max-w-[1164px] grid-cols-1 items-start lg:grid-cols-[471px_1fr]">
        <Card className="lg:-mt-[30px]">
          <Reveal>
            <Display className="text-black">Innovation</Display>
            <Script className="mt-[20px] text-[#cfa670]">Meets</Script>
            <Display className="mt-[15px] text-black">tradition</Display>
          </Reveal>
          <Reveal className="mt-[25px] flex justify-center">
            <Image src={`${ASSETS}/images/leaf.png`} alt="" width={18} height={25} />
          </Reveal>
          <Reveal className="mt-[20px] font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
            <p>
              Imagine a restaurant where <strong>innovation</strong> and respect for <strong>ancestral</strong>{" "}
              techniques combine to create a unique gastronomic experience.
            </p>
          </Reveal>
          <Reveal className="font-poppins text-[14px] leading-[26px] text-[#777] max-md:text-[13px] max-md:leading-[20px]">
            <ReadMore>
              <div className="space-y-4 pt-4">
                <p>
                  In this place, the story of the discovery of <strong>cooking with fire</strong> is told in an original
                  and captivating way. A prominent part of this story is how the use of charcoal in the kitchen becomes a
                  key element to enhance the <strong>flavors of the dishes.</strong>
                </p>
                <p>
                  The restaurant features tables inspired by the time of the great conqueror Genghis Khan,{" "}
                  <strong>a key feature of the culinary experience</strong> that you can enjoy while cooking a wide variety
                  of fresh meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness.
                </p>
                <p>
                  A place in Costa Adeje designed for those who seek to{" "}
                  <strong>delight not only in food but also in unique stories and moments.</strong>
                </p>
                <p>
                  With its innovative approach and return to origins with charcoal cooking, it is able to transport you to
                  another era while enjoying the most <strong>exquisite flavors and textures.</strong>
                </p>
              </div>
            </ReadMore>
          </Reveal>
        </Card>
        <Galleries groups={INNOVATION_GALLERIES} className="mt-[30px] px-[10px] lg:-ml-[60px] lg:mt-[70px] lg:px-0" />
      </div>
    </section>
  );
}

function LambShoulder() {
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
            As you anticipate your upcoming meal, discover the secrets behind the accolades our Shoulder of &apos;&apos;Genghis
            Khan&quot;.
          </h2>
        </Reveal>
        <Reveal animation="slideInLeft" className="mt-[20px]">
          <a
            href={`${SOURCE}/lamb-shoulder/`}
            className="inline-block rounded-[10px] border-[3px] border-[#cfa670] px-[30px] py-[15px] font-cinzel text-[14px] font-bold uppercase leading-[26px] text-[#cfa670] transition-colors hover:bg-black/[0.59] max-md:leading-[20px]"
          >
            Discover
          </a>
        </Reveal>
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

function Features() {
  return (
    <section className="py-[30px]">
      <div className="gk-container grid grid-cols-1 gap-x-[24px] gap-y-[30px] md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.image} delay={i * 150} className="text-center">
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

function Steps() {
  return (
    <div className="relative mx-auto mt-[30px] max-w-[300px] pl-[60px] text-left max-md:max-w-none">
      <div aria-hidden className="absolute bottom-0 left-[21px] top-[-24px] w-px bg-[#999]" />
      <ol className="space-y-[27px]">
        {STEPS.map((text, i) => (
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

function TimeToExperience() {
  return (
    <section className="pb-[40px] pt-[30px]">
      <div className="mx-auto grid max-w-[1164px] grid-cols-1 items-start lg:grid-cols-[1fr_471px]">
        <Galleries groups={EXPERIENCE_GALLERIES} className="order-2 mt-[30px] px-[10px] lg:order-1 lg:mt-[70px] lg:px-0" />
        <Card className="order-1 lg:order-2 lg:-ml-[60px] lg:-mt-[30px] lg:mt-0">
          <Reveal>
            <Script className="text-[#cfa670]">Time</Script>
            <Display className="mt-[15px] text-black">to experience</Display>
          </Reveal>
          <Steps />
          <div className="mt-[40px]">
            <BookNowButton />
          </div>
        </Card>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <BgSection
      image={`${ASSETS}/images/reviews-bg.jpg`}
      overlay="bg-white/[0.66]"
      className="flex min-h-[600px] items-center"
    >
      <Tilt position="top" />
      <div className="gk-container relative z-[2] grid w-full grid-cols-1 gap-[16px] py-[90px] md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="font-[Helvetica_Neue,Helvetica,Arial,sans-serif] max-md:px-[60px]">
            <blockquote className="relative mb-[25px] border border-[#f5f5f5] bg-white py-[20px] pl-[48px] pr-[25px] shadow-[2px_2px_2px_rgba(0,0,0,0.098)]">
              <span aria-hidden className="absolute left-[14px] top-[12px] font-serif text-[40px] leading-none text-[#ccc]">
                &ldquo;
              </span>
              <p className="text-[14px] italic leading-[22.4px] text-[#777]">
                <span className="mr-[2px] inline-flex align-[-2px]" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-[16px] fill-[#fdd022] text-[#fdd022]" />
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
              <Image src={r.avatar} alt={`${r.name} Avatar`} width={50} height={50} className="size-[50px] rounded-full" />
              <div className="text-[13px] uppercase leading-[20.8px] text-[#555]">
                <div>{r.name}</div>
                <div>{r.date}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <Tilt position="bottom" />
    </BgSection>
  );
}

function Instagram() {
  return (
    <section className="pb-[10px]">
      <div className="gk-container">
        <Display className="text-center text-[35px] leading-[35px] text-[#cfa670] max-md:text-[40px] max-md:leading-[40px]">
          Connect with us
        </Display>
        <Display className="mt-[15px] text-center text-black max-md:mt-[55px]">Instagram</Display>
        <div className="mt-[30px]">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}

export function GenghisKhanHome() {
  return (
    <BookingProvider>
      <div className="genghis bg-white font-poppins text-[14px] leading-[26px] text-[#777]">
        <Header />
        <main>
          <Hero />
          <Awards />
          <Innovation />
          <LambShoulder />
          <Features />
          <Gourmet />
          <TimeToExperience />
          <Reviews />
          <Instagram />
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}
