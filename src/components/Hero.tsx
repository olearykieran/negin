// src/components/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { externalProfiles } from "@/lib/metadata";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay so the page settles before animation starts
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const nameWords = ["Negin", "Poure"];
  const subtitleText = "NEW YORK BASED · FILM & THEATRE";
  const links = [
    { label: "IMDb", href: externalProfiles.imdb, external: true },
    { label: "MMG", href: externalProfiles.mmg, external: true },
    { label: "Resume", href: "/NEGIN POURE-3.pdf", download: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-125"
      >
        <source src="/video/hero-bg.webm" type="video/webm" />
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

      <div className="relative z-10 h-full w-full px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-14 flex items-end">
        <div className="ml-auto text-right">
          {/* Name - word by word fade in */}
          <h1
            className="text-cream/95 leading-none tracking-tight"
            style={{
              fontFamily: '"Signatie", cursive',
              fontSize: "clamp(2rem, 7vw, 6.5rem)",
            }}
          >
            {nameWords.map((word, i) => (
              <span
                key={word}
                className="inline-block transition-all duration-1000 ease-out"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 400 + 200}ms`,
                }}
              >
                {word}{i < nameWords.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          {/* Subtitle - fades in after name */}
          <p
            className="mt-3 text-cream/80 text-[10px] sm:text-[11px] tracking-[0.22em] transition-all duration-1000 ease-out"
            style={{
              fontFamily: '"Cartesius Smallcaps", serif',
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(12px)",
              transitionDelay: "1100ms",
            }}
          >
            {subtitleText}
          </p>

          {/* Links - stagger in one by one */}
          <div
            className="mt-5 flex flex-wrap justify-end gap-6 text-[10px] sm:text-[11px] tracking-[0.2em] text-cream/85"
            style={{ fontFamily: '"Cartesius Smallcaps", serif' }}
          >
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(link.download ? { download: "NEGIN POURE-3.pdf" } : {})}
                className="hover:text-cream transition-colors duration-300"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease, color 0.3s ease",
                  transitionDelay: `${1400 + i * 200}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
