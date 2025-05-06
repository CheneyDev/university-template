'use client';

import { useEffect, useState } from 'react';
import { Locale } from '@/types';

interface SkipToContentProps {
  locale: Locale;
}

const translations = {
  skipToContent: {
    en: 'Skip to main content',
    fr: 'Passer au contenu principal',
  }
};

/**
 * SkipToContent - A component that allows keyboard users to skip
 * to the main content of the page, bypassing the navigation
 */
const SkipToContent = ({ locale }: SkipToContentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show the skip link when user presses Tab key
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    // Hide the skip link when user clicks elsewhere
    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSkipClick = () => {
    // Find the main content element and focus it
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      // Remove tabindex when blur to avoid affecting normal focus behavior
      mainContent.addEventListener('blur', () => {
        mainContent.removeAttribute('tabindex');
      }, { once: true });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkipClick}
      className={`
        fixed top-0 left-0 z-50 p-3 m-3 bg-primary text-white 
        transition-transform rounded-md focus:outline-none
        ${isVisible ? 'transform-none' : '-translate-y-full'}
        focus:transform-none
      `}
      aria-label={translations.skipToContent[locale]}
    >
      {translations.skipToContent[locale]}
    </a>
  );
};

export default SkipToContent; 