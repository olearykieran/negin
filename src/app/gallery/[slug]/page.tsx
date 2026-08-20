import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { categories } from "@/lib/gallery-data";
import GalleryCategoryView from "./GalleryCategoryView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Not Found" };
  return {
    title: `${category.name} | Negin Poure`,
  };
}

export default async function GalleryCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "portfolio") {
    permanentRedirect("/gallery");
  }

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <LayoutWrapper>
      <Header />
      <GalleryCategoryView category={category} />
      <Footer />
    </LayoutWrapper>
  );
}
