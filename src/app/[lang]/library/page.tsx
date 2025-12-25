import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { library } from "@/lib/mock";

export default function LibraryPage({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">{t(lang, "Kutubxona", "Библиотека")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {library.map((b) => (
            <Card
              key={b.id}
              title={t(lang, b.titleUz, b.titleUz)}
              meta={`${b.type} · ${b.authorUz} · ${b.year}`}
              href={`/${lang}/library/${b.id}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
