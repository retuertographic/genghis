"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Lang } from "./config";
import type { CommonDict } from "./dictionaries/en";

type I18n = { lang: Lang; t: CommonDict };

const I18nContext = createContext<I18n | null>(null);

/** Gives interactive (client) components the current language and the shared texts. */
export function I18nProvider({ lang, t, children }: I18n & { children: ReactNode }) {
  return <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n() must be used inside <I18nProvider>");
  return value;
}
