import type { ReactNode } from "react";
import { BookingProvider } from "./booking-modal";
import { Footer } from "./footer";
import { Header } from "./header";
import { getDictionary, type Lang } from "./i18n";
import { I18nProvider } from "./i18n/context";

/** Header + footer + booking modal: written once, shared by every page in every language. */
export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <I18nProvider lang={lang} t={getDictionary(lang).common}>
      <BookingProvider>
        <div className="genghis flex min-h-screen flex-col overflow-x-clip bg-white font-poppins text-[14px] leading-[26px] text-[#777]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} />
        </div>
      </BookingProvider>
    </I18nProvider>
  );
}
