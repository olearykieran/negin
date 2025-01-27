// src/app/page.tsx
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
// REMOVE Filmography & Press from here
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Parallax Hero */}
      <Hero />
      {/* Biography */}
      <Biography />
      {/* Parallax Gallery */}
      <GallerySection />
      {/* Contact */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </>
  );
}
