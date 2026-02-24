import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import MediaHero from "@/components/MediaHero";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("work", "/work");

const filmProjects = [
  {
    title: "Flighty",
    photos: [
      {
        src: "/images/flighty.jpeg",
        alt: "Flighty - promotional still",
      },
    ],
    description:
      "Promotional stills from Flighty (Short Film, 2025). Role: Sasha.",
  },
];

const theatreProjects = [
  {
    title: "Stain",
    photos: [
      {
        src: "/images/stain.JPG",
        alt: "Stain - production still",
      },
    ],
    description:
      "Production stills from Stain (Theatre Play, 2025). Role: Melody.",
  },
];

export default function WorkPage() {
  return (
    <LayoutWrapper>
      <Header />

      <MediaHero
        title="MEDIA"
        subtitle="Film and theatre credits. All photography lives in the Gallery."
        imageSrc="/images/new_c3.jpg"
        projectsAnchorId="film"
      />

      <section id="film" className="bg-ivory text-espresso scroll-mt-40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <div className="border border-espresso/30 px-8 py-2 inline-block">
              <h2 className="text-3xl font-display uppercase tracking-display">Film</h2>
            </div>
            <p className="mt-6 text-sm sm:text-base text-espresso/70 max-w-2xl mx-auto leading-relaxed">
              Screen work and cinematic stills selected for casting review.
            </p>
          </div>

          {filmProjects.map((project) => (
            <div key={project.title} className="mb-16 last:mb-0 text-center">
              <h3 className="text-2xl font-display uppercase tracking-[0.18em]">
                {project.title}
              </h3>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.photos.map((photo) => (
                  <div key={photo.src} className="aspect-[4/5] overflow-hidden bg-cream/70">
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm sm:text-base text-espresso/70 leading-relaxed max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="theatre" className="bg-cream text-espresso scroll-mt-40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <div className="border border-espresso/30 px-8 py-2 inline-block">
              <h2 className="text-3xl font-display uppercase tracking-display">Theatre</h2>
            </div>
            <p className="mt-6 text-sm sm:text-base text-espresso/70 max-w-2xl mx-auto leading-relaxed">
              Stage performances and production stills.
            </p>
          </div>

          {theatreProjects.map((project) => (
            <div key={project.title} className="mb-16 last:mb-0 text-center">
              <h3 className="text-2xl font-display uppercase tracking-[0.18em]">
                {project.title}
              </h3>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.photos.map((photo) => (
                  <div key={photo.src} className="aspect-[4/5] overflow-hidden bg-ivory/70">
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm sm:text-base text-espresso/70 leading-relaxed max-w-2xl mx-auto">
                {project.description}
              </p>
              <Link
                href="/gallery"
                className="mt-7 inline-block border border-espresso/40 px-4 py-2 text-xs uppercase tracking-[0.16em] hover:bg-espresso hover:text-cream transition"
              >
                View All Photos in Gallery
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </LayoutWrapper>
  );
}
