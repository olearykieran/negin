// src/components/GallerySection.tsx
"use client";

import React from "react";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="
        relative w-full h-[60vh] 
        bg-center bg-cover bg-no-repeat 
        bg-fixed
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/images/neg-bw-3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-white text-center">
        <div className="border border-white px-8 py-2 inline-block">
          <h2 className="text-3xl uppercase font-light">Gallery</h2>
        </div>
      </div>
    </section>
  );
}
