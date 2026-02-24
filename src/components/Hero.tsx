// src/components/Hero.tsx
"use client";

import React from "react";
import { externalProfiles } from "@/lib/metadata";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-no-repeat bg-center md:bg-fixed"
      style={{
        backgroundImage: "url('/images/new_b3.jpg')",
        backgroundPosition: "center 42%",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

      <div className="relative z-10 h-full w-full px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-14 flex items-end">
        <h1
          className="pointer-events-none absolute left-1/2 top-[44%] w-full -translate-x-1/2 -translate-y-1/2 text-center text-cream/95 leading-none tracking-tight"
          style={{
            fontFamily: '"Signatie", cursive',
            fontSize: "clamp(3.2rem, 14vw, 13rem)",
          }}
        >
          Negin Poure
        </h1>

        <div className="ml-auto text-right">
          <p
            className="text-cream/80 text-[10px] sm:text-[11px] tracking-[0.22em]"
            style={{ fontFamily: '"Cartesius Smallcaps", serif' }}
          >
            NEW YORK BASED · FILM & THEATRE
          </p>
          <div
            className="mt-5 flex flex-wrap justify-end gap-6 text-[10px] sm:text-[11px] tracking-[0.2em] text-cream/85"
            style={{ fontFamily: '"Cartesius Smallcaps", serif' }}
          >
            <a href={externalProfiles.imdb} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">
              IMDb
            </a>
            <a href={externalProfiles.mmg} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">
              MMG
            </a>
            <a href="/NEGIN POURE-3.pdf" download="NEGIN POURE-3.pdf" className="hover:text-cream transition">
              Resume
            </a>
            <a href="#contact" className="hover:text-cream transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
