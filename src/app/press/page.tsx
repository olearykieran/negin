// src/app/press/page.tsx
"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Press from "@/components/Press";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import siteMetadata from "@/lib/metadata";

export default function PressPage() {
  // Update page metadata
  useEffect(() => {
    // Update document title
    document.title = siteMetadata.press.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteMetadata.press.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', siteMetadata.press.keywords.join(', '));
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', siteMetadata.press.title);
    if (ogDescription) ogDescription.setAttribute('content', siteMetadata.press.description);
    if (ogImage) ogImage.setAttribute('content', siteMetadata.press.ogImage);
    if (ogType) ogType.setAttribute('content', siteMetadata.press.ogType);
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', siteMetadata.press.title);
    if (twitterDescription) twitterDescription.setAttribute('content', siteMetadata.press.description);
    if (twitterImage) twitterImage.setAttribute('content', siteMetadata.press.ogImage);
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://neginpoure.com/press');
    }
  }, []);

  return (
    <LayoutWrapper>
      <Header />
      <Press />
      <Footer />
    </LayoutWrapper>
  );
}
