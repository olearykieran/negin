// src/components/Header.tsx
"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/solid";
import translations from "@/lib/translations";
import { LanguageContext } from "@/context/LanguageContext";

export default function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isMediaMobileOpen, setIsMediaMobileOpen] = useState(false);
  const mediaMenuRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();

  const t = translations[lang as keyof typeof translations]; // shorthand

  useEffect(() => {
    setIsMediaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) setIsMediaMobileOpen(false);
  }, [isOpen]);

  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      if (!isMediaOpen) return;
      if (!mediaMenuRef.current) return;
      const targetNode = event.target as Node | null;
      if (!targetNode) return;
      if (!mediaMenuRef.current.contains(targetNode)) {
        setIsMediaOpen(false);
      }
    };

    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMediaOpen(false);
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [isMediaOpen]);

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
          <span className="font-canela text-[rgb(143,143,143)] text-2xl font-bold inline-block">
            NP
          </span>
        </div>

        {/* Center Nav (Desktop Only) */}
        <ul className="hidden md:flex items-center space-x-8 font-canela font-semibold text-black">
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
          <li ref={mediaMenuRef} className="relative">
            <button
              type="button"
              className="hover:text-black flex items-center space-x-1"
              aria-haspopup="menu"
              aria-expanded={isMediaOpen}
              onClick={() => setIsMediaOpen((prev) => !prev)}
            >
              <span>{t.menu.filmography}</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${isMediaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMediaOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-4 w-44 bg-white border border-gray-200 shadow-lg z-50"
                role="menu"
              >
                <Link
                  href="/media/film"
                  className="block px-4 py-3 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setIsMediaOpen(false)}
                >
                  {t.menu.film || "Film"}
                </Link>
                <Link
                  href="/media/theatre"
                  className="block px-4 py-3 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setIsMediaOpen(false)}
                >
                  {t.menu.theatre || "Theatre"}
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/for-casting" className="hover:text-black">
              {t.menu.casting || "For Casting"}
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
          <ul className="flex flex-col items-start p-4 space-y-4 font-canela font-semibold text-[rgb(143,143,143)]">
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
              <button
                type="button"
                className="hover:text-black flex items-center space-x-1"
                aria-expanded={isMediaMobileOpen}
                onClick={() => setIsMediaMobileOpen((prev) => !prev)}
              >
                <span>{t.menu.filmography}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${isMediaMobileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMediaMobileOpen && (
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    href="/media/film"
                    className="hover:text-black"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMediaMobileOpen(false);
                    }}
                  >
                    {t.menu.film || "Film"}
                  </Link>
                  <Link
                    href="/media/theatre"
                    className="hover:text-black"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMediaMobileOpen(false);
                    }}
                  >
                    {t.menu.theatre || "Theatre"}
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/for-casting"
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {t.menu.casting || "For Casting"}
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
