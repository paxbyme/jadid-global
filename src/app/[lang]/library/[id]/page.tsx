import Container from "@/components/ui/Container";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { library } from "@/lib/mock";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return library.map((b) => ({ id: b.id }));
}

export default function LibraryDetail({ params }: { params: { lang: string; id: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;
  const item = library.find((x) => x.id === params.id);
  if (!item) return notFound();

  return (
    <Container>
      <div className="py-10">
        <div className="text-sm text-zinc-500">{item.type} · {item.authorUz} · {item.year}</div>
        <h1 className="mt-2 text-3xl font-bold">{t(lang, item.titleUz, item.titleUz)}</h1>

        <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-6">
          <div className="text-sm text-muted">
            MVP: bu yerda keyin PDF/EPUB reader bo‘ladi (dynamic import).
          </div>
        </div>
      </div>
    </Container>
  );
}
