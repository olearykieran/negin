import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("work", "/work");

export default function WorkPage() {
  return (
    <LayoutWrapper>
      <Header />

      <section id="reels" className="bg-ivory text-espresso scroll-mt-40 pt-40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <div className="border border-espresso/30 px-8 py-2 inline-block">
              <h2 className="text-3xl font-display uppercase tracking-display">Reels</h2>
            </div>
            <p className="mt-6 text-sm sm:text-base text-espresso/70 max-w-2xl mx-auto leading-relaxed">
              Watch selected reel content directly on-site.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video overflow-hidden border border-espresso/20 bg-charcoal">
              <iframe
                src="https://www.youtube.com/embed/sRhfWuLBEL4"
                title="Negin Poure Reel"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-xs sm:text-sm text-espresso/70">
              <a
                href="https://youtube.com/watch?v=sRhfWuLBEL4&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-espresso transition"
              >
                Open on YouTube
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </LayoutWrapper>
  );
}
