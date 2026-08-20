// src/components/Press.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

const articles = [
  {
    key: "pozeMagazine" as const,
    url: "https://online.flipbuilder.com/yisv/aknh/",
  },
  {
    key: "canvasRebel" as const,
    url: "https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT",
  },
  {
    key: "boldJourney" as const,
    url: "https://boldjourney.com/meet-negin-poure/",
  },
];

export default function Press() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="press" className="relative w-full min-h-[calc(100vh-5.25rem)] pt-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/press/052024-negin-nyc-1060280-1200.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-16">
        <div className="border border-cream/40 px-8 py-2 inline-block mb-12">
          <h2 className="text-3xl font-display uppercase tracking-display text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {t.press.title}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-cream/80 max-w-3xl mx-auto mb-16 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          {t.press.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.key}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream/80 backdrop-blur-sm p-8 hover:bg-cream/90 transition-all block"
            >
              <h3 className="text-xl mb-4 font-display text-espresso">
                {t.press[article.key]}
              </h3>
              <p className="text-sm text-espresso/70 mb-6 leading-relaxed">
                {t.press.articles[article.key]}
              </p>
              <span className="text-xs uppercase tracking-[0.16em] text-espresso/50 hover:text-espresso transition-colors">
                {t.press.readMore} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
