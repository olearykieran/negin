"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  // State to track whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full  z-50 bg-[rgb(220,220,220)] shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-12 px-6">
        {/* Left: Social icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(143,143,143)] hover:text-black"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(143,143,143)] hover:text-black"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(143,143,143)] hover:text-black"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Center Nav (Desktop Only) */}
        <ul className="hidden md:flex items-center space-x-8 font-noto font-semibold text-black">
          <li>
            <Link href="#home" scroll={false} className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="#biography" scroll={false} className="hover:text-black">
              Biography
            </Link>
          </li>
          <li>
            <Link href="#filmography" scroll={false} className="hover:text-black">
              Filmography
            </Link>
          </li>
          <li>
            <Link href="#gallery" scroll={false} className="hover:text-black">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#press" scroll={false} className="hover:text-black">
              Press
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false} className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Language Toggle (Desktop) or Hamburger (Mobile) */}
        <div className="flex items-center space-x-4">
          {/* Language toggle only shown on md+ screens (optional) */}
          <div className="hidden md:flex items-center space-x-1 text-[rgb(143,143,143)] hover:text-black cursor-pointer">
            <span>EN</span>
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
            {/* Optional: Put the language toggle here for mobile */}
            <div className="flex items-center space-x-1 text-[rgb(143,143,143)] hover:text-black cursor-pointer mb-2">
              <span>EN</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            <li>
              <Link
                href="#home"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#biography"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Biography
              </Link>
            </li>
            <li>
              <Link
                href="#filmography"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Filmography
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#press"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Press
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                scroll={false}
                className="hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
