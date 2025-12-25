import Container from "@/components/ui/Container";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { news } from "@/lib/mock";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default function NewsDetail({ params }: { params: { lang: string; slug: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;
  const item = news.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <Container>
      <article className="py-10 max-w-3xl">
        <div className="text-sm text-zinc-500">{item.dateISO}</div>
        <h1 className="mt-2 text-3xl font-bold">{t(lang, item.titleUz, item.titleUz)}</h1>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          {t(lang, item.excerptUz, item.excerptUz)}
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-5 text-sm text-muted">
          MVP: bu yerga keyin real kontent (HTML/MDX) yoki editor’dan keladigan body qo‘shamiz.
        </div>
      </article>
    </Container>
  );
}
