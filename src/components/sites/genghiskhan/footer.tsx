import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { ASSETS, QUICK_LINKS, SOURCE } from "./data";
import {
  FacebookFIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "./brand-icons";

const PAGE = encodeURIComponent(`${SOURCE}/`);
const TITLE = encodeURIComponent("Genghis Khan, Innovative Grill");

const SHARE: { label: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "WhatsApp", href: `https://wa.me/?text=${TITLE}%20${PAGE}`, icon: WhatsappIcon },
  { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${PAGE}`, icon: FacebookFIcon },
  { label: "Twitter", href: `https://twitter.com/intent/tweet?url=${PAGE}&text=${TITLE}`, icon: TwitterIcon },
  { label: "Telegram", href: `https://t.me/share/url?url=${PAGE}&text=${TITLE}`, icon: TelegramIcon },
  { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${PAGE}`, icon: LinkedinIcon },
  { label: "Pinterest", href: `https://pinterest.com/pin/create/button/?url=${PAGE}`, icon: PinterestIcon },
];

function Heading({ children }: { children: string }) {
  return <h2 className="text-[18px] font-bold leading-[18px] tracking-[-0.45px] text-white">{children}</h2>;
}

function Label({ children }: { children: string }) {
  return <div className="text-[14px] font-semibold leading-[18px] tracking-[-0.35px] text-[#888]">{children}</div>;
}

export function Footer() {
  return (
    <footer className="font-poppins">
      <div className="relative bg-[#05001a]">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-top-left"
          style={{ backgroundImage: `url(${ASSETS}/images/bg-leaves.png)` }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/70" />
        <div className="gk-container relative grid grid-cols-1 gap-y-[34px] py-[30px] text-center md:grid-cols-4 md:text-left max-md:pb-[40px]">
          <div className="flex items-center justify-center max-md:order-first">
            <Image
              src={`${ASSETS}/images/logo.png`}
              alt=""
              width={195}
              height={195}
              className="size-[195px] max-md:size-[216px]"
            />
          </div>

          <div className="md:px-0">
            <Heading>VISIT US</Heading>
            <div className="mt-[18px]">
              <Label>ADDRESS</Label>
              <div className="text-[14px] leading-[18px] tracking-[-0.42px] text-white">
                Centro Comercial San Sebastián, Calle la Enramada, Local 21, 38679 La Caleta, Santa Cruz de Tenerife
              </div>
            </div>
            <div className="mt-[12px]">
              <Label>OPENING TIMES</Label>
              <div className="text-[14px] leading-[18px] tracking-[-0.35px] text-white">Mon - Sun / 13 - 23</div>
            </div>
            <div className="mt-[20px]">
              <Heading>SHARE THIS PAGE</Heading>
              <ul className="mt-[14px] flex justify-between gap-[2px] md:justify-start">
                {SHARE.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share on ${label}`}
                      className="flex size-[33px] items-center justify-center bg-white text-[18px] text-[#0c0a2a] transition-colors hover:bg-[#cfa670] hover:text-white"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Heading>QUICK LINKS</Heading>
            <ul className="mt-[14px] text-[13px] leading-[26px] max-md:leading-[20px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white transition-colors hover:text-[#cfa670]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>CONTACT</Heading>
            <div className="mt-[18px]">
              <Label>TELEPHONES</Label>
              <p className="text-[14px] leading-[18px] tracking-[-0.35px] text-white">
                <a href="tel:0034688151137">0034 688 151 137</a>
              </p>
            </div>
            <div className="mt-[12px]">
              <Label>EMAIL</Label>
              <p className="text-[14px] leading-[18px] tracking-[-0.56px] text-white">
                <a href="mailto:bookings@genghiskhangrilltenerife.com">bookings@genghiskhangrilltenerife.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black">
        <div className="gk-container py-[19px] pb-[61px] text-[12px] font-medium leading-[22px] text-[#999] max-md:text-center">
          Genghis Khan, Innovative Grill. © {new Date().getFullYear()}. All Rights Reserved.{" "}
          <a href="https://retuertographicdesign.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Developed by Retuerto Graphic Design. Ricardo Retuerto Barrera | Spain-Germany | 0034 922 971 723 | 0049 30 46690385
          </a>
        </div>
      </div>
    </footer>
  );
}
