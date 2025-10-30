// src/components/Biography.tsx
"use client";

import React, { useContext } from "react";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";

export default function Biography() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="biography" className="bg-[#f5f5f0] text-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center gap-10 lg:gap-0 lg:min-h-[900px] lg:pt-28">
          {/* Headline */}
          <div className="text-center lg:absolute lg:top-16 lg:left-[47%] lg:-translate-x-1/2 lg:z-30">
            <h2 className="font-canela font-light tracking-tight text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.9] whitespace-nowrap">
              HI, I&apos;M NEGIN
            </h2>
            <p className="mt-3 text-[11px] tracking-[0.4em] uppercase text-gray-500">
              A LITTLE OF MY STORY
            </p>
          </div>

          {/* Main portrait with offset backdrop */}
          <div className="relative w-full max-w-3xl px-6 lg:px-0 lg:absolute lg:left-[50%] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="relative z-10 overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
              <img
                src="/images/new-photos/untitled-1134.JPG"
                alt="Portrait of Negin"
                className="h-[660px] w-full object-cover sm:h-[720px]"
              />
            </div>
          </div>

          {/* Accent photo */}
          <div className="hidden lg:block relative lg:absolute lg:left-[4%] lg:bottom-[8%] lg:z-20 w-72">
            <div className="relative z-10 shadow-md">
              <img
                src="/images/new-photos/untitled-19.JPG"
                alt="Negin strolling along the shore"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>

          {/* Biography copy */}
          <div className="w-full max-w-xl bg-white px-12 py-14 text-[16px] sm:text-[17px] leading-relaxed tracking-wide shadow-lg lg:absolute lg:right-[-28%] lg:top-1/2 lg:-translate-y-1/2 lg:z-20">
            <p className="mb-8">{t.biography.content}</p>
            <a
              href="/NeginPoure_Resume%20.pdf"
              download="NeginPoure_Resume.pdf"
              className="inline-block border border-black px-6 py-2 text-xs font-light uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
            >
              {t.biography.awardsButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
