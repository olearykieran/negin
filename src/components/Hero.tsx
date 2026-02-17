// src/components/Hero.tsx
"use client";

import React from "react";
import { externalProfiles } from "@/lib/metadata";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full h-screen
        bg-cover bg-no-repeat bg-center
        md:bg-fixed
      "
      style={{
        backgroundImage: "url('/images/new_c3.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/62 to-black/35" />

      <div className="relative z-10 h-full w-full px-5 sm:px-6 md:px-10 pb-8 md:pb-12 flex items-end justify-center md:justify-end">
        <div className="w-full md:max-w-[38rem] bg-black/38 border border-white/25 backdrop-blur-[1px] p-5 sm:p-6 md:p-8">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/80 mb-4">
            For Talent Agencies & Casting Directors
          </p>

          <h1 className="font-canela text-white uppercase leading-[0.9] tracking-[0.06em] text-[clamp(2.3rem,7vw,5.2rem)]">
            Negin Poure
          </h1>
          <p className="text-white/95 mt-4 text-sm sm:text-base tracking-[0.11em] uppercase">
            Lead Actor | Film, Theatre, Commercial
          </p>
          <p className="text-white/80 mt-1 text-xs sm:text-sm tracking-[0.12em] uppercase">
            New York Based | Bilingual (EN / FA)
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={externalProfiles.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold hover:bg-white/90 transition"
            >
              View IMDb Profile
            </a>
            <a
              href={externalProfiles.mmg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold hover:bg-white hover:text-black transition"
            >
              View MMG Portfolio
            </a>
            <a
              href="/NEGIN POURE-3.pdf"
              download="NEGIN POURE-3.pdf"
              className="px-5 py-3 border border-white text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-3 border border-white/60 text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold hover:border-white transition"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 hidden sm:grid sm:grid-cols-3 gap-3 text-white/90">
            <div className="border border-white/30 bg-black/35 p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Training</p>
              <p className="mt-2 text-sm uppercase tracking-[0.1em]">AADA Graduate</p>
            </div>
            <div className="border border-white/30 bg-black/35 p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Range</p>
              <p className="mt-2 text-sm uppercase tracking-[0.1em]">Lead Film + Stage</p>
            </div>
            <div className="border border-white/30 bg-black/35 p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/75">Base</p>
              <p className="mt-2 text-sm uppercase tracking-[0.1em]">New York City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
