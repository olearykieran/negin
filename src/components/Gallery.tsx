"use client";

import React from "react";
import Link from "next/link";
import { categories, type GalleryCategory } from "@/lib/gallery-data";

interface GalleryProps {
  standalone?: boolean;
  sectionId?: string;
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
      aria-label={`View ${category.name}`}
      className={`group mx-auto flex w-full max-w-[46rem] flex-col items-center text-center ${className}`}
    >
      <div className="border border-white/32 bg-black/16 px-8 py-2 backdrop-blur-[1px] transition-colors duration-500 group-hover:border-white/48">
        <h1 className="font-display text-[1.75rem] uppercase leading-none tracking-display text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.66)] sm:text-[2rem]">
          {category.name}
        </h1>
      </div>

      <div
        className="relative mt-8 block h-[min(58vh,42rem)] max-h-[calc(100vh-17rem)] w-auto max-w-[82vw] overflow-hidden border border-white/18 bg-[#080706] p-2 shadow-[0_34px_120px_rgba(0,0,0,0.68)] transition-all duration-500 group-hover:border-white/36 group-hover:shadow-[0_42px_140px_rgba(0,0,0,0.76)]"
        style={{ aspectRatio: "1558 / 2000" }}
      >
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover brightness-[0.86] contrast-[1.04] saturate-[0.88] transition-all duration-700 ease-out group-hover:scale-[1.018] group-hover:brightness-[0.94]"
          style={{ objectPosition: category.position }}
        />
      </div>

      <div className="mt-6 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-white/66 transition-colors duration-500 group-hover:text-white">
        <span className="h-px w-10 bg-white/34 transition-all duration-500 group-hover:w-14 group-hover:bg-white/62" />
        <span>View Full Gallery</span>
        <span aria-hidden="true">-&gt;</span>
      </div>
    </Link>
  );
}

export default function Gallery({
  standalone = true,
  sectionId,
}: GalleryProps) {
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
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[48%_32%] blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.52)_40%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.62)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center justify-center px-6 py-12 sm:px-10">
        <div className="mx-auto w-full">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5">
            {visibleCategories.map((category) => (
              <GalleryCard
                key={category.slug}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
