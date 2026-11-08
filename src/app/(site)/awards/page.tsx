import type { Metadata } from "next";
import { AwardsPage } from "@/components/sites/genghiskhan/pages/awards";

export const metadata: Metadata = { title: "Awards – Genghis Khan, Innovative Grill" };

export default function Page() {
  return <AwardsPage />;
}
