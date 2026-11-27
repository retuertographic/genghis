/** Languages of the site. English lives at the root; the others under /<lang>/. */
export const LANGS = ["en", "es", "de", "fr", "it", "nl"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

/** Native names for the language switcher. */
export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  nl: "Nederlands",
};

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/** "/menu/" → "/menu/" in English, "/es/menu/" in Spanish. Hash and query are kept. */
export function localizedPath(lang: Lang, path: string): string {
  if (!path.startsWith("/")) return path;
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Splits a pathname (without base path) into its language and the language-neutral path. */
export function splitLangPath(pathname: string): { lang: Lang; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (isLang(first) && first !== DEFAULT_LANG) return { lang: first, path: `/${rest.join("/")}` };
  return { lang: DEFAULT_LANG, path: pathname || "/" };
}
