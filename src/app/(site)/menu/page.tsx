import type { Metadata } from "next";
import { GenghisKhanMenu } from "@/components/sites/genghiskhan/menu/menu-page";

export const metadata: Metadata = { title: "Menu – Genghis Khan, Innovative Grill" };

export default function MenuPage() {
  return <GenghisKhanMenu />;
}
