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
  const categoryKey = category.slug === "production-shots"
    ? "productionShots"
    : category.slug as "portfolio" | "headshots";
  const categoryName = t.gallery.categories[categoryKey];
  const numberFormatter = new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", { useGrouping: false });

  return (
    <section className="relative min-h-screen bg-black pt-24 text-white scroll-mt-40">
      <div className="relative z-10 px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {category.slug !== "portfolio" && (
            <Link
              href="/gallery"
              className="mb-8 inline-block text-xs uppercase tracking-[0.18em] text-white/62 hover:text-white transition-colors"
            >
              &larr; {t.gallery.backButton}
            </Link>
          )}

          <h2 className="mb-10 text-4xl font-display uppercase tracking-display text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.62)] sm:text-5xl">
            {categoryName}
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.photos.map((src, i) => (
              <div
                key={src}
                className="aspect-[4/5] overflow-hidden border border-white/10 bg-black/40 shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
              >
                <img
                  src={src}
                  alt={`${categoryName}، ${t.gallery.photoAlt} ${numberFormatter.format(i + 1)}`}
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
