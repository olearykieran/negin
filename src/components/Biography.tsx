// src/components/Biography.tsx
"use client";

import React from "react";

export default function Biography() {
  return (
    <section id="biography" className="bg-[#2f2f2f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        {/* Left side: big vertical text + image */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 relative">
          {/* This container can mimic that vertical "biography" text frame */}
          <div className="border border-white p-4 relative inline-block">
            <img
              src="/images/new_b6.jpg"
              alt="Biography Pose"
              className="w-full h-auto"
            />
            {/* Vertical text overlay on the left edge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full rotate-[-90deg] origin-bottom-left text-xl font-noto">
              <span className="mr-2">biography</span>
            </div>
          </div>
        </div>

        {/* Right side: text content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-noto font-bold mb-4">She was born on...</h2>
          <p className="text-md leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, est a
            facilisis sollicitudin, tellus nunc placerat urna, at ornare ante eros at
            libero. Pellentesque habitant morbi tristique senectus...
          </p>
          <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            Awards
          </button>
        </div>
      </div>
    </section>
  );
}
