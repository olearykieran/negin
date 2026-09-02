import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import FeaturedHeadshot from "@/components/FeaturedHeadshot";
import { categories } from "@/lib/gallery-data";
import { getPageMetadata } from "@/lib/metadata";
import GalleryCategoryView from "./[slug]/GalleryCategoryView";

export const metadata: Metadata = getPageMetadata("gallery", "/gallery");

export default function GalleryPage() {
  const portfolio = categories.find((category) => category.slug === "portfolio");

  if (!portfolio) return null;

  return (
    <LayoutWrapper>
      <Header />
      <FeaturedHeadshot />
      <GalleryCategoryView category={portfolio} />
      <Footer />
    </LayoutWrapper>
  );
}
