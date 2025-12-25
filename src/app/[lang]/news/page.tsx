import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { news } from "@/lib/mock";

export default function NewsPage({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">{t(lang, "Yangiliklar", "Новости")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {news.map((n) => (
            <Card
              key={n.slug}
              title={t(lang, n.titleUz, n.titleUz)}
              meta={n.dateISO}
              desc={t(lang, n.excerptUz, n.excerptUz)}
              href={`/${lang}/news/${n.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
