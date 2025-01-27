// src/components/Contact.tsx
"use client";

import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-black text-white text-center flex flex-col items-center"
    >
      <h2 className="text-3xl font-pinyon mb-6">Contact</h2>
      <p className="font-noto text-lg max-w-xl">
        Interested in collaborating or just want to say hello? Feel free to email me or
        connect via social media.
      </p>

      <a
        href="mailto:example@example.com"
        className="inline-block mt-6 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
      >
        Email Me
      </a>
    </section>
  );
}
 