import Link from "next/link";
import Container from "@/components/ui/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/text";

const nav = (lang: Lang) => [
  { href: `/${lang}/news`, label: t(lang, "Yangiliklar", "Новости", "News") },
  { href: `/${lang}/articles`, label: t(lang, "Maqolalar", "Статьи", "Articles") },
  { href: `/${lang}/library`, label: t(lang, "Kutubxona", "Библиотека", "Library") },
  { href: `/${lang}/media`, label: t(lang, "Mediateka", "Медиа", "Media") },
  { href: `/${lang}/thinkers`, label: t(lang, "Mutafakkirlar", "Мыслители", "Thinkers") },
];

export default function Header({ lang }: { lang: Lang }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/20 ring-1 ring-primary/30 shadow-glow" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-text">Jadid Global</div>
              <div className="text-xs text-muted">
                {t(lang, "Multimedia portal", "Мультимедиа портал", "Multimedia portal")}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav(lang).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-muted hover:text-text hover:bg-surface/60 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/${lang}/articles`}
              className="hidden sm:inline-flex rounded-xl border border-border bg-surface/60 px-3 py-2 text-sm text-muted hover:text-text hover:bg-surface transition"
            >
              {t(lang, "Qidiruv", "Поиск", "Search")}
            </Link>
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </Container>
    </header>
  );
}
