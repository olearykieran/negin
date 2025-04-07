// src/components/Biography.tsx
"use client";

import React, { useContext } from "react";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";

export default function Biography() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="biography" className="bg-[#2f2f2f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        {/* Left side: big vertical text + image */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 relative">
          {/* This container can mimic that vertical "biography" text frame */}
          <div className="border border-white p-4 relative inline-block">
            <img
              src="/images/new_b6.jpg"
              alt="Biography Pose"
              className="w-full h-auto"
            />
            {/* Vertical text overlay on the left edge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full rotate-[-90deg] origin-bottom-left text-xl font-noto">
              <span className="mr-2">{t.biography.title.toLowerCase()}</span>
            </div>
          </div>
        </div>

        {/* Right side: text content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-noto font-bold mb-4">{t.biography.heading}</h2>
          <p className="text-md leading-relaxed mb-4">{t.biography.content}</p>
          <a
            href="/negin_poure_resume.pdf"
            download
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition inline-block"
          >
            {t.biography.awardsButton}
          </a>
        </div>
      </div>
    </section>
  );
}
