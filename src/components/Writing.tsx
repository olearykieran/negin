// src/components/Writing.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Writing() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  const poems = [
    { title: "BLACK-FATED LOVE", year: "2024", file: "/images/poems/1.jpg" },
    { title: "WALNUT TREE", year: "2024", file: "/images/poems/2.jpg" },
    { title: "YOU", year: "2024", file: "/images/poems/3.jpg" },
    { title: "XXOO", year: "2024", file: "/images/poems/4.jpg" },
    { title: "CLUMSY LOVER", year: "2024", file: "/images/poems/5.jpg" },
    { title: "IF ONLY", year: "2024", file: "/images/poems/6.jpg" },
    { title: "SHACKLES MADE OF PEARLS", year: "2024", file: "/images/poems/7.jpg" },
    { title: "THE SIXTH EVENING", year: "2024", file: "/images/poems/8.jpg" },
    { title: "LITTLE DARK ONE", year: "2024", file: "/images/poems/9.jpg" },
  ];

  return (
    <section
      id="writing"
      className="relative w-full min-h-[80vh] bg-center bg-cover bg-no-repeat pt-40"
      style={{
        backgroundImage: "url('/images/new_c1.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white text-center max-w-6xl mx-auto px-4 py-16">
        <div className="border border-white px-8 py-2 inline-block mb-12">
          <h2 className="text-3xl font-noto uppercase">{t.writing?.title || "Writing"}</h2>
        </div>

        {/* Theater Play Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8 uppercase tracking-wide">Theater</h3>
          
          <div className="max-w-md mx-auto">
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <h4 className="text-xl mb-2 font-semibold">Stain</h4>
              <p className="text-sm text-gray-300">Co-written with Hera Gunes Barlowe</p>
              <p className="text-sm text-gray-300">Year: 2025</p>
              <p className="text-sm text-gray-300 mt-2">Theater Play</p>
            </div>
          </div>
        </div>

        {/* Poetry Section */}
        <div>
          <h3 className="text-2xl font-light mb-8 uppercase tracking-wide">Poetry</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {poems.map((poem, index) => (
              <a
                key={index}
                href={poem.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all cursor-pointer block"
              >
                <h4 className="text-lg mb-2 font-semibold">{poem.title}</h4>
                <p className="text-sm text-gray-300">{poem.year}</p>
                <p className="text-xs text-gray-400 mt-2 hover:text-white transition-colors">Click to read →</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}