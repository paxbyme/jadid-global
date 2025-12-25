import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isLang, type Lang } from "@/lib/i18n";
import "@/app/app-globals.css";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = (isLang(raw) ? raw : "uz") as Lang;

  const title = lang === "ru" ? "Jadid Global — портал" : "Jadid Global — portal";
  return { title, description: "Milliy ma’rifat va jadid merosi" };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = (isLang(raw) ? raw : "uz") as Lang;

  return (
    <div className="min-h-dvh">
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
