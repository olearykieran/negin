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
  sectionId?: string;
  titleOverride?: string;
  showTitle?: boolean;
  showCredits?: boolean;
  showCollage?: boolean;
}

export default function Gallery({
  standalone = true,
  sectionId,
  titleOverride,
  showTitle = true,
  showCredits = true,
  showCollage = true,
}: GalleryProps) {
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
        // Work page images moved into gallery
        "/images/flighty.jpeg",
        "/images/stain.JPG",
        // New photos
        "/images/new-photos/IMG_8252.JPG",
        "/images/new-photos/IMG_8255.JPG",
        "/images/new-photos/IMG_8258.JPG",
        "/images/new-photos/IMG_8259.JPG",
        // Latest photoshoot
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

  const resolvedSectionId = sectionId ?? (standalone ? "gallery" : undefined);

  return (
    <>
      <section
        id={resolvedSectionId}
        className={`relative w-full min-h-[80vh] bg-ivory ${standalone ? "pt-40" : ""} ${
          resolvedSectionId ? "scroll-mt-40" : ""
        }`}
      >
        <div className="w-full px-6 py-16">
          {showTitle && (
            <div className="text-center mb-12">
              <div className="border border-espresso/30 px-8 py-2 inline-block mb-8">
                <h1 className="text-3xl font-display uppercase tracking-display text-espresso">
                  {titleOverride || t.gallery.title}
                </h1>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-espresso/60"></div>
            </div>
          ) : (
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo, i) => {
                  const emphasizeFilmFrame = i < 4;
                  return (
                    <div
                      key={photo.src}
                      className="aspect-square overflow-hidden cursor-pointer group bg-cream/70"
                      onClick={() => setIndex(i)}
                    >
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 z-10 bg-espresso/0 transition-all duration-300 group-hover:bg-espresso/15"></div>
                        <img
                          src={photo.src}
                          alt={photo.title || "Gallery image"}
                          className={`h-full w-full origin-center object-cover transition-transform duration-500 ${
                            emphasizeFilmFrame
                              ? "scale-[1.18] group-hover:scale-[1.28]"
                              : "group-hover:scale-105"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Credits section */}
              {showCredits && (
                <div className="mt-12 text-center text-espresso/70">
                  <p className="text-sm md:text-base">
                    Photography by{" "}
                    <a
                      href="https://instagram.com/coreyhayesphotos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-espresso transition-colors duration-300 underline"
                    >
                      @coreyhayesphotos
                    </a>
                    {" "}
                    <a
                      href="https://instagram.com/jon.forero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-espresso transition-colors duration-300 underline"
                    >
                      @jon.forero
                    </a>
                    {" "}
                    <a
                      href="https://instagram.com/spencerheaphy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-espresso transition-colors duration-300 underline"
                    >
                      @spencerheaphy
                    </a>
                  </p>
                </div>
              )}

              {/* Collage section */}
              {showCollage && (
                <div className="mt-16">
                  <div className="grid grid-cols-5 gap-0">
                    {/* First row */}
                    <div className="aspect-square overflow-hidden">
                      <img src="/images/1.JPG" alt="Collage 1" className="w-full h-full object-cover" style={{ transform: 'scale(1.5)' }} />
                    </div>
                    <div className="aspect-square overflow-hidden">
                      <img src="/images/2.JPG" alt="Collage 2" className="w-full h-full object-cover" style={{ transform: 'scale(1.5)' }} />
                    </div>
                    <div className="aspect-square overflow-hidden">
                      <img src="/images/new-photos/IMG_9822.JPG" alt="New photo" className="w-full h-full object-cover" style={{ transform: 'scale(1.5)' }} />
                    </div>
                    <div className="aspect-square overflow-hidden">
                      <img src="/images/new-photos/IMG_9819.JPG" alt="New photo" className="w-full h-full object-cover" style={{ transform: 'scale(1.5)' }} />
                    </div>
                    <div className="aspect-square">
                      <img src="/images/5.jpg" alt="Collage 5" className="w-full h-full object-cover" />
                    </div>
                    {/* Second row */}
                    <div className="aspect-square">
                      <img src="/images/6.jpg" alt="Collage 6" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square">
                      <img src="/images/7.jpg" alt="Collage 7" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square">
                      <img src="/images/3.jpg" alt="Collage 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square">
                      <img src="/images/new-photos/IMG_9824.jpg" alt="New photo" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square">
                      <img src="/images/new-photos/IMG_9825.JPG" alt="New photo" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              )}
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
          iconPrev: () => <button className="text-cream text-2xl">←</button>,
          iconNext: () => <button className="text-cream text-2xl">→</button>,
          iconClose: () => <button className="text-cream text-2xl">×</button>,
        }}
      />
    </>
  );
}
