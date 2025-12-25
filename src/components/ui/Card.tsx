import Link from "next/link";

type Props = {
  title: string;
  meta?: string;
  desc?: string;
  href?: string;
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-5
                 shadow-[0_12px_36px_rgba(0,0,0,0.38)] transition
                 hover:border-primary/35 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.14),0_18px_50px_rgba(168,85,247,0.12)]"
    >
      <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-accent/12 blur-2xl" />
      <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/5" />
      {children}
    </div>
  );
}

export default function Card({ title, meta, desc, href }: Props) {
  const content = (
    <Shell>
      {meta ? <div className="text-xs text-muted">{meta}</div> : null}
      <div className="mt-2 text-base font-semibold leading-snug text-text">{title}</div>
      {desc ? <div className="mt-2 text-sm text-muted leading-relaxed">{desc}</div> : null}
    </Shell>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
