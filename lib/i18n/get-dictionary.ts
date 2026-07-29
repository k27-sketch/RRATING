import type { Locale } from "./config";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";

const dictionaries = { en, ar };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
