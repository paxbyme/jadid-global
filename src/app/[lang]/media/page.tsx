import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { media } from "@/lib/mock";

export default function MediaPage({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">{t(lang, "Mediateka", "Медиа")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {media.map((m) => (
            <Card
              key={m.slug}
              title={t(lang, m.titleUz, m.titleUz)}
              meta={`${m.kind.toUpperCase()} · ${m.duration}`}
              href={`/${lang}/media/${m.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
