"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";
import { categories, type GalleryCategory } from "@/lib/gallery-data";

interface GalleryProps {
  standalone?: boolean;
  sectionId?: string;
  titleOverride?: string;
  showTitle?: boolean;
}

function GalleryCard({
  category,
  className = "",
}: {
  category: GalleryCategory;
  className?: string;
}) {
  return (
    <Link
      href={`/gallery/${category.slug}`}
      className={`group relative flex w-full overflow-hidden rounded-[1.75rem] bg-charcoal text-left shadow-[0_12px_40px_rgba(58,51,44,0.14)] transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(58,51,44,0.22)] ${className}`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ objectPosition: category.position }}
      />
      {/* Strong bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

      <div className="relative z-10 flex h-full w-full flex-col justify-end p-7 sm:p-9">
        <div className="mb-4 h-px w-14 bg-cream/50 transition-all duration-500 group-hover:w-24 group-hover:bg-cream/75" />
        <h2 className="font-display text-[1.65rem] uppercase leading-[1] tracking-[0.14em] text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-[2rem] lg:text-[2.4rem]">
          {category.name}
        </h2>
      </div>
    </Link>
  );
}

export default function Gallery({
  standalone = true,
  sectionId,
  titleOverride,
  showTitle = true,
}: GalleryProps) {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];
  const resolvedSectionId = sectionId ?? (standalone ? "gallery" : undefined);

  return (
    <section
      id={resolvedSectionId}
      className={`relative overflow-hidden bg-ivory ${
        standalone ? "pt-24" : "pt-8"
      } ${resolvedSectionId ? "scroll-mt-40" : ""}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#ebe4d8] to-transparent" />

      <div className="relative px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Intro — above the grid, compact and centered */}
          {showTitle && (
            <div className="relative mb-12 pt-8 text-center">
              <p className="mb-4 text-[0.68rem] uppercase tracking-[0.34em] text-espresso/50">
                {t.gallery.eyebrow}
              </p>
              <h1 className="font-display text-5xl uppercase tracking-[0.12em] text-espresso sm:text-6xl">
                {titleOverride || t.gallery.title}
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-espresso/65">
                {t.gallery.description}
              </p>
              <p className="mt-8 text-[0.72rem] uppercase tracking-[0.28em] text-espresso/40">
                {t.gallery.chooseCollection}
              </p>
            </div>
          )}

          {/* Balanced 2-col grid: Headshots spans full left, Production + Portfolio stack right */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[1fr_1fr]" style={{ minHeight: "clamp(32rem, 55vw, 44rem)" }}>
            <GalleryCard
              category={categories[0]}
              className="min-h-[28rem] md:row-span-2 md:min-h-0"
            />
            <GalleryCard
              category={categories[1]}
              className="min-h-[18rem] md:min-h-0"
            />
            <GalleryCard
              category={categories[2]}
              className="min-h-[18rem] md:min-h-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
