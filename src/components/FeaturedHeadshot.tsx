"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function FeaturedHeadshot() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 pb-16 pt-36 text-white sm:px-10 sm:pb-20 sm:pt-40">
      <div className="flex w-full flex-col items-center text-center">
        <h1 className="mb-8 font-display text-4xl uppercase tracking-display text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.62)] sm:mb-10 sm:text-5xl">
          {t.gallery.featuredHeadshot}
        </h1>

        <div className="w-full max-w-[30rem] overflow-hidden border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <img
            src="/images/headshots/featured-headshot.jpeg"
            alt={t.gallery.featuredHeadshotAlt}
            className="h-auto w-full object-contain"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
