"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, Info, Menu, Phone, Send, X } from "lucide-react";
import { ASSETS, NAV_LINKS, SOCIAL } from "./data";
import { FacebookIcon, InstagramIcon, MapMarkedIcon } from "./brand-icons";

const TOP_ITEMS = [
  { icon: Info, label: "Genghis Khan, Innovative Grill", href: undefined },
  { icon: Clock, label: "Mon-Sun / 13:30 - 23:00", href: undefined },
  { icon: Phone, label: "0034 922 692 798", href: "tel:0034922692798" },
  { icon: Send, label: "Contact", href: "/contact/" },
];

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[23px] text-[18px] text-white ${className}`}>
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70">
        <InstagramIcon />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70">
        <FacebookIcon />
      </a>
      <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" aria-label="Map-marked" className="text-[20px] hover:opacity-70">
        <MapMarkedIcon />
      </a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));
  // Close the mobile menu after navigating.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-50 font-poppins">
      {/* Top bar */}
      <div className="bg-black">
        <div className="gk-container flex h-[60px] items-center justify-center gap-[34px] max-[991px]:h-[58px]">
          <ul className="hidden items-center gap-[34px] lg:flex">
            {TOP_ITEMS.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-[14px] text-[12px] leading-[26px] text-white">
                <Icon className="size-[14px]" strokeWidth={2.4} />
                {href ? (
                  <Link href={href} className="hover:text-[#cfa670]">
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
          <Socials className="max-[991px]:text-[14px] max-[991px]:gap-[19px]" />
        </div>
      </div>

      {/* Main bar */}
      <div className="relative overflow-hidden bg-[#05001a]">
        <div
          aria-hidden
          className="absolute inset-0 bg-contain bg-top-left"
          style={{ backgroundImage: `url(${ASSETS}/images/bg-leaves.png)` }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/[0.69]" />
        <div className="gk-container relative flex h-[96px] items-center max-[991px]:h-[117px]">
          <Link href="/" aria-label="Genghis Khan, Innovative Grill" className="shrink-0">
            <Image
              src={`${ASSETS}/images/logo.png`}
              alt="Genghis Khan Grill logo"
              width={70}
              height={70}
              priority
              className="size-[70px]"
            />
          </Link>
          <nav className="ml-[47px] hidden lg:block" aria-label="Main">
            <ul className="flex items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group relative block px-[19.5px] py-[10px] text-[13px] uppercase leading-[20px] tracking-[-0.3px] text-white`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-[3px] left-[19.5px] right-[19.5px] h-[2px] origin-left bg-[#cfa670] transition-transform duration-300 ${
                        isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="ml-auto p-2 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-[18px]" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={`grid bg-[#05001a] transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="overflow-hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="border-t border-white/10">
              <Link href={link.href} className="block px-5 py-3 text-[13px] uppercase text-white hover:text-[#cfa670]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
