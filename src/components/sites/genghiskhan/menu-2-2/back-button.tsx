"use client";

/** The source's `<input type="button" value="<<<<<<" onclick="history.back()">`. */
export function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="h-8 rounded-[3px] border border-[#767676] bg-[#efefef] px-[6px] text-[14px] leading-[26px] text-black hover:bg-[#e5e5e5] active:bg-[#f5f5f5] max-md:h-[26px] max-md:text-[13px] max-md:leading-5"
    >
      {"<<<<<<"}
    </button>
  );
}
