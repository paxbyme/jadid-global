import Container from "@/components/ui/Container";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { articles } from "@/lib/mock";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticleDetail({ params }: { params: { lang: string; slug: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;
  const item = articles.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <Container>
      <article className="py-10 max-w-3xl">
        <div className="text-sm text-zinc-500">{item.authorUz} · {item.dateISO}</div>
        <h1 className="mt-2 text-3xl font-bold">{t(lang, item.titleUz, item.titleUz)}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="prose prose-zinc mt-6 max-w-none">
          <p className="text-zinc-700 leading-relaxed">{t(lang, item.bodyUz, item.bodyUz)}</p>
        </div>
      </article>
    </Container>
  );
}
