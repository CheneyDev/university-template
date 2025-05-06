'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, defaultLocale } from '../middleware';
import { FC } from 'react';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  // Get the current locale from the pathname
  const currentLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) || defaultLocale;
  
  // Create path for the new locale
  const handleLocaleChange = (newLocale: string) => {
    // If we're already on this locale, do nothing
    if (currentLocale === newLocale) return;
    
    // Replace the locale segment in the pathname
    let newPath = '';
    if (pathname === `/${currentLocale}`) {
      // Home page for current locale
      newPath = `/${newLocale}`;
    } else if (pathname.startsWith(`/${currentLocale}/`)) {
      // Sub page for current locale
      newPath = pathname.replace(`/${currentLocale}/`, `/${newLocale}/`);
    } else {
      // Path doesn't have locale, add it
      newPath = `/${newLocale}${pathname}`;
    }
    
    router.push(newPath);
  };
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`text-sm font-medium px-2 py-1 rounded-md ${
          currentLocale === 'en'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange('fr')}
        className={`text-sm font-medium px-2 py-1 rounded-md ${
          currentLocale === 'fr'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher; 