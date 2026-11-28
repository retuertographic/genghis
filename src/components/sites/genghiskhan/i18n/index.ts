import type { Lang } from "./config";
import { de } from "./dictionaries/de";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { nl } from "./dictionaries/nl";

export * from "./config";
export type { CommonDict, Dictionary } from "./dictionaries/en";

const DICTIONARIES: Record<Lang, Dictionary> = { en, es, de, fr, it, nl };

/** All texts of one language. Server components call this; client components use `useI18n()`. */
export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang];
}
