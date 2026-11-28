"use client";

import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { BASE_PATH } from "./data";
import { DEFAULT_LANG, getDictionary, splitLangPath, type Lang } from "./i18n";
import { BookingWidgetSection } from "./page-sections";
import { SiteShell } from "./site-shell";

/**
 * GitHub Pages serves one static 404.html for every missing address, so the language is read from the URL
 * in the browser (/de/… → German) and the header, footer and message follow it.
 */
export function NotFoundPage() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const path = window.location.pathname.slice(BASE_PATH.length) || "/";
    const detected = splitLangPath(path).lang;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the URL is only known in the browser
    setLang(detected);
    document.documentElement.lang = detected;
  }, []);

  const meta = getDictionary(lang).meta;
  return (
    <SiteShell lang={lang}>
      <title>{`${meta.pages.notFound.title} – ${meta.siteName}`}</title>
      <section className="gk-container py-[60px] max-md:py-[40px]">
        <div className="pl-[96px] max-lg:pl-0">
          <h1 className="flex items-center gap-[20px] font-[Helvetica_Neue,Helvetica,Arial,sans-serif] text-[150px] font-bold leading-none tracking-[-10px] text-[#222529] max-md:text-[90px]">
            404
            <FileText aria-hidden className="size-[120px] fill-[#222529] text-white max-md:size-[80px]" strokeWidth={1.2} />
          </h1>
          <p className="mt-[40px] text-[20px] leading-[26px] text-[#777] max-md:text-[16px]">
            {getDictionary(lang).notFound.text}
          </p>
        </div>
      </section>
      <BookingWidgetSection className="pb-[80px]" />
    </SiteShell>
  );
}
