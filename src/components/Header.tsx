// src/components/Header.tsx
"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/solid";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";

export default function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hasBlackBg, setHasBlackBg] = useState(false);
  const pathname = usePathname();

  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHeaderState = () => {
      if (pathname !== "/") {
        setHasBlackBg(true);
        return;
      }
      const threshold = window.innerHeight * 0.85;
      setHasBlackBg(window.scrollY > threshold);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState);
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        hasBlackBg ? "bg-black/55 backdrop-blur-md border-b border-cream/15" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-10 px-6 relative">
        <div className="flex items-center space-x-4 z-10">
          <a
            href="https://instagram.com/neginpoure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/85 hover:text-cream transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        <div className="md:hidden absolute w-full left-0 top-1/2 -translate-y-1/2 text-center pointer-events-none">
          <span className="font-display text-cream text-xl tracking-display inline-block">
            NP
          </span>
        </div>

        <ul className="hidden md:flex items-center space-x-8 font-display text-cream/90 uppercase tracking-[0.16em] text-[11px]">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-cream transition">
              {t.menu.home || "Home"}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:text-cream transition">
              {t.menu.about || "About"}
            </button>
          </li>
          <li>
            <Link href="/work" className="hover:text-cream transition">
              {t.menu.media || "Media"}
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-cream transition">
              {t.menu.gallery || "Gallery"}
            </Link>
          </li>
          <li>
            <Link href="/press" className="hover:text-cream transition">
              {t.menu.press || "Press"}
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:text-cream transition">
              {t.menu.writing || "Writing"}
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-cream transition">
              {t.menu.contact || "Contact"}
            </button>
          </li>
          <li>
            <Link href="/for-casting" className="hover:text-cream transition">
              {t.menu.casting || "For Casting"}
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 z-10">
          <div
            className="hidden md:flex items-center space-x-1 text-cream/85 hover:text-cream cursor-pointer transition"
            onClick={toggleLang}
          >
            <span className="text-[11px] tracking-[0.16em] uppercase">{t.languageLabel}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <button
            className="md:hidden text-cream/85 hover:text-cream focus:outline-none transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm border-t border-cream/20">
          <ul className="flex flex-col items-start p-6 space-y-4 font-display uppercase tracking-[0.16em] text-[11px] text-cream/90">
            <div
              className="flex items-center space-x-1 text-cream/85 hover:text-cream cursor-pointer mb-2"
              onClick={toggleLang}
            >
              <span className="text-[11px] tracking-[0.16em] uppercase">{t.languageLabel}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            <li>
              <button
                onClick={() => {
                  scrollToSection("home");
                  setIsOpen(false);
                }}
                className="hover:text-cream transition"
              >
                {t.menu.home || "Home"}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
                className="hover:text-cream transition"
              >
                {t.menu.about || "About"}
              </button>
            </li>
            <li>
              <Link href="/work" className="hover:text-cream transition" onClick={() => setIsOpen(false)}>
                {t.menu.media || "Media"}
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-cream transition" onClick={() => setIsOpen(false)}>
                {t.menu.gallery || "Gallery"}
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-cream transition" onClick={() => setIsOpen(false)}>
                {t.menu.press || "Press"}
              </Link>
            </li>
            <li>
              <Link href="/writing" className="hover:text-cream transition" onClick={() => setIsOpen(false)}>
                {t.menu.writing || "Writing"}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="hover:text-cream transition"
              >
                {t.menu.contact || "Contact"}
              </button>
            </li>
            <li>
              <Link
                href="/for-casting"
                className="hover:text-cream transition"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.casting || "For Casting"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
