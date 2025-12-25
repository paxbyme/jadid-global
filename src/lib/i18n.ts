export const LANGS = ["uz", "en", "ru"] as const;
export type Lang = (typeof LANGS)[number];

export function isLang(x: string): x is Lang {
  return (LANGS as readonly string[]).includes(x);
}

export function defaultLang(): Lang {
  return "uz";
}
