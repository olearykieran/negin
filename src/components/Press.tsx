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
      className="relative w-full min-h-[80vh] bg-[#2f2f2f] text-white flex items-center justify-center pt-40"
    >
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="border border-white px-8 py-2 inline-block mb-8">
            <h2 className="text-3xl font-noto uppercase">{t.press.title}</h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            {t.press.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Canvas Rebel Interview */}
          <div className="bg-black bg-opacity-20 border border-gray-700 overflow-hidden hover:border-white transition-all">
            <div className="h-48 overflow-hidden">
              <img src="/images/canvas-rebel.png" alt="Canvas Rebel Interview" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4">{t.press.canvasRebel}</h3>
              <p className="text-gray-300 mb-6">
                An in-depth conversation with Negin about her artistic journey, creative
                process, and future aspirations.
              </p>
              <a
                href="https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition"
              >
                {t.press.readMore}
              </a>
            </div>
          </div>

          {/* Bold Journey Interview */}
          <div className="bg-black bg-opacity-20 border border-gray-700 overflow-hidden hover:border-white transition-all">
            <div className="h-48 overflow-hidden">
              <img src="/images/bold-journey.png" alt="Bold Journey Interview" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4">{t.press.boldJourney}</h3>
              <p className="text-gray-300 mb-6">
                A feature on Negin's creative journey, exploring her unique perspective
                as an artist and the experiences that shape her work.
              </p>
              <a
                href="https://boldjourney.com/meet-negin-poure/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition"
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
