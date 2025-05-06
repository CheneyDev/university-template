'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { mainNavItems } from '../config/navigation';
import { universityIdentity } from '../config/university';
import { Locale } from '../types';

interface HeaderProps {
  locale: Locale;
}

const Header = ({ locale }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Helper function to check if a link is active
  const isActive = (href: string) => {
    // Remove the locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
    return pathWithoutLocale === href || pathname === href;
  };
  
  // The current language URL prefix
  const localePrefix = `/${locale}`;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo section */}
          <div className="flex items-center">
            <Link href={localePrefix} className="flex-shrink-0 flex items-center">
              <Image
                src={universityIdentity.logo.main}
                alt={universityIdentity.name[locale]}
                width={200}
                height={60}
                priority
              />
            </Link>
          </div>
          
          {/* Navigation for desktop */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {mainNavItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={`${localePrefix}${item.href}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.title[locale]}
                </Link>
                
                {/* Dropdown for items with children */}
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`${localePrefix}${child.href}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {child.title[locale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language switcher component */}
            <LanguageSwitcher className="ml-4" />
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu open/close icon */}
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={`${localePrefix}${item.href}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-gray-50 text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {item.title[locale]}
                </Link>
                
                {/* Mobile dropdown items */}
                {item.children && item.children.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`${localePrefix}${child.href}`}
                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                          isActive(child.href)
                            ? 'bg-gray-50 text-primary'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        {child.title[locale]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <LanguageSwitcher className="px-3" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 