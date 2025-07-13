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
      className="relative w-full min-h-[80vh] bg-center bg-cover bg-no-repeat pt-40"
      style={{
        backgroundImage: "url('/images/new_c3.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white text-center max-w-6xl mx-auto px-4 py-16">
        <div className="border border-white px-8 py-2 inline-block mb-12">
          <h2 className="text-3xl font-noto uppercase">{t.filmography.title}</h2>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8 uppercase tracking-wide">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Studio Ghost */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/studio-ghost.jpeg" 
                  alt="Studio Ghost"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">Studio Ghost</h4>
              <p className="text-sm text-gray-300">Role: Lead (Ghost)</p>
              <p className="text-sm text-gray-300">Writer/Director: Vic Wu</p>
              <p className="text-sm text-gray-300">Year: 2024</p>
              <p className="text-sm text-gray-300 mt-2">Short Film</p>
            </div>

            {/* Leftovers */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/leftovers.jpeg" 
                  alt="Leftovers"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">Leftovers</h4>
              <p className="text-sm text-gray-300">Role: Lead</p>
              <p className="text-sm text-gray-300">Writer/Director: Negin Poure</p>
              <p className="text-sm text-gray-300">Year: 2024</p>
              <p className="text-sm text-gray-300 mt-2">Short Film</p>
            </div>

            {/* Status Quo */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/status-quo.jpg" 
                  alt="Status Quo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">Status Quo</h4>
              <p className="text-sm text-gray-300">Role: Multiple Roles</p>
              <p className="text-sm text-gray-300">Writer: Maja Zade</p>
              <p className="text-sm text-gray-300">Director: Dmitry Troyanovsky</p>
              <p className="text-sm text-gray-300">Year: 2024</p>
              <p className="text-sm text-gray-300 mt-2">Theater Play</p>
            </div>

            {/* A Midsummer Night's Dream */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/midsummer.jpg" 
                  alt="A Midsummer Night's Dream"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">A Midsummer Night's Dream</h4>
              <p className="text-sm text-gray-300">Role: Helena</p>
              <p className="text-sm text-gray-300">Writer: William Shakespeare</p>
              <p className="text-sm text-gray-300">Director: Ipsen Santos</p>
              <p className="text-sm text-gray-300">Year: 2024</p>
              <p className="text-sm text-gray-300 mt-2">Theater Play</p>
            </div>
          </div>
        </div>

        {/* Future Projects Section */}
        <div>
          <h3 className="text-2xl font-light mb-8 uppercase tracking-wide">
            Coming Soon
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Flighty - Short Film */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/flighty.jpeg" 
                  alt="Flighty Short Film"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">Flighty</h4>
              <p className="text-sm text-gray-300">Role: Main Actress</p>
              <p className="text-sm text-gray-300">Writer/Director: Giovanni Staricco</p>
              <p className="text-sm text-gray-300">Year: 2025</p>
              <p className="text-sm text-gray-300 mt-2">Short Film</p>
            </div>

            {/* Stain - Play */}
            <div className="bg-black bg-opacity-50 border border-gray-700 p-6 hover:border-white transition-all">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src="/images/stain.JPG" 
                  alt="Stain"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl mb-2 font-semibold">Stain</h4>
              <p className="text-sm text-gray-300">Role: Lead (Melody)</p>
              <p className="text-sm text-gray-300">Writers: Negin Poure & Hera Gunes Barlowe</p>
              <p className="text-sm text-gray-300">Director: TBD</p>
              <p className="text-sm text-gray-300">Year: 2025</p>
              <p className="text-sm text-gray-300 mt-2">Theater Play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
