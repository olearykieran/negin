// src/components/Filmography.tsx
"use client";

import React from "react";

export default function Filmography() {
  return (
    <section
      id="filmography"
      className="relative w-full h-[60vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/neg-bw-2.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-white text-center">
        <div className="border border-white px-8 py-2 inline-block">
          <h2 className="text-3xl font-noto uppercase">filmography</h2>
        </div>
      </div>
    </section>
  );
}
