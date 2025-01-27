// src/components/Hero.tsx
"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full h-screen 
        bg-center bg-cover bg-no-repeat 
        bg-fixed    /* This is the key for parallax in Tailwind */
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/images/neg-bw-4.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-7xl letter-space font-satoshi mb-4">Negin Poure</h1>
        <p className="text-sm font-light italic">Actress &amp; Model</p>
      </div>
    </section>
  );
}
