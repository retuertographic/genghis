import { Cormorant_Garamond, Montserrat, Playfair_Display, Roboto } from "next/font/google";

/** Extra weights/families only these pages use (the root layout loads the common ones). */
export const cormorantFull = Cormorant_Garamond({
  variable: "--gk-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const montserratFull = Montserrat({
  variable: "--gk-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const roboto = Roboto({
  variable: "--gk-roboto",
  subsets: ["latin"],
  weight: ["300"],
});

export const playfair = Playfair_Display({
  variable: "--gk-playfair",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});
