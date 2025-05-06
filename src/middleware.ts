import { NextRequest, NextResponse } from 'next/server';

// Supported languages
export const locales = ['en', 'fr'];

// Default language
export const defaultLocale = 'en';

// Get the preferred locale from headers, cookies, or other sources
function getLocale(request: NextRequest) {
  // Check for locale in cookie
  const acceptLanguage = request.headers.get('accept-language');
  
  // Check if accept-language includes French
  if (acceptLanguage && acceptLanguage.includes('fr')) {
    return 'fr';
  }
  
  // Default to English
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  // Get pathname
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // If no locale in pathname, redirect to locale path
  const locale = getLocale(request);
  
  // Create a new URL with the locale prefix
  const newUrl = new URL(
    `/${locale}${pathname === '/' ? '' : pathname}`,
    request.url
  );
  
  // Preserve the query parameters
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

// Match all routes except for API routes, static files, etc.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.).*)',
  ],
};