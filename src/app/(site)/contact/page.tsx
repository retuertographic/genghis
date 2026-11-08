import type { Metadata } from "next";
import { ContactPage } from "@/components/sites/genghiskhan/pages/contact";

export const metadata: Metadata = { title: "Contact – Genghis Khan, Innovative Grill" };

export default function Page() {
  return <ContactPage />;
}
