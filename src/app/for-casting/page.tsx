import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { externalProfiles, getPageMetadata } from "@/lib/metadata";

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

      <section className="relative min-h-screen bg-ivory text-espresso pt-44 pb-20 px-6">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/new_c3.jpg"
            alt="Negin Poure portrait"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-ivory/90" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-espresso/70">
            For Casting Directors and Talent Agencies
          </p>
          <h1 className="mt-5 font-display uppercase tracking-display leading-[0.95] text-[clamp(2.5rem,7vw,5.8rem)]">
            Casting-Ready
            <br />
            Lead Actress Profile
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-espresso/70 leading-relaxed">
            Negin Poure is a New York and Brooklyn-based lead actor and model. This page
            centralizes professional materials for agency review, casting submissions, and
            representation inquiries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={externalProfiles.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-espresso text-cream text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso/90 transition"
            >
              View IMDb Profile
            </a>
            <a
              href={externalProfiles.mmg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-espresso text-espresso text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso hover:text-cream transition"
            >
              View MMG Portfolio
            </a>
            <a
              href="/NEGIN POURE-3.pdf"
              download="NEGIN POURE-3.pdf"
              className="px-5 py-3 border border-espresso text-espresso text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso hover:text-cream transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <div className="border border-espresso/20 bg-cream/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-espresso/70">Location</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-espresso">NYC + Brooklyn</p>
            </div>
            <div className="border border-espresso/20 bg-cream/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-espresso/70">Languages</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-espresso">English + Farsi</p>
            </div>
            <div className="border border-espresso/20 bg-cream/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-espresso/70">Focus</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-espresso">Lead Film + Theatre</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory text-espresso py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-espresso/70">Press and Features</p>
            <h2 className="mt-4 font-display uppercase tracking-display text-4xl">Recent Coverage</h2>
            <div className="mt-6 space-y-4">
              <a
                href="https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-espresso px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-espresso hover:text-cream transition"
              >
                Canvas Rebel Interview
              </a>
              <a
                href="https://boldjourney.com/meet-negin-poure/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-espresso px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-espresso hover:text-cream transition"
              >
                Bold Journey Interview
              </a>
            </div>
          </div>

          <div id="casting-faq">
            <p className="text-xs uppercase tracking-[0.28em] text-espresso/70">FAQ</p>
            <h2 className="mt-4 font-display uppercase tracking-display text-4xl">Casting FAQ</h2>
            <div className="mt-6 space-y-5">
              {faqItems.map((item) => (
                <article key={item.question} className="border-b border-espresso/20 pb-4">
                  <h3 className="text-base sm:text-lg uppercase tracking-[0.09em]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-espresso/70 leading-relaxed">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </LayoutWrapper>
  );
}
