import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";
import { cn } from "@/lib/utils";
import { ASSETS } from "../data";
import { AnchorLink } from "./anchor-link";
import { BackButton } from "./back-button";
import {
  FIRE_AND_FLAVOUR,
  MENU_LINKS,
  MENU_ROWS,
  MENU_ROWS_AFTER_FIRE,
  type MenuSection,
} from "./data";
import { MenuLines, PARAGRAPH } from "./menu-line";
import { StickyNav } from "./sticky-nav";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
});

/** Anchors sit under the 80px sticky nav when jumped to. */
const ANCHOR = "scroll-mt-20";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className={cn(
        ANCHOR,
        "mb-5 text-center text-[36px] font-semibold leading-none tracking-[-0.05em] max-md:text-[33.43px]",
      )}
    >
      {children}
    </h2>
  );
}

function Column({ section }: { section: MenuSection | null }) {
  return (
    <div className="py-3">
      {section && (
        <>
          <SectionHeading id={section.id}>{section.title}</SectionHeading>
          <MenuLines lines={section.lines} />
        </>
      )}
    </div>
  );
}

function Row({ pair }: { pair: [MenuSection, MenuSection | null] }) {
  return (
    <div className="grid px-5 min-[992px]:grid-cols-2 min-[992px]:gap-x-6">
      <Column section={pair[0]} />
      <Column section={pair[1]} />
    </div>
  );
}

function FireAndFlavour() {
  const { id, title, blocks } = FIRE_AND_FLAVOUR;
  return (
    <div className="px-5">
      <div className="py-3 min-[992px]:ml-[219px] min-[992px]:w-[625px]">
        <SectionHeading id={id}>{title}</SectionHeading>
        {blocks.map((block, i) => (
          <div key={i} className="mb-5 flow-root last:mb-0">
            {block.kind === "list" ? (
              <MenuLines lines={block.lines} />
            ) : (
              <p
                className={cn(
                  PARAGRAPH,
                  "text-center text-[14px]/[26px] font-medium max-md:text-[13px]/5",
                  block.kind === "label" ? "uppercase" : "italic",
                )}
              >
                {block.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuPage() {
  return (
    <main className="relative min-h-screen bg-black bg-[url(/sites/genghiskhan/images/menu-2-2-bg.jpg)] bg-repeat px-0 pt-20 pb-[300px] font-poppins text-white max-md:py-[26px]">
      <div aria-hidden className="absolute inset-0 bg-black/60 opacity-84" />
      <div
        id="principales"
        className="relative mx-auto w-[1140px] max-w-full border-[3px] border-[#00927E] bg-[#1E3D4BE6] p-3 max-md:border-x-0 max-md:px-1 max-md:py-0"
      >
        <div className="mb-5">
          <BackButton />
        </div>
        <Image
          src={`${ASSETS}/images/menu-2-2-logo.png`}
          alt="Genghis Khan Grill"
          width={200}
          height={200}
          priority
          className="mx-auto mb-5 size-[200px]"
        />
        <StickyNav />
        <h1
          id="carta"
          className={cn(
            cinzelDecorative.className,
            ANCHOR,
            "mb-5 text-center text-[65px] leading-none font-bold tracking-[-0.05em] max-md:mb-[30px]",
          )}
        >
          Menu
        </h1>
        <p className="mb-10 text-center text-[17px] leading-[26px] max-md:mb-[38.7px] max-md:leading-5">
          {MENU_LINKS.map((link, i) => (
            <span key={link.id}>
              {i > 0 && " | "}
              <AnchorLink id={link.id} className="text-white">
                {link.label}
              </AnchorLink>
            </span>
          ))}
        </p>
        {MENU_ROWS.map((pair) => (
          <Row key={pair[0].id} pair={pair} />
        ))}
        <FireAndFlavour />
        {MENU_ROWS_AFTER_FIRE.map((pair) => (
          <Row key={pair[0].id} pair={pair} />
        ))}
      </div>
    </main>
  );
}
