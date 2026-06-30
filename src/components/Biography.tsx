// src/components/Biography.tsx
import React from "react";


export default function Biography() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <img
        src="/images/my-story-bg.JPG"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
      />
      <div className="absolute inset-0 bg-black/38" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.48)_42%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center px-8 py-24 sm:px-12 md:px-16">
        <div className="ml-auto w-full max-w-[46rem]">
          <span className="block text-white/78 text-[11px] sm:text-xs tracking-eyebrow uppercase">
            My Story
          </span>

          <h2 className="mt-8 font-display text-[clamp(2.15rem,4.6vw,4.25rem)] font-light leading-[1.08] tracking-[-0.01em] text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.78)]">
            Born in Iran, raised in India — an actress, writer, and emerging
            filmmaker based between <span className="italic">New York</span> and{" "}
            <span className="italic">Los Angeles</span>.
          </h2>

          <div className="mt-10 grid gap-8 text-sm leading-[1.85] text-white/86 drop-shadow-[0_2px_16px_rgba(0,0,0,0.76)] md:grid-cols-3 md:gap-10 md:text-[15px]">
            <p>
              She trained at the American Academy of Dramatic Arts, earning her
              Associate Degree in Theater Studies, with extensive study in the
              Stanislavski and Meisner techniques.
            </p>
            <p>
              Beyond performing, she has developed original narratives for both
              stage and screen as a writer and emerging filmmaker.
            </p>
            <p>
              In 2025 she made her playwright debut with the original stage
              production <span className="font-semibold text-white">Stain</span>,
              and is currently developing a slate of original short films.
            </p>
          </div>
        </div>
      </div>

      <span className="hidden md:block absolute bottom-16 right-16 text-white/70 text-[11px] sm:text-xs tracking-eyebrow uppercase z-10">
        NYC
      </span>
    </section>
  );
}
