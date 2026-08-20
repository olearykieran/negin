"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function WorkShowreel() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].work;

  return (
    <section id="reels" className="relative min-h-screen overflow-hidden bg-black text-white scroll-mt-40 pt-40">
      <img
        src="/images/neggy2.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/74" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.62)_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="border border-white/35 px-8 py-2 inline-block bg-black/12 backdrop-blur-[1px]">
            <h1 className="text-3xl font-display uppercase tracking-display">{t.title}</h1>
          </div>
          <p className="mt-6 text-sm sm:text-base text-white/78 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden border border-white/18 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
            <iframe
              src="https://www.youtube.com/embed/sRhfWuLBEL4"
              title={t.iframeTitle}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-xs sm:text-sm text-white/70">
            <a
              href="https://youtube.com/watch?v=sRhfWuLBEL4&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white transition"
            >
              {t.openYoutube}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
