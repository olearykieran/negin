// src/app/layout.tsx

"use client";

import "./globals.css";
import React, { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import siteMetadata from "@/lib/metadata";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <title>{siteMetadata.home.title}</title>
        <meta name="description" content={siteMetadata.home.description} />
        <meta name="keywords" content={siteMetadata.home.keywords.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={siteMetadata.home.ogType} />
        <meta property="og:url" content="https://neginpoure.com/" />
        <meta property="og:title" content={siteMetadata.home.title} />
        <meta property="og:description" content={siteMetadata.home.description} />
        <meta property="og:image" content={siteMetadata.home.ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://neginpoure.com/" />
        <meta name="twitter:title" content={siteMetadata.home.title} />
        <meta name="twitter:description" content={siteMetadata.home.description} />
        <meta name="twitter:image" content={siteMetadata.home.ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://neginpoure.com/" />
        
        {/* Load only Lora and Open Sans from Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Josefin+Sans:wght@300;400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=supreme@100&display=swap"
        />
      </head>
      {/* Apply the Open Sans font across the site */}
      <body className="bg-white text-black min-h-screen letter-space-2 font-supreme font-[100]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
