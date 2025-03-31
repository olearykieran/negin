// src/components/Footer.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-[#2f2f2f] text-white py-6 text-center">
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Negin Poure. {t.footer.copyright}
      </p>
    </footer>
  );
}
