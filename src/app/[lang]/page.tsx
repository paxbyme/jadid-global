import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { news, articles, library, media, thinkers } from "@/lib/mock";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <main className="min-h-screen w-full bg-sand-50 bg-playcode text-text">
      {/* HERO */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex rounded-full border border-border bg-sand-100/60 px-3 py-1 text-xs text-muted">
                {t(lang, "Milliy ma’rifat · Multimedia", "Просвещение · Мультимедиа")}
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {t(
                    lang,
                    "Jadid merosini zamonaviy formatda kashf eting",
                    "Откройте наследие джадидов в современном формате"
                  )}
                </span>
              </h1>

              <p className="mt-4 text-muted leading-relaxed">
                {t(
                  lang,
                  "Maqolalar, kutubxona (PDF/EPUB), video/audio arxiv va mutafakkirlar profillari — barchasi bitta platformada.",
                  "Статьи, библиотека (PDF/EPUB), видео/аудио архив и профили мыслителей — всё в одном месте."
                )}
              </p>

              <div className="mt-6 flex gap-3">
                <Button href={`/${lang}/articles`} variant="primary">
                  {t(lang, "Maqolalarni ko‘rish", "Смотреть статьи")}
                </Button>
                <Button href={`/${lang}/library`} variant="outline">
                  {t(lang, "Kutubxona", "Библиотека")}
                </Button>
              </div>
            </div>


            {/* <div className="grid gap-3">
              <Card
                title={t(lang, "Maqolalar", "Статьи")}
                desc={t(lang, "Tahlillar va ma’rifiy materiallar", "Аналитика и просвещение")}
                href={`/${lang}/articles`}
              />
              <Card
                title={t(lang, "Kutubxona (PDF/EPUB)", "Библиотека (PDF/EPUB)")}
                desc={t(lang, "Kitoblar va hujjatlar to‘plami", "Сборник книг и документов")}
                href={`/${lang}/library`}
              />
              <Card
                title={t(lang, "Mediateka", "Медиа")}
                desc={t(lang, "Video/audio va arxiv materiallar", "Видео/аудио и архив")}
                href={`/${lang}/media`}
              />
            </div> */}
          </div>
        </Container>
      </section>

      {/* NEWS */}
      <section className="py-10">
        <Container>
          <SectionHeader title={t(lang, "Yangiliklar", "Новости")} href={`/${lang}/news`} />
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {news.slice(0, 6).map((n) => (
              <Card
                key={n.slug}
                title={t(lang, n.titleUz, n.titleUz)}
                meta={n.dateISO}
                desc={t(lang, n.excerptUz, n.excerptUz)}
                href={`/${lang}/news/${n.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ARTICLES */}
      <section className="py-10">
        <Container>
          <SectionHeader title={t(lang, "Tanlangan maqolalar", "Избранные статьи")} href={`/${lang}/articles`} />
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {articles.slice(0, 6).map((a) => (
              <Card
                key={a.slug}
                title={t(lang, a.titleUz, a.titleUz)}
                meta={`${a.authorUz} · ${a.dateISO}`}
                desc={t(lang, a.excerptUz, a.excerptUz)}
                href={`/${lang}/articles/${a.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* LIBRARY + MEDIA + THINKERS */}
      <section className="py-10">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <SectionHeader title={t(lang, "Kutubxona", "Библиотека")} href={`/${lang}/library`} />
              <div className="mt-4 grid gap-3">
                {library.slice(0, 3).map((b) => (
                  <Card
                    key={b.id}
                    title={t(lang, b.titleUz, b.titleUz)}
                    meta={`${b.type} · ${b.authorUz} · ${b.year}`}
                    href={`/${lang}/library/${b.id}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title={t(lang, "Mediateka", "Медиа")} href={`/${lang}/media`} />
              <div className="mt-4 grid gap-3">
                {media.slice(0, 3).map((m) => (
                  <Card
                    key={m.slug}
                    title={t(lang, m.titleUz, m.titleUz)}
                    meta={`${m.kind.toUpperCase()} · ${m.duration}`}
                    href={`/${lang}/media/${m.slug}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title={t(lang, "Mutafakkirlar", "Мыслители")} href={`/${lang}/thinkers`} />
              <div className="mt-4 grid gap-3">
                {thinkers.slice(0, 3).map((p) => (
                  <Card
                    key={p.slug}
                    title={t(lang, p.nameUz, p.nameUz)}
                    meta={t(lang, p.yearsUz, p.yearsUz)}
                    desc={t(lang, p.bioUz, p.bioUz)}
                    href={`/${lang}/thinkers/${p.slug}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
