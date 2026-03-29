// src/app/page.tsx
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Parallax Hero */}
      <Hero />
      {/* Biography */}
      <Biography />
      {/* Contact + Footer */}
      <ContactSection />
    </>
  );
}
