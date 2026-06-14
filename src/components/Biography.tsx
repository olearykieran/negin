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
      {/* Left Panel - Dark text panel */}
      <div className="relative z-10 w-full md:w-1/2 bg-[#14120F] min-h-screen flex flex-col justify-between p-8 sm:p-12 md:p-16">

        {/* Top Label */}
        <span className="relative text-cream/55 text-[11px] sm:text-xs tracking-eyebrow uppercase">
          My Story
        </span>

        {/* Bio Content - Centered vertically */}
        <div className="relative flex flex-1 items-center py-8">
          <p className="max-w-[28rem] text-cream/85 text-base sm:text-lg md:text-xl leading-[2.15] md:leading-[2.2] tracking-[0.01em] font-[400]">
            {t.biography.content}
          </p>
        </div>

      </div>

      {/* Right Panel - Full image */}
      <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen relative overflow-hidden">
        <img
          src="/images/neggy3.jpg"
          alt="Portrait of Negin"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
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
