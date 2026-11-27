"use client";

import { useState, type ReactNode } from "react";
import { CircleArrowRight, Minus } from "lucide-react";

/** "Read More" / "Collapse" show-hide toggle (Element Pack toggle widget). */
export function ReadMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="mx-auto mt-[30px] flex items-center gap-[15px] font-cinzel text-[16px] font-semibold leading-[26px] text-[#cfa670] transition-colors hover:text-black"
      >
        {open ? "Collapse" : "Read More"}
        {open ? <Minus className="size-4" strokeWidth={3} /> : <CircleArrowRight className="size-[17px] fill-current text-[#cfa670] [&>path]:stroke-white" />}
      </button>
    </div>
  );
}
