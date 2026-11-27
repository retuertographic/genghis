"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, Info, Menu, Phone, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS, NAV_LINKS, SOCIAL } from "./data";
import { FacebookIcon, InstagramIcon, MapMarkedIcon } from "./brand-icons";
import { LANG_NAMES, LANGS, localizedPath, splitLangPath } from "./i18n/config";
import { useI18n } from "./i18n/context";

/** EN · ES · DE · FR · IT · NL: links to the same page in each language. */
function LanguageSwitcher({ path, className }: { path: string; className?: string }) {
  const { lang, t } = useI18n();
  return (
    <nav aria-label={t.header.language} className={cn("flex items-center", className)}>
      <ul className="flex items-center gap-[2px]">
        {LANGS.map((l) => (
          <li key={l}>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${localizedPath(l, path)}`}
              hrefLang={l}
              lang={l}
              title={LANG_NAMES[l]}
              aria-current={l === lang ? "true" : undefined}
              className={cn(
                "block rounded-[3px] px-[5px] text-[11px] font-medium uppercase leading-[20px] tracking-[0.5px] transition-colors",
                l === lang ? "bg-[#cfa670] text-black" : "text-white/80 hover:text-[#cfa670]",
              )}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[23px] text-[18px] text-white ${className}`}>
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70">
        <InstagramIcon />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70">
        <FacebookIcon />
      </a>
      <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-[20px] hover:opacity-70">
        <MapMarkedIcon />
      </a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, t } = useI18n();
  const pathname = usePathname();
  const path = splitLangPath(pathname).path;
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, "")));
  const topItems = [
    { icon: Info, label: t.header.tagline, href: undefined },
    { icon: Clock, label: t.header.hours, href: undefined },
    { icon: Phone, label: "0034 922 692 798", href: "tel:0034922692798" },
    { icon: Send, label: t.nav.contact, href: localizedPath(lang, "/contact/") },
  ];
  // Close the mobile menu after navigating.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-50 font-poppins">
      {/* Top bar */}
      <div className="bg-black">
        <div className="gk-container flex h-[60px] items-center justify-center gap-[34px] max-[991px]:h-[58px]">
          <ul className="hidden items-center gap-[34px] lg:flex">
            {topItems.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-[14px] text-[12px] leading-[26px] text-white">
                <Icon className="size-[14px]" strokeWidth={2.4} />
                {href?.startsWith("/") ? (
                  <Link href={href} className="hover:text-[#cfa670]">
                    {label}
                  </Link>
                ) : href ? (
                  <a href={href} className="hover:text-[#cfa670]">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
          <Socials className="max-[991px]:text-[14px] max-[991px]:gap-[19px]" />
          <LanguageSwitcher path={path} className="max-[991px]:ml-[-6px]" />
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
          <Link href={localizedPath(lang, "/")} aria-label={t.header.tagline} className="shrink-0">
            <Image
              src={`${ASSETS}/images/logo.png`}
              alt={t.header.logoAlt}
              width={70}
              height={70}
              priority
              className="size-[70px]"
            />
          </Link>
          <nav className="ml-[47px] hidden lg:block" aria-label="Main">
            <ul className="flex items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedPath(lang, link.href)}
                    className={`group relative block px-[19.5px] py-[10px] text-[13px] uppercase leading-[20px] tracking-[-0.3px] text-white`}
                  >
                    {t.nav[link.key]}
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
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
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
            <li key={link.key} className="border-t border-white/10">
              <Link
                href={localizedPath(lang, link.href)}
                className="block px-5 py-3 text-[13px] uppercase text-white hover:text-[#cfa670]"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
