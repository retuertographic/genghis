import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/sites/genghiskhan/data";
import { LANGS, localizedPath } from "@/components/sites/genghiskhan/i18n";
import { PAGES } from "@/components/sites/genghiskhan/routes";

export const dynamic = "force-static";

/** Every page in every language, each listing its translations (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return Object.values(PAGES).flatMap(({ path }) => {
    const languages = Object.fromEntries(LANGS.map((l) => [l, SITE_URL + localizedPath(l, path)]));
    return LANGS.map((lang) => ({
      url: SITE_URL + localizedPath(lang, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/menu/" || path === "/bookings/" ? 0.9 : 0.7,
      alternates: { languages },
    }));
  });
}
