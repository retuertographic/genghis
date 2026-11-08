import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Herr_Von_Muellerhoff,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--nf-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--nf-cinzel",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  variable: "--nf-script",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--nf-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--nf-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Genghis Khan, Innovative Grill",
  description:
    "Premium grill in La Caleta, Costa Adeje (Tenerife). Cook prime meats and seafood at your own tabletop grill.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cinzel.variable} ${herrVonMuellerhoff.variable} ${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
