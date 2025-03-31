// src/lib/metadata.ts

interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
}

interface PageMetadata {
  home: MetadataConfig;
  biography: MetadataConfig;
  filmography: MetadataConfig;
  gallery: MetadataConfig;
  press: MetadataConfig;
  contact: MetadataConfig;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://neginpoure.com';

export const metadata: PageMetadata = {
  home: {
    title: 'Negin Poure | Actor & Artist',
    description: 'Official website of Negin Poure, a talented actor and artist based in New York and Tehran.',
    keywords: ['Negin Poure', 'actor', 'artist', 'New York', 'Tehran', 'film', 'theater', 'performance'],
    ogImage: `${baseUrl}/images/new_c3.jpg`,
    ogType: 'website',
  },
  biography: {
    title: 'Biography | Negin Poure',
    description: 'Learn about Negin Poure\'s journey as an actor and artist, her background, training, and artistic vision.',
    keywords: ['Negin Poure biography', 'actor background', 'artist journey', 'film career', 'artistic vision'],
    ogImage: `${baseUrl}/images/new_c3.jpg`,
    ogType: 'profile',
  },
  filmography: {
    title: 'Filmography | Negin Poure',
    description: 'Explore Negin Poure\'s filmography, featuring her work in film, television, and theater productions.',
    keywords: ['Negin Poure filmography', 'film projects', 'acting roles', 'movie appearances', 'theater productions'],
    ogImage: `${baseUrl}/images/new_c3.jpg`,
    ogType: 'website',
  },
  gallery: {
    title: 'Gallery | Negin Poure',
    description: 'View a collection of professional photographs and behind-the-scenes images of actor and artist Negin Poure.',
    keywords: ['Negin Poure gallery', 'actor photos', 'professional photographs', 'portfolio', 'headshots'],
    ogImage: `${baseUrl}/images/new_b1.jpg`,
    ogType: 'website',
  },
  press: {
    title: 'Press | Negin Poure',
    description: 'Read interviews, articles, and press coverage featuring actor and artist Negin Poure.',
    keywords: ['Negin Poure press', 'interviews', 'media coverage', 'articles', 'Canvas Rebel'],
    ogImage: `${baseUrl}/images/new_c3.jpg`,
    ogType: 'article',
  },
  contact: {
    title: 'Contact | Negin Poure',
    description: 'Get in touch with Negin Poure for collaborations, bookings, or inquiries.',
    keywords: ['contact Negin Poure', 'booking', 'collaboration', 'inquiry', 'representation'],
    ogImage: `${baseUrl}/images/new_c3.jpg`,
    ogType: 'website',
  },
};

export default metadata;
