// src/components/Footer.tsx
"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-cream text-espresso py-8 text-center border-t border-espresso/10">
      <p className="text-xs sm:text-sm text-espresso/70 uppercase tracking-[0.14em]">
        &copy; {new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", { useGrouping: false }).format(new Date().getFullYear())}{" "}
        {t.footer.brandName}. {t.footer.rights} {t.footer.websiteBy}{" "}
        <a
          href="https://theholygrailstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-espresso/70 hover:text-espresso transition-colors"
        >
          HGS
        </a>
      </p>
    </footer>
  );
}
