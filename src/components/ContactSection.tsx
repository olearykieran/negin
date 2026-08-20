"use client";

import React, { useState, useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import translations from "@/lib/translations";
import { externalProfiles } from "@/lib/metadata";

export default function ContactSection() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang as keyof typeof translations];

  // Track form fields in state
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send POST request to /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: senderEmail,
          message,
          lang,
        }),
      });

      if (!res.ok) {
        throw new Error("contact-request-failed");
      }

      // If successful
      setStatus("success");
      setName("");
      setSenderEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative text-cream pt-20 pb-8 px-6 sm:px-12 md:px-20 text-center min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-[42%_28%]"
        />
      </div>
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.66)_50%,rgba(0,0,0,0.82)_100%)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        <div className="border border-cream/40 inline-block px-8 py-2 mb-10">
          <h2 className="text-3xl uppercase font-display tracking-display">{t.contact.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <input
              type="text"
              placeholder={t.contact.placeholderName}
              aria-label={t.contact.placeholderName}
              className="w-full bg-white/10 border border-cream/30 p-3 text-cream placeholder-cream/50 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t.contact.placeholderEmail}
              aria-label={t.contact.placeholderEmail}
              className="w-full bg-white/10 border border-cream/30 p-3 text-cream placeholder-cream/50 focus:outline-none"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              placeholder={t.contact.placeholderMessage}
              aria-label={t.contact.placeholderMessage}
              className="w-full bg-white/10 border border-cream/30 p-3 text-cream placeholder-cream/50 h-48 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 border border-cream text-cream hover:bg-cream hover:text-cream transition font-display tracking-[0.14em] uppercase text-xs"
          >
            {status === "loading" ? t.contact.sending : t.contact.sendButton}
          </button>
        </form>

        {/* Display success or error message */}
        {status === "success" && (
          <p className="mt-4 text-cream/80">{t.contact.successMessage}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-cream/80">
            {t.contact.errorMessage} {t.contact.failureMessage}
          </p>
        )}
        {/* Alternative contact option */}
        <div className="mt-8 text-cream/70 text-sm">
        <p>
          {t.contact.directEmail}{" "}
          <a
            href="mailto:neginzpoure@gmail.com"
            className="underline hover:text-cream transition"
          >
            neginzpoure@gmail.com
          </a>
        </p>
      </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto pt-12">
        <p className="text-xs sm:text-sm text-cream/50 uppercase tracking-[0.14em]">
          &copy; {new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", { useGrouping: false }).format(new Date().getFullYear())}{" "}
          {t.footer.brandName}. {t.footer.rights} {t.footer.websiteBy}{" "}
          <a
            href="https://theholygrailstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-cream transition-colors"
          >
            HGS
          </a>
        </p>
      </div>
    </section>
  );
}
