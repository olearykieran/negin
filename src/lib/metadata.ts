// src/lib/metadata.ts
import type { Metadata } from "next";

type OpenGraphKind = "website" | "article" | "profile";

interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: OpenGraphKind;
}

interface PageMetadata {
  home: MetadataConfig;
  biography: MetadataConfig;
  forCasting: MetadataConfig;
  work: MetadataConfig;
  film: MetadataConfig;
  theatre: MetadataConfig;
  filmography: MetadataConfig;
  gallery: MetadataConfig;
  press: MetadataConfig;
  writing: MetadataConfig;
  contact: MetadataConfig;
}

export const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://neginpoure.com";

export const externalProfiles = {
  imdb: "https://www.imdb.com/name/nm15311801/",
  mmg: "https://www.nymmg.com/portfolios/negin-poure",
  instagram: "https://instagram.com/neginpoure",
};

export const metadata: PageMetadata = {
  home: {
    title: "Negin Poure | Lead Actor for Film & Theatre",
    description:
      "Official website of Negin Poure, New York and Brooklyn based lead actor and model. Explore film and theatre work, press materials, and direct casting-ready links to IMDb, MMG portfolio, and resume.",
    keywords: [
      "Negin Poure",
      "Negin Poure lead actor",
      "Negin Poure model",
      "upcoming lead actress NYC",
      "upcoming lead actress Brooklyn",
      "Iranian actress New York",
      "Brooklyn actress",
      "talent agency",
      "casting director",
      "theatre actor",
      "film actor",
      "lead actress",
      "lead role actor",
      "IMDb",
      "MMG Models",
      "performance artist",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "website",
  },
  biography: {
    title: "Biography | Negin Poure",
    description:
      "Learn about Negin Poure's background, training, and acting journey as a New York-based performer working across film and theatre.",
    keywords: [
      "Negin Poure biography",
      "lead actress biography",
      "actor background",
      "AADA actor",
      "film and theatre actor NYC",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "profile",
  },
  forCasting: {
    title: "For Casting | Negin Poure",
    description:
      "Casting-ready profile for Negin Poure, a New York and Brooklyn-based lead actor. Find IMDb, MMG portfolio, resume, and contact details for representation and casting inquiries.",
    keywords: [
      "for casting actress NYC",
      "Brooklyn lead actress",
      "upcoming lead actress New York",
      "casting-ready actor profile",
      "Negin Poure casting",
      "Negin Poure IMDb",
      "Negin Poure MMG",
      "representation inquiries",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "website",
  },
  work: {
    title: "Work | Negin Poure",
    description:
      "Selected film, theatre, and still imagery from Negin Poure. A curated portfolio for casting and representation.",
    keywords: [
      "Negin Poure work",
      "lead actress portfolio",
      "film stills",
      "theatre performances",
      "casting portfolio",
      "NYC actress",
      "Brooklyn actress",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "website",
  },
  film: {
    title: "Film | Negin Poure",
    description:
      "Explore Negin Poure's film work, including upcoming lead roles, short films, and screen projects.",
    keywords: [
      "Negin Poure film",
      "upcoming lead actress film",
      "short film actor NYC",
      "Flighty",
      "film projects",
    ],
    ogImage: `${siteUrl}/images/flighty.jpeg`,
    ogType: "website",
  },
  theatre: {
    title: "Theatre | Negin Poure",
    description:
      "Explore Negin Poure's theatre work, including stage productions, lead performances, and performance photography.",
    keywords: [
      "Negin Poure theatre",
      "lead theatre actress NYC",
      "stage acting Brooklyn",
      "Stain",
      "theatre productions",
    ],
    ogImage: `${siteUrl}/images/stain.JPG`,
    ogType: "website",
  },
  filmography: {
    title: "Filmography | Negin Poure",
    description:
      "Explore Negin Poure's filmography featuring film, television, and theatre projects.",
    keywords: [
      "Negin Poure filmography",
      "acting roles",
      "movie appearances",
      "theater productions",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "website",
  },
  gallery: {
    title: "Gallery | Negin Poure",
    description:
      "View curated stills, portrait photography, and performance imagery of actor and model Negin Poure.",
    keywords: [
      "Negin Poure gallery",
      "actor headshots NYC",
      "model portfolio Brooklyn",
      "professional photographs",
    ],
    ogImage: `${siteUrl}/images/new_b1.jpg`,
    ogType: "website",
  },
  press: {
    title: "Press | Negin Poure",
    description:
      "Read interviews and media coverage featuring Negin Poure's acting work and creative direction.",
    keywords: [
      "Negin Poure press",
      "actor interviews",
      "media coverage",
      "Canvas Rebel",
      "Bold Journey",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "article",
  },
  writing: {
    title: "Writing | Negin Poure",
    description:
      "Explore Negin Poure's creative writing, including theatre work, playwriting, and poetry.",
    keywords: [
      "Negin Poure writing",
      "playwright NYC",
      "poetry",
      "theatre writing",
      "Stain play",
    ],
    ogImage: `${siteUrl}/images/new_c1.jpg`,
    ogType: "website",
  },
  contact: {
    title: "Contact | Negin Poure",
    description:
      "Contact Negin Poure for casting, lead role inquiries, bookings, representation, and creative collaborations.",
    keywords: [
      "contact Negin Poure",
      "lead role inquiries",
      "casting contact",
      "representation",
      "booking",
    ],
    ogImage: `${siteUrl}/images/new_c3.jpg`,
    ogType: "website",
  },
};

type PageKey = keyof PageMetadata;

function toAbsoluteUrl(path: string) {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path}`;
}

export function getPageMetadata(page: PageKey, path: string): Metadata {
  const pageData = metadata[page];
  const canonical = toAbsoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: pageData.ogType,
      url: canonical,
      title: pageData.title,
      description: pageData.description,
      images: [pageData.ogImage],
      siteName: "Negin Poure",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [pageData.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default metadata;
