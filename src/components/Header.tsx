// src/components/Header.tsx
"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/solid";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";

export default function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const t = translations[lang as keyof typeof translations]; // shorthand

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're already on the homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgb(220,220,220)] shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-16 px-6 relative">
        {/* Left: Social icons */}
        <div className="flex items-center space-x-4 z-10">
          <a
            href="https://instagram.com/neginpoure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(143,143,143)] hover:text-black"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Center: NP Logo (Mobile Only) - Using fixed width and text-center */}
        <div className="md:hidden absolute w-full left-0 top-1/2 -translate-y-1/2 text-center pointer-events-none">
          <span className="font-satoshi text-[rgb(143,143,143)] text-2xl font-bold inline-block">
            NP
          </span>
        </div>

        {/* Center Nav (Desktop Only) */}
        <ul className="hidden md:flex items-center space-x-8 font-noto font-semibold text-black">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-black">
              {t.menu.home}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("biography")}
              className="hover:text-black"
            >
              {t.menu.biography}
            </button>
          </li>
          <li>
            <Link href="/filmography" className="hover:text-black">
              {t.menu.filmography}
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-black">
              {t.menu.gallery}
            </Link>
          </li>
          <li>
            <Link href="/press" className="hover:text-black">
              {t.menu.press}
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:text-black">
              {t.menu.writing || "Writing"}
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-black"
            >
              {t.menu.contact}
            </button>
          </li>
        </ul>

        {/* Right Side: Language Toggle (Desktop) or Hamburger (Mobile) */}
        <div className="flex items-center space-x-4 z-10">
          {/* Language toggle on md+ screens */}
          <div
            className="hidden md:flex items-center space-x-1 text-[rgb(143,143,143)] hover:text-black cursor-pointer"
            onClick={toggleLang}
          >
            <span>{t.languageLabel}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          {/* Mobile hamburger / close button */}
          <button
            className="md:hidden text-[rgb(143,143,143)] hover:text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (if open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <ul className="flex flex-col items-start p-4 space-y-4 font-noto font-semibold text-[rgb(143,143,143)]">
            {/* Language toggle for mobile */}
            <div
              className="flex items-center space-x-1 text-[rgb(143,143,143)] hover:text-black cursor-pointer mb-2"
              onClick={toggleLang}
            >
              <span>{t.languageLabel}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            <li>
              <button
                onClick={() => {
                  scrollToSection("home");
                  setIsOpen(false);
                }}
                className="hover:text-black"
              >
                {t.menu.home}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("biography");
                  setIsOpen(false);
                }}
                className="hover:text-black"
              >
                {t.menu.biography}
              </button>
            </li>
            <li>
              <Link
                href="/filmography"
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.filmography}
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.gallery}
              </Link>
            </li>
            <li>
              <Link
                href="/press"
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.press}
              </Link>
            </li>
            <li>
              <Link
                href="/writing"
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.writing || "Writing"}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="hover:text-black"
              >
                {t.menu.contact}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
