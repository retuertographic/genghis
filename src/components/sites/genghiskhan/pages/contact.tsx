import type { ReactNode } from "react";
import { BookNowButton } from "../booking-modal";
import { SOCIAL } from "../data";
import { getDictionary, type Lang } from "../i18n";
import { ContactFaqs, ContactGalleryStrip } from "./contact-interactive";

const ADDRESS = "Centro Comercial San Sebastián, Calle la Enramada, Local 21, 38679 La Caleta, Santa Cruz de Tenerife";
const MAIL = "bookings@genghiskhangrilltenerife.com";

/** Google Maps embed of the restaurant, in the page language. */
function mapUrl(lang: Lang) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(`Genghis Khan Grill, ${ADDRESS}`)}&z=16&hl=${lang}&output=embed`;
}

function InfoColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="px-[12px] py-[16px] text-center">
      <h4 className="font-poppins text-[25.2px] font-semibold leading-[27px] tracking-[2px] text-[#222529] max-md:text-[23.4px]">
        {title}
      </h4>
      <div className="mt-[14px] flex flex-col gap-[29px] font-poppins text-[18.9px] leading-[26px] text-[#969696] max-md:gap-[27px] max-md:text-[17.55px]">
        {children}
      </div>
    </div>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).contact;
  const link = "transition-colors hover:text-[#222529]";
  return (
    <>
      <section className="my-[80px]">
        <div className="gk-container grid grid-cols-1 md:grid-cols-2 max-md:px-[7px]">
          <InfoColumn title={t.findUs}>
            <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" className={link}>
              {t.addressLine1}
            </a>
            <span>{t.addressLine2}</span>
            <span>{t.hours}</span>
          </InfoColumn>
          <InfoColumn title={t.contactUs}>
            <span>
              <a href="tel:0034922692798" className={link}>
                0034 922 692 798
              </a>
              {" · "}
              <a href="tel:0034688151137" className={link}>
                0034 688 151 137
              </a>
            </span>
            <a href={`mailto:${MAIL}`} className={`${link} max-sm:text-[14.5px]`}>
              {MAIL}
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
              WhatsApp: 0034 694 462 568
            </a>
          </InfoColumn>
        </div>
      </section>

      <section className="h-[580px] bg-[#e5e3df]">
        <iframe
          title={t.mapTitle}
          src={mapUrl(lang)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block size-full border-0 grayscale-[0.9] contrast-[0.9] brightness-[1.05]"
        />
      </section>

      <ContactGalleryStrip followText={t.followInstagram} openPhotoText={t.openPhoto} />

      <section className="mt-[60px]">
        <div className="gk-container">
          <ContactFaqs faqs={t.faqs} lang={lang} />
          <div className="mb-[60px] mt-[31px] text-center">
            <BookNowButton className="rounded-none border-0 bg-[#222529] px-[38.4px] py-[20px] text-[12.8px] uppercase leading-[19px] tracking-[2.5px] transition-transform duration-300 hover:scale-110 hover:bg-[#222529] max-md:text-[11.9px]" />
          </div>
        </div>
      </section>
    </>
  );
}
