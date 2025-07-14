// src/app/writing/page.tsx
"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Writing from "@/components/Writing";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import siteMetadata from "@/lib/metadata";

export default function WritingPage() {
  // Update page metadata
  useEffect(() => {
    // Update document title
    document.title = siteMetadata.writing?.title || "Writing - Negin Poure";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteMetadata.writing?.description || 'Explore Negin Poure\'s creative writing works including theater plays and poetry');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', siteMetadata.writing?.keywords?.join(', ') || 'Negin Poure, writing, poetry, theater, playwright');
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', siteMetadata.writing?.title || 'Writing - Negin Poure');
    if (ogDescription) ogDescription.setAttribute('content', siteMetadata.writing?.description || 'Explore Negin Poure\'s creative writing works');
    if (ogImage) ogImage.setAttribute('content', siteMetadata.writing?.ogImage || '/images/new_c1.jpg');
    if (ogType) ogType.setAttribute('content', 'website');
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', siteMetadata.writing?.title || 'Writing - Negin Poure');
    if (twitterDescription) twitterDescription.setAttribute('content', siteMetadata.writing?.description || 'Explore Negin Poure\'s creative writing works');
    if (twitterImage) twitterImage.setAttribute('content', siteMetadata.writing?.ogImage || '/images/new_c1.jpg');
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://neginpoure.com/writing');
    }
  }, []);

  return (
    <LayoutWrapper>
      <Header />
      <Writing />
      <Footer />
    </LayoutWrapper>
  );
}