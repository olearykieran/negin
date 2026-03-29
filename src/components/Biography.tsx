// src/components/Biography.tsx
"use client";

import React, { useContext } from "react";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";


export default function Biography() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Panel - Solid cream with text */}
      <div className="relative z-10 w-full md:w-1/2 bg-cream min-h-screen flex flex-col justify-between p-8 sm:p-12 md:p-16">

        {/* Top Label */}
        <span className="relative text-espresso/60 text-[11px] sm:text-xs tracking-eyebrow uppercase">
          My Story
        </span>

        {/* Bio Content - Centered vertically */}
        <div className="relative my-auto py-12">
          <p className="text-espresso text-base sm:text-lg md:text-xl leading-9 tracking-[0.01em] font-[400] mb-8">
            {t.biography.content}
          </p>
        </div>

      </div>

      {/* Right Panel - Full image */}
      <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen relative">
        <img
          src="/images/neggy3.jpg"
          alt="Portrait of Negin"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
        />
        {/* About label - top right */}
        <span className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 text-cream/70 text-[11px] sm:text-xs tracking-eyebrow uppercase z-10">
          About
        </span>
        {/* NYC label - bottom right */}
        <span className="hidden md:block absolute bottom-16 right-16 text-cream/70 text-[11px] sm:text-xs tracking-eyebrow uppercase z-10">
          NYC
        </span>
      </div>
    </section>
  );
}
