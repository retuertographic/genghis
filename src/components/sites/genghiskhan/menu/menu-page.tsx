import { ASSETS } from "../data";
import { BookingWidgetSection } from "../page-sections";
import { BgSection } from "../shared";
import { CartaWidget } from "./carta-widget";

/** /menu/: the interactive carta over the restaurant photo, then the dish.co booking widget. */
export function GenghisKhanMenu() {
  return (
    <>
      <BgSection
        image={`${ASSETS}/images/banner-bookings.jpg`}
        overlay="bg-black/45"
        // overflow-clip (not hidden) so the sticky category bar inside still sticks to the viewport.
        className="flex min-h-[40vh] items-center overflow-clip bg-black"
      >
        <div className="relative z-[2] w-full">
          <CartaWidget />
        </div>
        {/* Same tilt as the shared divider, but this section keeps 70px on phones too. */}
        <svg
          aria-hidden
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-[-1px] left-0 z-[1] block h-[70px] w-full"
        >
          <path fill="#9dc9dc" d="M0 100H1000V0L0 94Z" />
        </svg>
      </BgSection>
      <BookingWidgetSection />
    </>
  );
}
