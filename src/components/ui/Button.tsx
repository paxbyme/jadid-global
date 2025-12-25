import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
  "focus:outline-none focus:ring-2 focus:ring-primary/40";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-border bg-surface/50 text-text hover:border-primary/50 hover:bg-surface",
  ghost: "text-text/90 hover:bg-surface/60",
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const cls = `${base} ${variants[variant]}`;
  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return <button className={cls} type="button">{children}</button>;
}
