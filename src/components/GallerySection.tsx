// src/components/GallerySection.tsx
"use client";

import React from "react";
import Link from "next/link";

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
        backgroundImage: "url('/images/new_b1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-white text-center">
        <Link 
          href="/gallery" 
          className="
            inline-block px-8 py-3 
            border border-white 
            text-white hover:bg-white hover:text-black 
            transition-colors duration-300
            uppercase text-sm tracking-wider
          "
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}
