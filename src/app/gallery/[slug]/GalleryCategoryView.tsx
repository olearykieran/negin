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
    <section className="relative overflow-hidden bg-ivory pt-24 scroll-mt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#ebe4d8] to-transparent" />

      <div className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/gallery"
            className="mb-8 inline-block text-xs uppercase tracking-[0.18em] text-espresso/55 hover:text-espresso transition-colors"
          >
            &larr; {t.gallery.backButton}
          </Link>

          <h2 className="mb-10 text-4xl font-display uppercase tracking-display text-espresso sm:text-5xl">
            {category.name}
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.photos.map((src, i) => (
              <div
                key={src}
                className="aspect-[4/5] overflow-hidden bg-charcoal shadow-[0_8px_30px_rgba(58,51,44,0.12)]"
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
