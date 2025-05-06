// Navigation configuration file
// Contains all menu items and their translations

import { NavItem, LocalizedText } from '../types';

// Main navigation items
export const mainNavItems: NavItem[] = [
  {
    title: { en: 'Home', fr: 'Accueil' } as LocalizedText,
    href: '/',
  },
  {
    title: { en: 'About', fr: 'À propos' } as LocalizedText,
    href: '/about',
    children: [
      {
        title: { en: 'Our History', fr: 'Notre Histoire' } as LocalizedText,
        href: '/about/history',
      },
      {
        title: { en: 'Mission & Vision', fr: 'Mission & Vision' } as LocalizedText,
        href: '/about/mission-vision',
      },
      {
        title: { en: 'Leadership', fr: 'Direction' } as LocalizedText,
        href: '/about/leadership',
      },
      {
        title: { en: 'Campus Map', fr: 'Plan du Campus' } as LocalizedText,
        href: '/about/campus-map',
      },
    ],
  },
  {
    title: { en: 'Academics', fr: 'Académique' } as LocalizedText,
    href: '/academics',
    children: [
      {
        title: { en: 'Undergraduate Programs', fr: 'Programmes de Premier Cycle' } as LocalizedText,
        href: '/academics/undergraduate',
      },
      {
        title: { en: 'Graduate Programs', fr: 'Programmes de Deuxième Cycle' } as LocalizedText,
        href: '/academics/graduate',
      },
      {
        title: { en: 'Faculties & Departments', fr: 'Facultés & Départements' } as LocalizedText,
        href: '/academics/faculties-departments',
      },
      {
        title: { en: 'Academic Calendar', fr: 'Calendrier Académique' } as LocalizedText,
        href: '/academics/calendar',
      },
    ],
  },
  {
    title: { en: 'Admissions', fr: 'Admissions' } as LocalizedText,
    href: '/admissions',
    children: [
      {
        title: { en: 'Apply Now', fr: 'Postuler Maintenant' } as LocalizedText,
        href: '/admissions/apply',
      },
      {
        title: { en: 'Tuition & Fees', fr: 'Frais de Scolarité' } as LocalizedText,
        href: '/admissions/tuition-fees',
      },
      {
        title: { en: 'Financial Aid', fr: 'Aide Financière' } as LocalizedText,
        href: '/admissions/financial-aid',
      },
      {
        title: { en: 'International Students', fr: 'Étudiants Internationaux' } as LocalizedText,
        href: '/admissions/international',
      },
    ],
  },
  {
    title: { en: 'Research', fr: 'Recherche' } as LocalizedText,
    href: '/research',
    children: [
      {
        title: { en: 'Research Centers', fr: 'Centres de Recherche' } as LocalizedText,
        href: '/research/centers',
      },
      {
        title: { en: 'Publications', fr: 'Publications' } as LocalizedText,
        href: '/research/publications',
      },
      {
        title: { en: 'Partnerships', fr: 'Partenariats' } as LocalizedText,
        href: '/research/partnerships',
      },
    ],
  },
  {
    title: { en: 'Student Life', fr: 'Vie Étudiante' } as LocalizedText,
    href: '/student-life',
    children: [
      {
        title: { en: 'Housing', fr: 'Logement' } as LocalizedText,
        href: '/student-life/housing',
      },
      {
        title: { en: 'Clubs & Organizations', fr: 'Clubs & Organisations' } as LocalizedText,
        href: '/student-life/clubs-organizations',
      },
      {
        title: { en: 'Athletics', fr: 'Sports' } as LocalizedText,
        href: '/student-life/athletics',
      },
      {
        title: { en: 'Health & Wellness', fr: 'Santé & Bien-être' } as LocalizedText,
        href: '/student-life/health-wellness',
      },
    ],
  },
  {
    title: { en: 'News & Events', fr: 'Actualités & Événements' } as LocalizedText,
    href: '/news-events',
    children: [
      {
        title: { en: 'News', fr: 'Actualités' } as LocalizedText,
        href: '/news-events/news',
      },
      {
        title: { en: 'Events Calendar', fr: 'Calendrier des Événements' } as LocalizedText,
        href: '/news-events/events',
      },
    ],
  },
  {
    title: { en: 'Contact', fr: 'Contact' } as LocalizedText,
    href: '/contact',
  },
];

// Footer navigation items
export const footerNavItems = {
  // About section
  about: [
    {
      title: { en: 'Our History', fr: 'Notre Histoire' } as LocalizedText,
      href: '/about/history',
    },
    {
      title: { en: 'Leadership', fr: 'Direction' } as LocalizedText,
      href: '/about/leadership',
    },
    {
      title: { en: 'Campus Map', fr: 'Plan du Campus' } as LocalizedText,
      href: '/about/campus-map',
    },
    {
      title: { en: 'Employment', fr: 'Emploi' } as LocalizedText,
      href: '/about/employment',
    },
  ],
  // Academics section
  academics: [
    {
      title: { en: 'Programs', fr: 'Programmes' } as LocalizedText,
      href: '/academics/programs',
    },
    {
      title: { en: 'Departments', fr: 'Départements' } as LocalizedText,
      href: '/academics/departments',
    },
    {
      title: { en: 'Library', fr: 'Bibliothèque' } as LocalizedText,
      href: '/academics/library',
    },
    {
      title: { en: 'Calendar', fr: 'Calendrier' } as LocalizedText,
      href: '/academics/calendar',
    },
  ],
  // Quick links
  quickLinks: [
    {
      title: { en: 'Apply Now', fr: 'Postuler' } as LocalizedText,
      href: '/admissions/apply',
    },
    {
      title: { en: 'Visit Campus', fr: 'Visiter le Campus' } as LocalizedText,
      href: '/visit',
    },
    {
      title: { en: 'Support Us', fr: 'Nous Soutenir' } as LocalizedText,
      href: '/support',
    },
    {
      title: { en: 'Careers', fr: 'Carrières' } as LocalizedText,
      href: '/careers',
    },
  ],
  // Legal links
  legal: [
    {
      title: { en: 'Privacy Policy', fr: 'Politique de Confidentialité' } as LocalizedText,
      href: '/privacy',
    },
    {
      title: { en: 'Terms of Use', fr: 'Conditions d\'Utilisation' } as LocalizedText,
      href: '/terms',
    },
    {
      title: { en: 'Accessibility', fr: 'Accessibilité' } as LocalizedText,
      href: '/accessibility',
    },
  ],
}; 