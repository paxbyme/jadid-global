import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANGS, defaultLang } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) return NextResponse.next();

  // root -> /uz
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLang()}`;
    return NextResponse.redirect(url);
  }

  // eski /uzc linklar bo‘lsa /en ga yo‘naltirish (ixtiyoriy)
  if (pathname === "/uzc" || pathname.startsWith("/uzc/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace("/uzc", "/en");
    return NextResponse.redirect(url);
  }

  const seg = pathname.split("/")[1] || "";
  if (!LANGS.includes(seg as any)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLang()}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};
