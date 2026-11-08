import type { ReactNode } from "react";
import { BookingProvider } from "./booking-modal";
import { Footer } from "./footer";
import { Header } from "./header";

/** Header + footer + booking modal shared by every page of the clone. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      <div className="genghis flex min-h-screen flex-col bg-white font-poppins text-[14px] leading-[26px] text-[#777]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </BookingProvider>
  );
}
