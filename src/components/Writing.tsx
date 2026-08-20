// src/components/Writing.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Writing() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  const poemFiles = Array.from({ length: 9 }, (_, index) => `/images/poems/${index + 1}.jpg`);
  const numberFormatter = new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", { useGrouping: false });

  return (
    <section
      id="writing"
      className="relative w-full min-h-[80vh] bg-ivory pt-40"
    >
      <div className="absolute inset-0 opacity-100">
        <img src="/images/writing/052024-negin-nyc-1060764-1200.jpeg" alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-cream text-center max-w-6xl mx-auto px-6 py-16">
        <div className="border border-cream/40 px-8 py-2 inline-block mb-12">
          <h2 className="text-3xl font-display uppercase tracking-display">{t.writing.title}</h2>
        </div>

        {/* Theater Play Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-display mb-8 uppercase tracking-[0.16em]">{t.writing.theatre}</h3>
          
          <div className="max-w-md mx-auto">
            <div className="bg-cream/80 border border-espresso/20 p-6 hover:border-espresso/40 transition-all">
              <h4 className="text-xl mb-2 font-display text-espresso">{t.writing.stain}</h4>
              <p className="text-sm text-espresso/70">{t.writing.coWrittenWith}</p>
              <p className="text-sm text-espresso/70">{t.writing.yearLabel}: {numberFormatter.format(2025)}</p>
              <p className="text-sm text-espresso/70 mt-2">{t.writing.theatrePlay}</p>
            </div>
          </div>
        </div>

        {/* Poetry Section */}
        <div>
          <h3 className="text-2xl font-display mb-8 uppercase tracking-[0.16em]">{t.writing.poetry}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.writing.poems.map((title, index) => (
              <a
                key={poemFiles[index]}
                href={poemFiles[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/80 border border-espresso/20 p-6 hover:border-espresso/40 transition-all cursor-pointer block"
              >
                <h4 className="text-lg mb-2 font-display text-espresso">{title}</h4>
                <p className="text-sm text-espresso/70">{numberFormatter.format(2024)}</p>
                <p className="text-xs text-espresso/60 mt-2 hover:text-espresso transition-colors">{t.writing.clickToRead} →</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
