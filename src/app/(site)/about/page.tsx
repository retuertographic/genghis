import type { Metadata } from "next";
import { AboutPage } from "@/components/sites/genghiskhan/inner-pages";

export const metadata: Metadata = { title: "About – Genghis Khan, Innovative Grill" };

export default function Page() {
  return <AboutPage />;
}
