import { NextRequest, NextResponse } from "next/server";

const locales = ["id", "en"];
const defaultLocale = "id";

// Proxy function untuk Next.js 16 - lightweight Edge routing layer
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bypass untuk file statis dan API
  const isStaticOrApi =
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    /\.(.*)$/.test(pathname);

  if (isStaticOrApi) {
    return NextResponse.next();
  }

  // 2. Cek apakah sudah ada valid locale di path
  const pathnameHasValidLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasValidLocale) {
    return NextResponse.next();
  }

  // 3. Jika tidak ada valid locale, redirect ke locale default
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip semua path internal dan file statis
    "/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|site.webmanifest).*)",
  ],
};
