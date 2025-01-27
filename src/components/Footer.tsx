// src/components/Footer.tsx
"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white py-6 text-center">
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Negin Poure. All rights reserved. Website by
        Holy Grail Studio
      </p>
    </footer>
  );
}
