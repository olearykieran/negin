// src/app/layout.tsx

import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { externalProfiles, getPageMetadata, siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  ...getPageMetadata("home", "/"),
  title: {
    default: "Negin Poure | Lead Actor for Film & Theatre",
    template: "%s",
  },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Negin Poure",
      alternateName: "نگین پور",
      url: siteUrl,
      image: `${siteUrl}/images/new_c3.jpg`,
      description:
        "Negin Poure is a New York and Brooklyn-based lead actor and model working across film, theatre, and commercial projects.",
      jobTitle: ["Lead Actor", "Model", "Writer"],
      homeLocation: {
        "@type": "Place",
        name: "New York City",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US",
      },
      areaServed: ["New York City", "Brooklyn", "United States"],
      knowsLanguage: ["English", "Farsi"],
      knowsAbout: [
        "Lead acting roles",
        "Film acting",
        "Theatre performance",
        "Commercial performance",
      ],
      sameAs: [externalProfiles.imdb, externalProfiles.mmg, externalProfiles.instagram],
    },
    {
      "@type": "WebSite",
      name: "Negin Poure",
      url: siteUrl,
      inLanguage: ["en", "fa"],
      about: {
        "@type": "Person",
        name: "Negin Poure",
      },
    },
    {
      "@type": "ProfilePage",
      name: "Negin Poure | Lead Actor for Film & Theatre",
      url: siteUrl,
      mainEntity: {
        "@type": "Person",
        name: "Negin Poure",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Load only Lora and Open Sans from Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Josefin+Sans:wght@300;400;700&family=Caveat:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=supreme@100,400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      {/* Apply the Open Sans font across the site */}
      <body className="bg-white text-black min-h-screen letter-space-2 font-supreme font-[100]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
