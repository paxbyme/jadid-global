import type { Lang } from "@/lib/i18n";

export function t(lang: Lang, uz: string, ru?: string, en?: string) {
  if (lang === "ru") return ru ?? uz;
  if (lang === "en") return en ?? uz;
  return uz;
}
