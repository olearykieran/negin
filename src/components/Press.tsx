// src/components/Press.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Press() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section
      id="press"
      className="relative w-full min-h-[80vh] bg-ivory flex items-center justify-center pt-40"
    >
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/new-photos/IMG_8247.jpg"
          alt="Press backdrop"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-ivory/85" />
      <div className="relative z-10 text-espresso text-center max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="border border-espresso/30 px-8 py-2 inline-block mb-8">
            <h2 className="text-3xl font-display uppercase tracking-display">{t.press.title}</h2>
          </div>
          <p className="text-base sm:text-lg text-espresso/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            {t.press.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Canvas Rebel Interview */}
          <div className="bg-cream/80 border border-espresso/20 overflow-hidden hover:border-espresso/40 transition-all">
            <div className="h-48 overflow-hidden">
              <img src="/images/canvas-rebel.png" alt="Canvas Rebel Interview" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 font-display">{t.press.canvasRebel}</h3>
              <p className="text-espresso/70 mb-6">
                An in-depth conversation with Negin about her artistic journey, creative
                process, and future aspirations.
              </p>
              <a
                href="https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition text-xs uppercase tracking-[0.16em]"
              >
                {t.press.readMore}
              </a>
            </div>
          </div>

          {/* Bold Journey Interview */}
          <div className="bg-cream/80 border border-espresso/20 overflow-hidden hover:border-espresso/40 transition-all">
            <div className="h-48 overflow-hidden">
              <img src="/images/bold-journey.png" alt="Bold Journey Interview" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 font-display">{t.press.boldJourney}</h3>
              <p className="text-espresso/70 mb-6">
                A feature on Negin's creative journey, exploring her unique perspective
                as an artist and the experiences that shape her work.
              </p>
              <a
                href="https://boldjourney.com/meet-negin-poure/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition text-xs uppercase tracking-[0.16em]"
              >
                {t.press.readMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
