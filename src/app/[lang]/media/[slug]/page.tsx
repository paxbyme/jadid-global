import Container from "@/components/ui/Container";
import { isLang, type Lang } from "@/lib/i18n";
import { t } from "@/lib/text";
import { media } from "@/lib/mock";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return media.map((m) => ({ slug: m.slug }));
}

export default function MediaDetail({ params }: { params: { lang: string; slug: string } }) {
  const lang = (isLang(params.lang) ? params.lang : "uz") as Lang;
  const item = media.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <Container>
      <div className="py-10 max-w-3xl">
        <div className="text-sm text-zinc-500">{item.kind.toUpperCase()} · {item.duration}</div>
        <h1 className="mt-2 text-3xl font-bold">{t(lang, item.titleUz, item.titleUz)}</h1>

        <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-6">
          <div className="text-sm text-muted">
            MVP: bu yerda keyin video/audio player bo‘ladi (dynamic import).
          </div>
        </div>
      </div>
    </Container>
  );
}
