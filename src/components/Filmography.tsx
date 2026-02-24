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
      className="relative w-full min-h-[80vh] bg-ivory pt-40"
    >
      <div className="absolute inset-0 opacity-25">
        <img src="/images/new_c3.jpg" alt="Filmography backdrop" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-ivory/85"></div>

      <div className="relative z-10 text-espresso text-center max-w-6xl mx-auto px-6 py-16">
        <div className="border border-espresso/30 px-8 py-2 inline-block mb-12">
          <h2 className="text-3xl font-display uppercase tracking-display">
            {t.menu?.work || "Work"}
          </h2>
        </div>

        {/* Future Projects Section */}
        <div>
          <h3 className="text-2xl font-display mb-8 uppercase tracking-[0.16em]">
            Coming Soon
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Flighty - Short Film */}
            <div className="bg-cream/80 border border-espresso/20 p-6 hover:border-espresso/40 transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img
                  src="/images/flighty.jpeg"
                  alt="Flighty Short Film"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-display">Flighty</h4>
              <p className="text-sm text-espresso/70">Role: Sasha</p>
              <p className="text-sm text-espresso/70">Writer/Director: Giovanni Staricco</p>
              <p className="text-sm text-espresso/70">Year: 2025</p>
              <p className="text-sm text-espresso/70 mt-2">Short Film</p>
            </div>

            {/* Stain - Play */}
            <div className="bg-cream/80 border border-espresso/20 p-6 hover:border-espresso/40 transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img
                  src="/images/stain.JPG"
                  alt="Stain"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-display">Stain</h4>
              <p className="text-sm text-espresso/70">Role: Melody</p>
              <p className="text-sm text-espresso/70">
                Writers: Negin Poure & Hera Gunes Barlowe
              </p>
              <p className="text-sm text-espresso/70">Director: Milagros Luis</p>
              <p className="text-sm text-espresso/70">Year: 2025</p>
              <p className="text-sm text-espresso/70 mt-2">Theatre Play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
