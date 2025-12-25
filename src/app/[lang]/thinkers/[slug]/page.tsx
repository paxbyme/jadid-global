import Container from "@/components/ui/Container";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { thinkers } from "@/lib/mock";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return thinkers.map((p) => ({ slug: p.slug }));
}

export default function ThinkerDetail({ params }: { params: { lang: string; slug: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;
  const item = thinkers.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <div className="text-sm text-zinc-500">{t(lang, item.yearsUz, item.yearsUz)}</div>
        <h1 className="mt-2 text-3xl font-bold">{t(lang, item.nameUz, item.nameUz)}</h1>
        <p className="mt-4 text-zinc-700 leading-relaxed">{t(lang, item.bioUz, item.bioUz)}</p>
        <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-5 text-sm text-muted">
          Keyin: asarlar ro‘yxati, maqolalari, media chiqishlari, timeline.
        </div>
      </div>
    </Container>
  );
}
