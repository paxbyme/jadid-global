export default function SectionHeader({
  title,
  href,
  hrefText = "Barchasi",
}: {
  title: string;
  href?: string;
  hrefText?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-text">{title}</h2>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-primary/60 to-transparent" />
          <div className="h-2 w-2 rotate-45 bg-accent/90 shadow-[0_0_18px_rgba(6,182,212,0.35)]" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-secondary/50" />
        </div>
      </div>

      {href ? (
        <a className="text-sm text-muted hover:text-text transition" href={href}>
          {hrefText} →
        </a>
      ) : null}
    </div>
  );
}
