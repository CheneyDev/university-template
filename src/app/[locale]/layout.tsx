import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { locales } from '../../middleware';
import '../../app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale } from '@/types';
import { universityIdentity } from '@/config/university';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
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

export default function RootLayout({
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
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header locale={locale as Locale} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale as Locale} />
        </div>
      </body>
    </html>
  );
} 