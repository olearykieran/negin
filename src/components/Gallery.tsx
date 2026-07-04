"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { categories, type GalleryCategory } from "@/lib/gallery-data";

interface GalleryProps {
  standalone?: boolean;
  sectionId?: string;
}

const smallcaps = { fontFamily: '"Cartesius Smallcaps", serif' };

function GalleryTriptych({
  category,
  loaded,
}: {
  category: GalleryCategory;
  loaded: boolean;
}) {
  const plates = category.plates ?? [{ src: category.image, position: category.position }];
  const [left, center, right] = plates.length === 3 ? plates : [null, plates[0], null];

  const plateFrame =
    "overflow-hidden bg-black/40 shadow-[0_30px_90px_rgba(0,0,0,0.62)] transition-all duration-700 ease-out";
  const plateImg =
    "h-full w-full object-cover brightness-[0.97] contrast-[1.02] transition-transform duration-700 ease-out";

  const rise = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(26px)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <Link
      href={`/gallery/${category.slug}`}
      aria-label={`View the full ${category.name.toLowerCase()}`}
      className="group flex w-full flex-col items-center text-center"
    >
      <p
        className="text-[10px] tracking-[0.3em] text-cream/70 transition-all duration-1000 ease-out sm:text-[11px]"
        style={{ ...smallcaps, ...rise(150) }}
      >
        SELECTED IMAGERY
      </p>
      <h1
        className="mt-3 font-display uppercase leading-none tracking-display text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] transition-all duration-1000 ease-out"
        style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", ...rise(300) }}
      >
        {category.name}
      </h1>

      <div className="mt-8 flex items-center justify-center sm:mt-9">
        {left && (
          <div
            className="relative z-[1] hidden translate-y-7 transition-all duration-1000 ease-out sm:block"
            style={rise(650)}
          >
            <div
              className={`${plateFrame} h-[clamp(15rem,30vh,22rem)] group-hover:-translate-y-1`}
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={left.src}
                alt=""
                aria-hidden="true"
                className={plateImg}
                style={{ objectPosition: left.position || "center center" }}
              />
            </div>
          </div>
        )}

        <div
          className="relative z-[2] transition-all duration-1000 ease-out sm:-mx-6"
          style={rise(500)}
        >
          <div
            className={`${plateFrame} h-[min(48vh,32rem)] max-h-[calc(100vh-23rem)] min-h-[19rem] group-hover:-translate-y-1.5 group-hover:shadow-[0_38px_110px_rgba(0,0,0,0.72)]`}
            style={{ aspectRatio: "2 / 3" }}
          >
            <img
              src={center.src}
              alt={category.name}
              className={`${plateImg} group-hover:scale-[1.02]`}
              style={{ objectPosition: center.position || "center center" }}
            />
          </div>
        </div>

        {right && (
          <div
            className="relative z-[1] hidden translate-y-14 transition-all duration-1000 ease-out sm:block"
            style={rise(800)}
          >
            <div
              className={`${plateFrame} h-[clamp(15rem,30vh,22rem)] group-hover:-translate-y-1`}
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={right.src}
                alt=""
                aria-hidden="true"
                className={plateImg}
                style={{ objectPosition: right.position || "center center" }}
              />
            </div>
          </div>
        )}
      </div>

      <div
        className="mt-8 flex items-center gap-3 text-[10px] tracking-[0.28em] text-cream/75 transition-all duration-1000 ease-out group-hover:text-cream sm:mt-9 sm:text-[11px]"
        style={{ ...smallcaps, ...rise(950) }}
      >
        <span className="h-px w-10 bg-cream/40 transition-all duration-500 group-hover:w-14 group-hover:bg-cream/70" />
        <span>
          VIEW THE FULL PORTFOLIO · {category.photos.length} PHOTOGRAPHS
        </span>
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
  const portfolio = categories.find((category) => category.slug === "portfolio");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!portfolio) return null;

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
        className="absolute inset-0 h-full w-full object-cover object-[42%_28%]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_62%_at_50%_54%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center justify-center px-6 py-10 sm:px-10">
        <GalleryTriptych category={portfolio} loaded={loaded} />
      </div>
    </section>
  );
}
