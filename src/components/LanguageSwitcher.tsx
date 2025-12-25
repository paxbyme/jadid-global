import Link from "next/link";
import type { Lang } from "@/lib/i18n";

const items: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center gap-1 rounded-xl border border-border bg-surface/40 p-1 backdrop-blur">
      {items.map((it) => {
        const active = it.code === lang;
        return (
          <Link
            key={it.code}
            href={`/${it.code}`}
            className={[
              "rounded-lg px-2.5 py-1 text-xs font-medium transition",
              active
                ? "bg-primary text-white shadow-[0_0_0_1px_rgba(168,85,247,0.25)]"
                : "text-muted hover:bg-surface/70 hover:text-text",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
