"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKING_WIDGET_URL } from "./data";

const BookingContext = createContext<() => void>(() => {});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <BookingContext.Provider value={show}>
      {children}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a table"
          className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-[50px] gk-modal-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[600px] bg-black p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-[38px] right-0 text-white/80 transition-colors hover:text-white"
            >
              <X className="size-7" strokeWidth={1.5} />
            </button>
            <iframe
              title="Genghis Khan Grill reservations"
              src={BOOKING_WIDGET_URL}
              className="block h-[700px] w-full border-0 bg-white"
            />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function BookNowButton({ className }: { className?: string }) {
  const open = useContext(BookingContext);
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "inline-block rounded-[10px] border-[3px] border-black bg-black px-10 py-5 font-poppins text-[18px] leading-[18px] text-white transition-colors hover:border-[#cfa670] hover:bg-[#cfa670]",
        className,
      )}
    >
      Book Now
    </button>
  );
}
