import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForCasting from "@/components/ForCasting";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("forCasting", "/for-casting");

const faqItems = [
  {
    question: "Where is Negin Poure based?",
    answer:
      "Negin Poure is based in New York City and Brooklyn, and is available for casting and representation conversations.",
  },
  {
    question: "Where can casting teams view official credits?",
    answer:
      "Official film and television credits are available on Negin Poure's IMDb profile.",
  },
  {
    question: "Where can agencies review modeling and portfolio materials?",
    answer:
      "Current portfolio materials are available on Negin Poure's MMG profile page.",
  },
  {
    question: "How can representation or casting teams get in touch?",
    answer:
      "Use the contact section on this website or email directly for casting, lead role, and representation inquiries.",
  },
  {
    question: "What work is she currently focused on?",
    answer:
      "Current focus includes lead and principal work across film, theatre, and commercial projects.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ForCastingPage() {
  return (
    <LayoutWrapper>
      <Header />

      <ForCasting />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </LayoutWrapper>
  );
}
