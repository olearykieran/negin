"use client";

import React, { useState } from "react";

export default function ContactSection() {
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
    <section id="contact" className="bg-[#2f2f2f] text-white py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="border border-white inline-block px-8 py-2 mb-8">
          <h2 className="text-3xl uppercase">contact</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder="Name - Surname"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 focus:outline-none"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border border-white p-2 text-white placeholder-gray-400 h-32 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Display success or error message */}
        {status === "success" && (
          <p className="mt-4 text-green-400">Message sent successfully!</p>
        )}
        {status === "error" && <p className="mt-4 text-red-400">Error: {errorMsg}</p>}
      </div>
    </section>
  );
}
