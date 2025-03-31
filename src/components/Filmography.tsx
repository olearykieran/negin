// src/components/Filmography.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Filmography() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section
      id="filmography"
      className="relative w-full min-h-[80vh] bg-center bg-cover bg-no-repeat flex items-center justify-center pt-40"
      style={{
        backgroundImage: "url('/images/new_c3.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4 py-16">
        <div className="border border-white px-8 py-2 inline-block mb-8">
          <h2 className="text-3xl font-noto uppercase">{t.filmography.title}</h2>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-light mb-4">{t.filmography.comingSoon}</h3>
          <p className="text-lg text-gray-300 mb-8">{t.filmography.description}</p>

          {/* Placeholder film projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Project 1 */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
                <span className="text-gray-500">Coming Soon</span>
              </div>
              <h4 className="text-xl mb-2">Project Title</h4>
              <p className="text-sm text-gray-400">Role: Lead</p>
              <p className="text-sm text-gray-400">Director: TBA</p>
              <p className="text-sm text-gray-400">Year: 2025</p>
            </div>

            {/* Project 2 */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
                <span className="text-gray-500">Coming Soon</span>
              </div>
              <h4 className="text-xl mb-2">Project Title</h4>
              <p className="text-sm text-gray-400">Role: Supporting</p>
              <p className="text-sm text-gray-400">Director: TBA</p>
              <p className="text-sm text-gray-400">Year: 2025</p>
            </div>

            {/* Project 3 */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
                <span className="text-gray-500">Coming Soon</span>
              </div>
              <h4 className="text-xl mb-2">Project Title</h4>
              <p className="text-sm text-gray-400">Role: Lead</p>
              <p className="text-sm text-gray-400">Director: TBA</p>
              <p className="text-sm text-gray-400">Year: 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
