// src/components/ContactSection.tsx
"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#2f2f2f] text-white py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="border border-white inline-block px-8 py-2 mb-8">
          <h2 className="text-3xl font-noto uppercase">contact</h2>
        </div>

        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder="Name - Surname"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 h-32 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
