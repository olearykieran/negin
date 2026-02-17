// src/components/Biography.tsx
"use client";

import React, { useContext } from "react";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";
import { externalProfiles } from "@/lib/metadata";

export default function Biography() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="biography" className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Image - B&W */}
      <div className="absolute inset-0">
        <img
          src="/images/new-photos-2/IMG_8270.jpg"
          alt="Portrait of Negin"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/90 via-black/70 to-black/35" />
      <div className="absolute inset-y-0 left-0 w-full md:w-[62%] bg-gradient-to-r from-black/88 via-black/72 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-5 sm:p-8 md:p-14">
        {/* Top Labels */}
        <div className="flex justify-between items-start">
          <span className="text-white/85 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
            MY STORY
          </span>
          <span className="text-white/85 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
            BIOGRAPHY
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Section - Bio Text on Left */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8">
          <div className="w-full md:max-w-[36rem] bg-black/52 border border-white/30 backdrop-blur-[2px] p-4 sm:p-6">
            <p className="text-white text-[15px] sm:text-base md:text-[17px] leading-7 sm:leading-8 tracking-[0.01em] font-medium mb-6">
              {t.biography.content}
            </p>
            <p className="text-white text-sm sm:text-base tracking-[0.16em] uppercase font-semibold mb-4">
              NEGIN POURE
            </p>
            <a
              href="/NEGIN POURE-3.pdf"
              download="NEGIN POURE-3.pdf"
              className="inline-block border border-white text-white px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
            >
              {t.biography.awardsButton}
            </a>
            <div className="mt-6 border-t border-white/35 pt-4">
              <p className="text-white/80 text-[10px] sm:text-xs tracking-[0.18em] uppercase font-semibold mb-3">
                {t.biography.industryProfilesTitle || "Industry Profiles"}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a
                  href={externalProfiles.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/70 hover:text-white/80 hover:decoration-white transition text-xs sm:text-sm tracking-[0.03em]"
                >
                  {t.biography.imdbProfile || "IMDb Profile"}
                </a>
                <a
                  href={externalProfiles.mmg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/70 hover:text-white/80 hover:decoration-white transition text-xs sm:text-sm tracking-[0.03em]"
                >
                  {t.biography.mmgProfile || "MMG Modeling Portfolio"}
                </a>
              </div>
            </div>
          </div>
          <span className="hidden md:block text-white/85 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
            NYC
          </span>
        </div>
      </div>
    </section>
  );
}
