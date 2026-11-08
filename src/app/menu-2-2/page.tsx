import type { Metadata } from "next";
import { MenuPage } from "@/components/sites/genghiskhan/menu-2-2/menu-page";

export const metadata: Metadata = {
  title: "Menu – Genghis Khan, Innovative Grill",
};

export default function Page() {
  return <MenuPage />;
}
