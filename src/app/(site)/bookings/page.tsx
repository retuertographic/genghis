import type { Metadata } from "next";
import { BookingsPage } from "@/components/sites/genghiskhan/inner-pages";

export const metadata: Metadata = { title: "Bookings – Genghis Khan, Innovative Grill" };

export default function Page() {
  return <BookingsPage />;
}
