// src/app/press/page.tsx
import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Press from "@/components/Press";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("press", "/press");

export default function PressPage() {
  return (
    <LayoutWrapper>
      <Header />
      <Press />
      <Footer />
    </LayoutWrapper>
  );
}
