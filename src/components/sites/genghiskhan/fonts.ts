import {
  Cinzel,
  Cormorant_Garamond,
  Herr_Von_Muellerhoff,
  Montserrat,
  Poppins,
} from "next/font/google";

/* Fonts used on every page; extra weights for single pages live in pages/fonts.ts. */
export const poppins = Poppins({
  variable: "--nf-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const cinzel = Cinzel({
  variable: "--nf-cinzel",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  variable: "--nf-script",
  subsets: ["latin"],
  weight: "400",
});

export const cormorant = Cormorant_Garamond({
  variable: "--nf-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const montserrat = Montserrat({
  variable: "--nf-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});


export const fontVariables = [poppins, cinzel, herrVonMuellerhoff, cormorant, montserrat].map((f) => f.variable).join(" ");
