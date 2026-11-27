"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "../i18n";

const MAIL = "bookings@genghiskhangrilltenerife.com";

const field =
  "block w-full rounded-none border-0 border-b border-[#626060] bg-transparent px-[14px] py-[5px] text-[16px] font-light leading-[1.6] tracking-[-0.45px] text-black outline-none placeholder:text-[#757575] focus:border-black max-md:text-[14px]";

/**
 * Elementor "gift card" form. The WordPress endpoint is not available after the migration, so a
 * submit opens the visitor's mail client with the details addressed to the bookings inbox.
 */
export function GiftCardForm({ t }: { t: Dictionary["tc"]["form"] }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `${t.name.replace("*", "")}: ${data.get("name") ?? ""}`,
      `${t.phone.replace("*", "")}: ${data.get("phone") ?? ""}`,
      `${t.email.replace("*", "")}: ${data.get("email") ?? ""}`,
      "",
      t.message,
      `${data.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      name="gift-card"
      onSubmit={onSubmit}
      className="mt-[34px] px-[60px] max-md:mt-[5%] max-md:px-[42px]"
    >
      <div className="-mx-[15px] flex flex-wrap">
        <div className="mb-[35px] w-1/2 px-[15px] max-md:w-full">
          <label htmlFor="gc-name" className="sr-only">
            {t.name}
          </label>
          <input id="gc-name" name="name" type="text" placeholder={t.name} required className={field} />
        </div>
        <div className="mb-[35px] w-1/2 px-[15px] max-md:w-full">
          <label htmlFor="gc-phone" className="sr-only">
            {t.phone}
          </label>
          <input id="gc-phone" name="phone" type="tel" placeholder={t.phone} required className={field} />
        </div>
        <div className="mb-[35px] w-full px-[15px]">
          <label htmlFor="gc-email" className="sr-only">
            {t.email}
          </label>
          <input id="gc-email" name="email" type="email" placeholder={t.email} required className={field} />
        </div>
        <div className="mb-[35px] w-full px-[15px]">
          <label htmlFor="gc-message" className="sr-only">
            {t.message}
          </label>
          <textarea
            id="gc-message"
            name="message"
            rows={4}
            placeholder={t.message}
            className={cn(field, "resize-y")}
          />
        </div>
        <div className="w-full px-[15px] text-center">
          <button
            type="submit"
            className="inline-block border border-black bg-black px-[22px] py-[15px] text-[14px] font-light uppercase leading-[1.3] tracking-[1.53px] text-white transition-colors hover:bg-transparent hover:text-black"
          >
            {t.submit}
          </button>
          {sent && (
            <p role="status" className="mt-[20px] text-[16px] font-light leading-[1.6] text-black max-md:text-[14px]">
              {t.thanks} {MAIL}.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
