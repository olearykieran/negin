"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

export type LanguageType = "en" | "fa";

interface LanguageContextType {
  lang: LanguageType;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<LanguageType>("en");
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fa" : "en"));
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LanguageType;
    if (savedLang && (savedLang === "en" || savedLang === "fa")) {
      setLang(savedLang);
    }
    setHasLoadedPreference(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedPreference) return;
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [hasLoadedPreference, lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
