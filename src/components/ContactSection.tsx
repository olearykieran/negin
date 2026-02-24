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
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Send POST request to /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: senderEmail,
          message,
        }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Something went wrong.");
      }

      // If successful
      setStatus("success");
      setName("");
      setSenderEmail("");
      setMessage("");
    } catch (error: any) {
      setStatus("error");
      setErrorMsg(error.message);
    }
  };

  return (
    <section id="contact" className="bg-cream text-espresso py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="border border-espresso/40 inline-block px-8 py-2 mb-10">
          <h2 className="text-3xl uppercase font-display tracking-display">{t.contact.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder={t.contact.placeholderName}
              className="w-full bg-ivory/60 border border-espresso/30 p-3 text-espresso placeholder-espresso/50 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t.contact.placeholderEmail}
              className="w-full bg-ivory/60 border border-espresso/30 p-3 text-espresso placeholder-espresso/50 focus:outline-none"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              placeholder={t.contact.placeholderMessage}
              className="w-full bg-ivory/60 border border-espresso/30 p-3 text-espresso placeholder-espresso/50 h-36 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition font-display tracking-[0.14em] uppercase text-xs"
          >
            {status === "loading" ? "Sending..." : t.contact.sendButton}
          </button>
        </form>

        {/* Display success or error message */}
        {status === "success" && (
          <p className="mt-4 text-espresso/80">{t.contact.successMessage}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-espresso/80">
            {t.contact.errorMessage} {errorMsg}
          </p>
        )}
      </div>
      {/* Alternative contact option */}
      <div className="mt-8 text-espresso/70 text-sm">
        <p>
          {t.contact.directEmail}{" "}
          <a
            href="mailto:neginzpoure@gmail.com"
            className="underline hover:text-espresso transition"
          >
            neginzpoure@gmail.com
          </a>
        </p>
        <p className="mt-3">
          {t.contact.industryLinksLabel || "Talent & Casting Profiles:"}{" "}
          <a
            href={externalProfiles.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-espresso transition"
          >
            IMDb
          </a>{" "}
          |{" "}
          <a
            href={externalProfiles.mmg}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-espresso transition"
          >
            MMG
          </a>
        </p>
      </div>
    </section>
  );
}
