import Image from "next/image";
import { cn } from "@/lib/utils";
import { ASSETS } from "../data";
import { PageBanner } from "../page-sections";
import { InstagramSection } from "../shared";
import { roboto } from "./fonts";
import { GiftCardForm } from "./gift-card-form";

const MAIL = "bookings@genghiskhangrilltenerife.com";
const CREAM = "#F8F3EF";

const TERMS = [
  "Each ticket at Genghis Khan, Innovative Grill allows for only one discount coupon to be applied.",
  "Our coupons are non-refundable and must be used in a single transaction, with no cash redemption possible.",
  "Should the coupon not specify an expiry date, it remains valid for up to six months from the date of issue.",
  "The discount provided by the coupon is deducted from the final sale price at Genghis Khan, Innovative Grill.",
  "In cases where the coupon’s value falls short of the total cost (including IGIC), you are required to pay the remaining balance.",
  "Where your Genghis Khan, Innovative Grill order total is less than the coupon’s worth, please note that the remaining value is non-refundable and cannot be applied to future orders. Any unused portion of the coupon’s value is forfeited.",
  "A coupon that remains unused after its expiry date will no longer be accepted.",
  "Our coupons cannot be combined with other Genghis Khan, Innovative Grill promotions or offers.",
  "customer-service",
  "Genghis Khan, Innovative Grill reserves the right to discontinue a coupon’s validity at any time.",
  "The selling, trading, or unauthorized acquisition of Genghis Khan, Innovative Grill coupons is strictly prohibited. This also extends to any coupons or promotional codes obtained from third parties.",
  "website",
  "Remember to make your reservation in advance, at least one calendar day prior, to redeem your coupon at Genghis Khan, Innovative Grill.",
];

function Term({ text }: { text: string }) {
  if (text === "customer-service") {
    return (
      <>
        For any inquiries, our Customer Service team is ready to assist you at{" "}
        <a href={`mailto:${MAIL}`} className="hover:underline">
          {MAIL}
        </a>
        .
      </>
    );
  }
  if (text === "website") {
    return (
      <>
        For full details and restrictions on our offers, please refer to the specific conditions of each coupon and visit
        our website at{" "}
        <a href="/tc/" className="hover:underline">
          www.genghiskhangrilltenerife.com/tc
        </a>
        .
      </>
    );
  }
  return <>{text}</>;
}

export function TermsPage() {
  return (
    <>
      <PageBanner
        image={`${ASSETS}/images/banner-about.jpg`}
        script="Dining experience"
        lines={["Terms &", "Conditions"]}
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
            Innovative Grill
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
            <p className="mb-[10px]">
              At Genghis Khan, Innovative Grill, we’re excited to offer you the chance to enhance your dining experience
              with our exclusive discount coupons! Here are the details you need to know:
            </p>
            <ul className="mb-[10px] list-disc pl-[32px] max-md:pl-[30px]">
              {TERMS.map((t) => (
                <li key={t}>
                  <Term text={t} />
                </li>
              ))}
            </ul>
            <p>
              We look forward to welcoming you and ensuring you have a memorable dining experience at Genghis Khan,
              Innovative Grill!
            </p>
          </div>
          <GiftCardForm />
        </div>
      </section>

      <div className="mt-[30px]">
        <InstagramSection />
      </div>
    </>
  );
}
