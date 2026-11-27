import Image from "next/image";
import { cn } from "@/lib/utils";
import { ASSETS } from "../data";
import { getDictionary, type Lang } from "../i18n";
import { Rich } from "../i18n/rich";
import { PageBanner } from "../page-sections";
import { InstagramSection } from "../shared";
import { roboto } from "./fonts";
import { GiftCardForm } from "./gift-card-form";

const CREAM = "#F8F3EF";

export function TermsPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).tc;
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-about.jpg`}
        script={t.script}
        lines={[t.line1, t.line2]}
        overlay="bg-black/45"
        nextColor={CREAM}
      />

      {/* The source layers background-savage-copia-1.jpg at 9% over #F8F3EF; that image could not be
          retrieved, so the section falls back to the plain cream colour. */}
      <section
        className={cn(
          "bg-[#F8F3EF] px-[20px] pb-[134px] pt-[134px] font-[family-name:var(--gk-roboto)] max-md:px-[33px] max-md:pb-[78px] max-md:pt-[30px]",
          roboto.variable,
        )}
      >
        <div className="mx-auto max-w-[680px]">
          <h1 className="-mt-[5px] text-center font-cinzel text-[55px] font-semibold uppercase leading-[55px] tracking-[-2px] text-black max-md:text-[40px] max-md:leading-[40px]">
            {t.title}
          </h1>
          <Image
            src={`${ASSETS}/images/tc-image.jpg`}
            alt=""
            width={1024}
            height={682}
            sizes="(min-width: 768px) 680px, 100vw"
            className="mt-[20px] h-auto w-full"
          />
          <div className="mt-[20px] text-[16px] font-light leading-[1.6] tracking-[-0.45px] text-black max-md:text-[14px] max-md:leading-[20px]">
            <p className="mb-[10px]">{t.intro}</p>
            <ul className="mb-[10px] list-disc pl-[32px] max-md:pl-[30px]">
              {t.terms.map((term) => (
                <li key={term}>
                  <Rich text={term} lang={lang} linkClassName="hover:underline" />
                </li>
              ))}
            </ul>
            <p>{t.outro}</p>
          </div>
          <GiftCardForm t={t.form} />
        </div>
      </section>

      <div className="mt-[30px]">
        <InstagramSection lang={lang} />
      </div>
    </>
  );
}
