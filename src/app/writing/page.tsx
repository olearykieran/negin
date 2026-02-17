// src/app/writing/page.tsx
import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Writing from "@/components/Writing";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("writing", "/writing");

export default function WritingPage() {
  return (
    <LayoutWrapper>
      <Header />
      <Writing />
      <Footer />
    </LayoutWrapper>
  );
}
