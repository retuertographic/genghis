import type { Metadata } from "next";
import type { ComponentType } from "react";
import { BASE_PATH, SITE_URL } from "./data";
import { GenghisKhanHome } from "./home-page";
import { getDictionary, LANGS, localizedPath, DEFAULT_LANG, type Dictionary, type Lang } from "./i18n";
import { AboutPage, BookingsPage, LambShoulderPage } from "./inner-pages";
import { GenghisKhanMenu } from "./menu/menu-page";
import { AwardsPage } from "./pages/awards";
import { ContactPage } from "./pages/contact";
import { TermsPage } from "./pages/tc";

type PageKey = keyof Dictionary["meta"]["pages"];

/** Every page of the site: its language-neutral path and component. Route files under src/app only point here. */
export const PAGES = {
  home: { path: "/", Component: GenghisKhanHome },
  menu: { path: "/menu/", Component: GenghisKhanMenu },
  bookings: { path: "/bookings/", Component: BookingsPage },
  lambShoulder: { path: "/lamb-shoulder/", Component: LambShoulderPage },
  about: { path: "/about/", Component: AboutPage },
  awards: { path: "/awards/", Component: AwardsPage },
  contact: { path: "/contact/", Component: ContactPage },
  tc: { path: "/tc/", Component: TermsPage },
} satisfies Partial<Record<PageKey, { path: string; Component: ComponentType<{ lang: Lang }> }>>;

export type RouteKey = keyof typeof PAGES;

/** <title>, description, canonical and hreflang links of a page in one language. */
export function pageMetadata(key: PageKey, lang: Lang, path?: string): Metadata {
  const t = getDictionary(lang).meta;
  const page = t.pages[key];
  const title = key === "home" ? t.siteName : `${page.title} – ${t.siteName}`;
  const languages: Record<string, string> = {};
  if (path) {
    for (const l of LANGS) languages[l] = SITE_URL + localizedPath(l, path);
    languages["x-default"] = SITE_URL + localizedPath(DEFAULT_LANG, path);
  }
  return {
    title,
    description: page.description,
    icons: { icon: `${BASE_PATH}/favicon.png` },
    ...(path && { alternates: { canonical: languages[lang], languages } }),
    openGraph: { title, description: page.description, siteName: t.siteName, locale: lang, type: "website" },
  };
}

/** Route module for the default (English, unprefixed) language. */
export function defaultRoute(key: RouteKey) {
  const { path, Component } = PAGES[key];
  return {
    metadata: pageMetadata(key, DEFAULT_LANG, path),
    Page: function Page() {
      return <Component lang={DEFAULT_LANG} />;
    },
  };
}

type LangParams = { params: Promise<{ lang: Lang }> };

/** Route module for the /<lang>/… copies. */
export function langRoute(key: RouteKey) {
  const { path, Component } = PAGES[key];
  return {
    generateMetadata: async ({ params }: LangParams) => pageMetadata(key, (await params).lang, path),
    Page: async function Page({ params }: LangParams) {
      return <Component lang={(await params).lang} />;
    },
  };
}
