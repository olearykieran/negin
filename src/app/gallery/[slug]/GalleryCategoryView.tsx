"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";
import type { GalleryCategory } from "@/lib/gallery-data";

export default function GalleryCategoryView({
  category,
}: {
  category: GalleryCategory;
}) {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <section className="relative min-h-screen bg-black pt-24 text-white scroll-mt-40">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src="/images/gallery-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-[38%_26%]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.42)_34%,rgba(0,0,0,0.72)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/gallery"
            className="mb-8 inline-block text-xs uppercase tracking-[0.18em] text-white/62 hover:text-white transition-colors"
          >
            &larr; {t.gallery.backButton}
          </Link>

          <h2 className="mb-10 text-4xl font-display uppercase tracking-display text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.62)] sm:text-5xl">
            {category.name}
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.photos.map((src, i) => (
              <div
                key={src}
                className="aspect-[4/5] overflow-hidden border border-white/10 bg-black/40 shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
              >
                <img
                  src={src}
                  alt={`${category.name} ${i + 1}`}
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: category.photoPosition || "center center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
