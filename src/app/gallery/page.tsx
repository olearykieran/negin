"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function GalleryPage() {
  return (
    <LayoutWrapper>
      <Header />
      <Gallery />
      <Footer />
    </LayoutWrapper>
  );
}
