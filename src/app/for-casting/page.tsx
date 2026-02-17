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

      <section className="relative min-h-screen bg-black text-white pt-44 pb-20 px-6">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/new_c3.jpg"
            alt="Negin Poure portrait"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            For Casting Directors and Talent Agencies
          </p>
          <h1 className="mt-5 font-canela uppercase leading-[0.95] text-[clamp(2.5rem,7vw,5.8rem)]">
            Casting-Ready
            <br />
            Lead Actress Profile
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed">
            Negin Poure is a New York and Brooklyn-based lead actor and model. This page
            centralizes professional materials for agency review, casting submissions, and
            representation inquiries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={externalProfiles.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-white/90 transition"
            >
              View IMDb Profile
            </a>
            <a
              href={externalProfiles.mmg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-black transition"
            >
              View MMG Portfolio
            </a>
            <a
              href="/NEGIN POURE-3.pdf"
              download="NEGIN POURE-3.pdf"
              className="px-5 py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <div className="border border-white/35 bg-black/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">Location</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em]">NYC + Brooklyn</p>
            </div>
            <div className="border border-white/35 bg-black/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">Languages</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em]">English + Farsi</p>
            </div>
            <div className="border border-white/35 bg-black/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">Focus</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em]">Lead Film + Theatre</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/70">Press and Features</p>
            <h2 className="mt-4 font-canela uppercase text-4xl">Recent Coverage</h2>
            <div className="mt-6 space-y-4">
              <a
                href="https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-black hover:text-white transition"
              >
                Canvas Rebel Interview
              </a>
              <a
                href="https://boldjourney.com/meet-negin-poure/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-black hover:text-white transition"
              >
                Bold Journey Interview
              </a>
            </div>
          </div>

          <div id="casting-faq">
            <p className="text-xs uppercase tracking-[0.28em] text-black/70">FAQ</p>
            <h2 className="mt-4 font-canela uppercase text-4xl">Casting FAQ</h2>
            <div className="mt-6 space-y-5">
              {faqItems.map((item) => (
                <article key={item.question} className="border-b border-black/20 pb-4">
                  <h3 className="text-base sm:text-lg uppercase tracking-[0.09em]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-black/70 leading-relaxed">
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

