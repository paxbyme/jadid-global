import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { articles } from "@/lib/mock";

export default function ArticlesPage({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">{t(lang, "Maqolalar", "Статьи")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((a) => (
            <Card
              key={a.slug}
              title={t(lang, a.titleUz, a.titleUz)}
              meta={`${a.authorUz} · ${a.dateISO}`}
              desc={t(lang, a.excerptUz, a.excerptUz)}
              href={`/${lang}/articles/${a.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
