"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";
import { externalProfiles } from "@/lib/metadata";

export default function ForCasting() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].forCasting;

  return (
    <>
      <section className="relative min-h-screen bg-ivory text-espresso pt-44 pb-20 px-6">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/new_c3.jpg"
            alt={t.portraitAlt}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-ivory/90" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-espresso/70">{t.eyebrow}</p>
          <h1 className="mt-5 font-display uppercase tracking-display leading-[0.95] text-[clamp(2.5rem,7vw,5.8rem)]">
            {t.titleLineOne}
            <br />
            {t.titleLineTwo}
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-espresso/70 leading-relaxed">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={externalProfiles.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-espresso text-cream text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso/90 transition"
            >
              {t.viewImdb}
            </a>
            <a
              href={externalProfiles.mmg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-espresso text-espresso text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso hover:text-cream transition"
            >
              {t.viewMmg}
            </a>
            <a
              href="/NEGIN POURE-3.pdf"
              download="NEGIN POURE-3.pdf"
              className="px-5 py-3 border border-espresso text-espresso text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-espresso hover:text-cream transition"
            >
              {t.downloadResume}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            {t.stats.map((stat) => (
              <div key={stat.label} className="border border-espresso/20 bg-cream/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-espresso/70">{stat.label}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-espresso">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory text-espresso py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-espresso/70">{t.pressEyebrow}</p>
            <h2 className="mt-4 font-display uppercase tracking-display text-4xl">{t.coverageTitle}</h2>
            <div className="mt-6 space-y-4">
              <a
                href="https://canvasrebel.com/meet-negin-poure/?fbclid=PAZXh0bgNhZW0CMTEAAaboJjuVS8l46cg9mjmiPDEyBEZhoNBB3cgSvmT"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-espresso px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-espresso hover:text-cream transition"
              >
                {t.canvasRebel}
              </a>
              <a
                href="https://boldjourney.com/meet-negin-poure/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-espresso px-5 py-4 text-sm uppercase tracking-[0.14em] hover:bg-espresso hover:text-cream transition"
              >
                {t.boldJourney}
              </a>
            </div>
          </div>

          <div id="casting-faq">
            <p className="text-xs uppercase tracking-[0.28em] text-espresso/70">{t.faqEyebrow}</p>
            <h2 className="mt-4 font-display uppercase tracking-display text-4xl">{t.faqTitle}</h2>
            <div className="mt-6 space-y-5">
              {t.faqItems.map((item) => (
                <article key={item.question} className="border-b border-espresso/20 pb-4">
                  <h3 className="text-base sm:text-lg uppercase tracking-[0.09em]">{item.question}</h3>
                  <p className="mt-2 text-sm sm:text-base text-espresso/70 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
