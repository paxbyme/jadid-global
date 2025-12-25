import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { thinkers } from "@/lib/mock";

export default function ThinkersPage({ params }: { params: { lang: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">{t(lang, "Mutafakkirlar", "Мыслители")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {thinkers.map((p) => (
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
    </Container>
  );
}
