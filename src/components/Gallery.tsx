"use client";

import React, { useState, useEffect, useContext } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

interface Photo {
  src: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  standalone?: boolean;
}

export default function Gallery({ standalone = true }: GalleryProps) {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = () => {
      setLoading(true);

      // Define all the image paths we want to include
      const imagePaths = [
        // Latest photoshoot
        "/images/neg-new.jpg",
        "/images/neg-new1.jpg",
        "/images/neg-new3.jpg",
        "/images/neg-new4.jpg",
        "/images/neg-new5.jpg",
        "/images/neg-new6.jpg",
        // new_b series
        "/images/new_b1.jpg",
        "/images/new_b2.jpg",
        "/images/new_b3.jpg",
        "/images/new_b4.jpg",
        "/images/new_b5.jpg",
        "/images/new_b6.jpg",
        "/images/new_b7.jpg",
        "/images/new_b8.jpg",
        // new_c series
        "/images/new_c1.jpg",
        "/images/new_c2.jpg",
        "/images/new_c3.jpg",
        "/images/new_c4.jpg",
        "/images/new_c5.jpg",
        "/images/new_c6.jpg",
        "/images/new_c7.jpg",
        "/images/new_c8.jpg",
        "/images/new_c9.jpg",
      ];

      // Create the photos array
      const loadedPhotos = imagePaths.map((path) => ({
        src: path,
        title: path.split("/").pop()?.replace(".jpg", ""),
      }));

      setPhotos(loadedPhotos);
      setLoading(false);
    };

    loadPhotos();
  }, []);

  return (
    <>
      <section
        className={`relative w-full min-h-[80vh] ${standalone ? "pt-40" : ""}`}
        style={{
          background: "linear-gradient(to bottom, #1a1a1a, #000000)",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="border border-white px-8 py-2 inline-block mb-8">
              <h1 className="text-3xl font-noto uppercase text-white">
                {t.gallery.title}
              </h1>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="aspect-square overflow-hidden cursor-pointer group"
                    onClick={() => setIndex(i)}
                  >
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-10"></div>
                      <img
                        src={photo.src}
                        alt={photo.title || "Gallery image"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Credits section */}
              <div className="mt-12 text-center text-white/70">
                <p className="text-sm mb-2">
                  Photography by{" "}
                  <a
                    href="https://instagram.com/coreyhayesphotos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300 underline"
                  >
                    @coreyhayesphotos
                  </a>
                </p>
                <p className="text-sm">
                  Additional photography by{" "}
                  <a
                    href="https://www.instagram.com/bianca.victoria.ny?igsh=aXM2eXA2eHQ4aXZo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300 underline"
                  >
                    @bianca.victoria.ny
                  </a>
                </p>
              </div>

              {/* Collage section */}
              <div className="mt-16">
                <div className="grid grid-cols-4 gap-0">
                  {/* First row */}
                  <div className="aspect-square">
                    <img src="/images/1.JPG" alt="Collage 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/2.JPG" alt="Collage 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/3.jpg" alt="Collage 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/4.jpg" alt="Collage 4" className="w-full h-full object-cover" />
                  </div>
                  {/* Second row */}
                  <div className="aspect-square">
                    <img src="/images/5.jpg" alt="Collage 5" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/6.jpg" alt="Collage 6" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/7.jpg" alt="Collage 7" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square">
                    <img src="/images/8.jpg" alt="Collage 8" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        plugins={[Thumbnails, Zoom, Captions, Slideshow]}
        carousel={{
          finite: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          gap: 16,
          border: 0,
          borderRadius: 4,
          padding: 4,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
        }}
        slideshow={{
          autoplay: false,
          delay: 3000,
        }}
        animation={{
          swipe: 250,
        }}
        render={{
          iconPrev: () => <button className="text-white text-2xl">←</button>,
          iconNext: () => <button className="text-white text-2xl">→</button>,
          iconClose: () => <button className="text-white text-2xl">×</button>,
        }}
      />
    </>
  );
}
