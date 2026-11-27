"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const MAIL = "bookings@genghiskhangrilltenerife.com";

const field =
  "block w-full rounded-none border-0 border-b border-[#626060] bg-transparent px-[14px] py-[5px] text-[16px] font-light leading-[1.6] tracking-[-0.45px] text-black outline-none placeholder:text-[#757575] focus:border-black max-md:text-[14px]";

/**
 * Elementor "gift card" form. The WordPress endpoint is not available after the migration, so a
 * submit opens the visitor's mail client with the details addressed to the bookings inbox.
 */
export function GiftCardForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      "",
      `Why would you like to get one?`,
      `${data.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent("Gift card request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      name="Waiter/Waitress"
      onSubmit={onSubmit}
      className="mt-[34px] px-[60px] max-md:mt-[5%] max-md:px-[42px]"
    >
      <div className="-mx-[15px] flex flex-wrap">
        <div className="mb-[35px] w-1/2 px-[15px] max-md:w-full">
          <label htmlFor="gc-name" className="sr-only">
            Name*
          </label>
          <input id="gc-name" name="name" type="text" placeholder="Name*" required className={field} />
        </div>
        <div className="mb-[35px] w-1/2 px-[15px] max-md:w-full">
          <label htmlFor="gc-phone" className="sr-only">
            Phone*
          </label>
          <input id="gc-phone" name="phone" type="tel" placeholder="Phone*" required className={field} />
        </div>
        <div className="mb-[35px] w-full px-[15px]">
          <label htmlFor="gc-email" className="sr-only">
            Email*
          </label>
          <input id="gc-email" name="email" type="email" placeholder="Email*" required className={field} />
        </div>
        <div className="mb-[35px] w-full px-[15px]">
          <label htmlFor="gc-message" className="sr-only">
            Why would you like to get one?
          </label>
          <textarea
            id="gc-message"
            name="message"
            rows={4}
            placeholder="Why would you like to get one?"
            className={cn(field, "resize-y")}
          />
        </div>
        <div className="w-full px-[15px] text-center">
          <button
            type="submit"
            className="inline-block border border-black bg-black px-[22px] py-[15px] text-[14px] font-light uppercase leading-[1.3] tracking-[1.53px] text-white transition-colors hover:bg-transparent hover:text-black"
          >
            I want a gift card
          </button>
          {sent && (
            <p role="status" className="mt-[20px] text-[16px] font-light leading-[1.6] text-black max-md:text-[14px]">
              Thank you! Your email app has been opened so you can send your request to {MAIL}.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
