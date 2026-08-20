import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkShowreel from "@/components/WorkShowreel";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("work", "/work");

export default function WorkPage() {
  return (
    <LayoutWrapper>
      <Header />

      <WorkShowreel />

      <Footer />
    </LayoutWrapper>
  );
}
