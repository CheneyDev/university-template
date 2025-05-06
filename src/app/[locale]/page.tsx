import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/types';
import { universityIdentity } from '@/config/university';

// Hard-coded translations for this page
const translations = {
  heroTitle: {
    en: 'Welcome to Global University',
    fr: 'Bienvenue à l\'Université Globale',
  },
  heroSubtitle: {
    en: 'Shaping Tomorrow, Today',
    fr: 'Façonner Demain, Aujourd\'hui',
  },
  heroDescription: {
    en: 'Join a community of thinkers, innovators, and leaders in a world-class learning environment.',
    fr: 'Rejoignez une communauté de penseurs, d\'innovateurs et de leaders dans un environnement d\'apprentissage de classe mondiale.',
  },
  exploreButton: {
    en: 'Explore Programs',
    fr: 'Explorer les Programmes',
  },
  applyButton: {
    en: 'Apply Now',
    fr: 'Postuler',
  },
  newsHeading: {
    en: 'Latest News',
    fr: 'Actualités Récentes',
  },
  eventsHeading: {
    en: 'Upcoming Events',
    fr: 'Événements à Venir',
  },
  viewAll: {
    en: 'View All',
    fr: 'Voir Tout',
  },
  academicExcellence: {
    en: 'Academic Excellence',
    fr: 'Excellence Académique',
  },
  academicDescription: {
    en: 'Our rigorous programs push the boundaries of knowledge and prepare students for leadership in a rapidly changing world.',
    fr: 'Nos programmes rigoureux repoussent les limites de la connaissance et préparent les étudiants au leadership dans un monde en rapide évolution.',
  },
  research: {
    en: 'Innovative Research',
    fr: 'Recherche Innovante',
  },
  researchDescription: {
    en: 'Our faculty and students conduct groundbreaking research that addresses the most pressing challenges of our time.',
    fr: 'Nos professeurs et étudiants mènent des recherches révolutionnaires qui répondent aux défis les plus pressants de notre époque.',
  },
  globalCommunity: {
    en: 'Global Community',
    fr: 'Communauté Mondiale',
  },
  globalDescription: {
    en: 'Join a diverse community of scholars from over 100 countries, fostering a truly global perspective.',
    fr: 'Rejoignez une communauté diversifiée d\'universitaires de plus de 100 pays, favorisant une perspective véritablement mondiale.',
  },
};

// Sample news articles
const news = [
  {
    id: 1,
    title: {
      en: 'Professor Smith Awarded Nobel Prize',
      fr: 'Professeur Smith reçoit le prix Nobel',
    },
    excerpt: {
      en: 'Professor John Smith from our Physics Department has been awarded the Nobel Prize for his groundbreaking work on quantum mechanics.',
      fr: 'Le professeur John Smith de notre département de physique a reçu le prix Nobel pour ses travaux révolutionnaires sur la mécanique quantique.',
    },
    date: '2023-10-15',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: {
      en: 'New Research Center Established',
      fr: 'Nouveau centre de recherche établi',
    },
    excerpt: {
      en: 'Global University announces the establishment of a new $50 million research center focused on sustainable technologies.',
      fr: 'L\'Université Globale annonce la création d\'un nouveau centre de recherche de 50 millions de dollars axé sur les technologies durables.',
    },
    date: '2023-09-28',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: {
      en: 'International Partnership with Tokyo University',
      fr: 'Partenariat international avec l\'Université de Tokyo',
    },
    excerpt: {
      en: 'Global University signs a major partnership agreement with Tokyo University to promote student exchanges and joint research projects.',
      fr: 'L\'Université Globale signe un accord de partenariat majeur avec l\'Université de Tokyo pour promouvoir les échanges d\'étudiants et les projets de recherche conjoints.',
    },
    date: '2023-09-15',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

// Sample upcoming events
const events = [
  {
    id: 1,
    title: {
      en: 'Fall Open House',
      fr: 'Portes ouvertes d\'automne',
    },
    date: '2023-11-15',
    time: '10:00 - 16:00',
    location: 'Main Campus',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: {
      en: 'International Research Symposium',
      fr: 'Symposium international de recherche',
    },
    date: '2023-11-22',
    time: '09:00 - 17:00',
    location: 'Science Building',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: {
      en: 'Alumni Networking Event',
      fr: 'Événement de réseautage des anciens',
    },
    date: '2023-12-05',
    time: '18:00 - 21:00',
    location: 'Downtown Campus',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Campus"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {translations.heroTitle[locale]}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              {translations.heroSubtitle[locale]}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              {translations.heroDescription[locale]}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/academics/programs`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-primary hover:bg-gray-100 md:py-4 md:text-lg"
              >
                {translations.exploreButton[locale]}
              </Link>
              <Link
                href={`/${locale}/admissions/apply`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-secondary text-primary hover:bg-opacity-90 md:py-4 md:text-lg"
              >
                {translations.applyButton[locale]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Excellence */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {translations.academicExcellence[locale]}
              </h3>
              <p className="text-gray-600">
                {translations.academicDescription[locale]}
              </p>
            </div>

            {/* Research */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {translations.research[locale]}
              </h3>
              <p className="text-gray-600">
                {translations.researchDescription[locale]}
              </p>
            </div>

            {/* Global Community */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {translations.globalCommunity[locale]}
              </h3>
              <p className="text-gray-600">
                {translations.globalDescription[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* News */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {translations.newsHeading[locale]}
                </h2>
                <Link
                  href={`/${locale}/news-events/news`}
                  className="text-primary font-medium"
                >
                  {translations.viewAll[locale]} →
                </Link>
              </div>
              <div className="space-y-6">
                {news.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-6">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title[locale]}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-gray-500 mb-1" suppressHydrationWarning>
                        {formatDate(item.date)}
                      </p>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.title[locale]}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {item.excerpt[locale]}
                      </p>
                      <Link
                        href={`/${locale}/news-events/news/${item.id}`}
                        className="text-primary font-medium"
                      >
                        {locale === 'en' ? 'Read more' : 'Lire plus'} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {translations.eventsHeading[locale]}
                </h2>
                <Link
                  href={`/${locale}/news-events/events`}
                  className="text-primary font-medium"
                >
                  {translations.viewAll[locale]} →
                </Link>
              </div>
              <div className="space-y-6">
                {events.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                      <div className="flex flex-col items-center justify-center bg-primary text-white rounded-lg p-4">
                        <span className="text-3xl font-bold">
                          {new Date(item.date).getDate()}
                        </span>
                        <span className="text-sm uppercase" suppressHydrationWarning>
                          {new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
                            month: 'short',
                          }).format(new Date(item.date))}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.title[locale]}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        <span className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.time}
                        </span>
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </span>
                      </p>
                      <Link
                        href={`/${locale}/news-events/events/${item.id}`}
                        className="text-primary font-medium"
                      >
                        {locale === 'en' ? 'Event details' : 'Détails de l\'événement'} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 