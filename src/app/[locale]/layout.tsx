import { Metadata } from 'next';
import { Locale, locales } from '@/types';
import { universityIdentity } from '@/config/university';
import SkipToContent from '@/components/SkipToContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { geistSans, geistMono } from '../layout';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale: Locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  // Get the university name in the current locale
  const universityName = universityIdentity.name[locale];
  const universityTagline = universityIdentity.tagline[locale];

  return {
    title: {
      template: `%s | ${universityName}`,
      default: universityName,
    },
    description: universityTagline,
    icons: {
      icon: universityIdentity.logo.favicon,
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Verify if the locale is supported
  if (!locales.includes(locale as Locale)) {
    locale = 'en' as Locale;
  }

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className={geistSans.className} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header locale={locale as Locale} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale as Locale} />
        </div>
      </body>
    </html>
  );
} 