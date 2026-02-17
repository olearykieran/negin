import React from "react";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("gallery", "/gallery");

export default function GalleryPage() {
  return (
    <LayoutWrapper>
      <Header />
      <Gallery />
      <Footer />
    </LayoutWrapper>
  );
}
