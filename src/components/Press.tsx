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
      className="relative w-full min-h-[80vh] bg-[#2f2f2f] text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
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
          <div className="bg-black bg-opacity-20 border border-gray-700 p-8 hover:border-white transition-all">
            <h3 className="text-2xl mb-4">{t.press.canvasRebel}</h3>
            <p className="text-gray-300 mb-6">
              An in-depth conversation with Negin about her artistic journey, creative process, and future aspirations.
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

          {/* Placeholder for future press */}
          <div className="bg-black bg-opacity-20 border border-gray-700 p-8">
            <h3 className="text-2xl mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              More press features and interviews will be added here as they become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
