import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";
import MediaHero from "@/components/MediaHero";

export const metadata: Metadata = getPageMetadata("theatre", "/media/theatre");

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
      "Production stills from Stain (Theatre Play, 2025). Role: Melody. Writers: Negin Poure & Hera Gunes Barlowe. Director: Milagros Luis.",
  },
];

export default function TheatrePage() {
  return (
    <LayoutWrapper>
      <Header />

      <MediaHero
        title="THEATRE"
        subtitle="Stage performances, production stills, and theatre storytelling."
        videoSrc="/videos/theatre-hero.mp4"
        posterSrc="/images/stain.JPG"
        projectsAnchorId="theatre-projects"
      />

      <section id="theatre-projects" className="bg-white text-black scroll-mt-40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          {theatreProjects.map((project) => (
            <div key={project.title} className="mb-24 last:mb-0">
              <div className="text-center mb-10">
                <div className="border border-black px-8 py-2 inline-block">
                  <h2 className="text-3xl font-canela uppercase">{project.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="aspect-[4/5] overflow-hidden bg-gray-100"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 max-w-3xl mx-auto text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </LayoutWrapper>
  );
}
