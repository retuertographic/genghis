import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { BookingWidgetSection } from "@/components/sites/genghiskhan/page-sections";
import { SiteShell } from "@/components/sites/genghiskhan/site-shell";

export const metadata: Metadata = { title: "Page not found – Genghis Khan, Innovative Grill" };

/** Porto theme 404 page, followed by the inline reservation widget so visitors can still book. */
export default function NotFound() {
  return (
    <SiteShell>
      <section className="gk-container py-[60px] max-md:py-[40px]">
        <div className="pl-[96px] max-lg:pl-0">
          <h2 className="flex items-center gap-[20px] font-[Helvetica_Neue,Helvetica,Arial,sans-serif] text-[150px] font-bold leading-none tracking-[-10px] text-[#222529] max-md:text-[90px]">
            404
            <FileText aria-hidden className="size-[120px] fill-[#222529] text-white max-md:size-[80px]" strokeWidth={1.2} />
          </h2>
          <p className="mt-[40px] text-[20px] leading-[26px] text-[#777] max-md:text-[16px]">
            We&apos;re sorry, but the page you were looking for doesn&apos;t exist.
          </p>
        </div>
      </section>
      <BookingWidgetSection className="pb-[80px]" />
    </SiteShell>
  );
}
