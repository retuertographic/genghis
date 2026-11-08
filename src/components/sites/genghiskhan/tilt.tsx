/**
 * Elementor "tilt" shape divider (70px tall, white). The source draws every divider with the
 * edge sloping up to the right: top dividers are thick on the left, bottom ones thick on the right.
 */
export function Tilt({ position, fill = "#fff" }: { position: "top" | "bottom"; fill?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 z-[1] block h-[70px] w-full max-md:h-[35px] ${
        position === "top" ? "top-[-1px]" : "bottom-[-1px]"
      }`}
    >
      <path
        fill={fill}
        d={position === "top" ? "M0 0H1000V6L0 100Z" : "M0 100H1000V0L0 94Z"}
      />
    </svg>
  );
}
