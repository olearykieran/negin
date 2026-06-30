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
      className={`group relative mx-auto flex w-full max-w-[42rem] items-center justify-between overflow-hidden border border-white/18 bg-black/28 px-7 py-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-[2px] transition-all duration-500 hover:border-white/34 hover:bg-black/36 hover:shadow-[0_30px_95px_rgba(0,0,0,0.42)] sm:px-9 sm:py-7 ${className}`}
    >
      <div>
        <div className="mb-4 h-px w-14 bg-cream/50 transition-all duration-500 group-hover:w-24 group-hover:bg-cream/75" />
        <h2 className="font-display text-[1.55rem] uppercase leading-[1] tracking-[0.18em] text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-[2rem]">
          {category.name}
        </h2>
      </div>
      <span className="ml-6 text-[0.64rem] uppercase tracking-[0.24em] text-white/58 transition-colors duration-500 group-hover:text-white/82">
        View
      </span>
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
  const visibleCategories = categories.filter((category) => category.slug === "portfolio");

  return (
    <section
      id={resolvedSectionId}
      className={`relative min-h-screen overflow-hidden bg-black text-white ${
        standalone ? "pt-24" : "pt-8"
      } ${resolvedSectionId ? "scroll-mt-40" : ""}`}
    >
      <img
        src="/images/gallery-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[38%_30%]"
      />
      <div className="absolute inset-0 bg-black/66" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.54)_34%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.16)_52%,rgba(0,0,0,0.54)_100%)]" />

      <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Intro — above the grid, compact and centered */}
          {showTitle && (
            <div className="relative mb-12 pt-8 text-center">
              <p className="mb-4 text-[0.68rem] uppercase tracking-[0.34em] text-white/55">
                {t.gallery.eyebrow}
              </p>
              <h1 className="font-display text-5xl uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:text-6xl">
                {titleOverride || t.gallery.title}
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/76">
                A curated portfolio of selected frames.
              </p>
            </div>
          )}

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 pb-16">
            {visibleCategories.map((category) => (
              <GalleryCard
                key={category.slug}
                category={category}
                className="min-h-[7.5rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
