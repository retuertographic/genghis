import type { ReactNode } from "react";
import "@/app/globals.css";
import { fontVariables } from "./fonts";
import type { Lang } from "./i18n";

/** <html> + <body> shared by every root layout (one per language) and the 404 page. */
export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
