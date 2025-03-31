// src/components/Hero.tsx
"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full h-screen 
        bg-fixed bg-cover bg-no-repeat
        flex items-center justify-center
      "
      style={{
        /* 
          'center' horizontally and '20%' vertically 
           so we see more of the top portion of the image.
           Increase or decrease '20%' to adjust how high 
           or low the image starts.
        */
        backgroundImage: "url('/images/new_b3.jpg')",
        backgroundPosition: "center 20%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="relative z-10 text-white text-center">
        <h1 className="text-7xl font-satoshi mb-4 leading-tight">
          <span className="block letter-space">Negin Poure</span>
          <span className="block text-5xl mt-2">نگین پور</span>
        </h1>

        <p className="text-sm font-light italic leading-snug">
          <span className="block">Actress &amp; Model</span>
          <span className="block mt-1">بازیگر و مدل</span>
        </p>
      </div>
    </section>
  );
}
