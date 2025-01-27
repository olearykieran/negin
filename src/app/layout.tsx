// src/app/layout.tsx

"use client";

import "./globals.css";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Load only Lora and Open Sans from Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Josefin+Sans:wght@300;400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=supreme@100&display=swap"
        />
      </head>
      {/* Apply the Open Sans font across the site */}
      <body className="bg-white text-black min-h-screen letter-space-2 font-supreme font-[100]">
        {children}
      </body>
    </html>
  );
}
