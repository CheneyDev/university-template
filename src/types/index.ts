// Type definitions for the project

// Supported locales
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

// University identity types
export interface LocalizedText {
  [key: string]: string;
  en: string;
  fr: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Campus {
  name: LocalizedText;
  address: LocalizedText;
  coordinates: Coordinates;
}

// Navigation types
export interface NavItem {
  title: LocalizedText;
  href: string;
  children?: NavItem[];
}

// Academic programs types
export interface Program {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  level: 'undergraduate' | 'graduate' | 'phd' | 'certificate';
  duration: string;
  department: string;
}

// News and events types
export interface NewsArticle {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  image: string;
  category: string;
  author: string;
}

export interface Event {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
  time: string;
  location: string;
  image?: string;
}

// Faculty and staff types
export interface FacultyMember {
  id: string;
  name: string;
  title: LocalizedText;
  department: string;
  image: string;
  bio: LocalizedText;
  email: string;
  phone?: string;
  office?: string;
  research?: string[];
  publications?: string[];
} 