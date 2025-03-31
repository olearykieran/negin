"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

type LanguageType = "en" | "fa";

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

  // Helper to switch between English and Farsi
  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fa" : "en"));
  };

  // You could add localStorage persistence here if needed
  useEffect(() => {
    // Example: Load from localStorage
    const savedLang = localStorage.getItem("language") as LanguageType;
    if (savedLang && (savedLang === "en" || savedLang === "fa")) {
      setLang(savedLang);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
