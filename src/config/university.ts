// University configuration
// This file contains all configurable details about the university

import { Locale, LocalizedText, Campus } from '../types';

// University Identity
export const universityIdentity = {
  // University name in different languages
  name: {
    en: 'Global University',
    fr: 'Université Globale',
  } as LocalizedText,
  
  // Logo URLs - replace with your own university logo
  logo: {
    // Main logo
    main: '/images/logo.svg',
    // Alternative logo for dark backgrounds
    alt: '/images/logo-alt.svg',
    // Favicon
    favicon: '/favicon.ico',
  },
  
  // University colors
  colors: {
    primary: '#003366', // Deep blue
    secondary: '#FFD700', // Gold
    accent: '#E63946', // Red accent
    light: '#F8F9FA', // Light background
    dark: '#212529', // Dark text
  },
  
  // Contact information
  contact: {
    // Address in different languages
    address: {
      en: '123 University Avenue, Global City, 10001',
      fr: '123 Avenue Universitaire, Ville Globale, 10001',
    } as LocalizedText,
    // Phone numbers
    phone: {
      main: '+1 (555) 123-4567',
      admissions: '+1 (555) 123-4568',
      emergencies: '+1 (555) 123-4569',
    },
    // Email addresses
    email: {
      info: 'info@globaluniversity.edu',
      admissions: 'admissions@globaluniversity.edu',
      support: 'support@globaluniversity.edu',
    },
    // Social media links
    social: {
      facebook: 'https://facebook.com/globaluniversity',
      twitter: 'https://twitter.com/globaluniversity',
      instagram: 'https://instagram.com/globaluniversity',
      linkedin: 'https://linkedin.com/school/globaluniversity',
      youtube: 'https://youtube.com/globaluniversity',
    },
  },
  
  // University founding year
  foundedIn: 1950,
  
  // University tagline/motto in different languages
  tagline: {
    en: 'Shaping Tomorrow, Today',
    fr: 'Façonner Demain, Aujourd\'hui',
  } as LocalizedText,
  
  // Campus locations
  campuses: [
    {
      name: { en: 'Main Campus', fr: 'Campus Principal' } as LocalizedText,
      address: { en: '123 University Avenue, Global City, 10001', fr: '123 Avenue Universitaire, Ville Globale, 10001' } as LocalizedText,
      coordinates: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York)
    },
    {
      name: { en: 'Downtown Campus', fr: 'Campus Centre-Ville' } as LocalizedText,
      address: { en: '456 Knowledge Street, Global City, 10002', fr: '456 Rue de la Connaissance, Ville Globale, 10002' } as LocalizedText,
      coordinates: { lat: 40.7142, lng: -74.0153 }, // Example coordinates
    },
  ] as Campus[],
};

// Get localized university name
export function getUniversityName(locale: Locale): string {
  return universityIdentity.name[locale] || universityIdentity.name.en;
}

// Get localized university tagline
export function getUniversityTagline(locale: Locale): string {
  return universityIdentity.tagline[locale] || universityIdentity.tagline.en;
}

// Get localized address
export function getUniversityAddress(locale: Locale): string {
  return universityIdentity.contact.address[locale] || universityIdentity.contact.address.en;
}

// Export default for convenience
export default universityIdentity; 