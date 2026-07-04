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
        <div className="ml-auto w-full max-w-[31rem]">
          <span className="block text-white/78 text-[11px] sm:text-xs tracking-eyebrow uppercase">
            My Story
          </span>

          <h2 className="mt-7 font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-light leading-[1.5] text-white/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.78)]">
            Negin Poure, born in Iran and raised in India, is an actress,
            writer, and model based in <span className="italic">New York</span>{" "}
            and <span className="italic">LA</span>.
          </h2>

          <span className="mt-7 block h-px w-10 bg-white/35" />

          <div className="mt-7 space-y-5 font-body text-[13.5px] leading-[1.9] text-white/82 drop-shadow-[0_2px_14px_rgba(0,0,0,0.76)] sm:text-sm">
            <p>
              She began her journey as a performer after moving to New York to
              pursue a career in the arts.
            </p>
            <p>
              Negin studied at the American Academy of Dramatic Arts, where she
              earned her Associate Degree in Theater Studies and trained
              extensively in both Stanislavski and Meisner techniques.
            </p>
            <p>
              Her work has spanned both film and theater since she first began
              performing.
            </p>
            <p>
              In addition to acting, Negin is a writer and emerging filmmaker
              dedicated to developing original narratives for both stage and
              screen.
            </p>
            <p>
              In 2025, Negin made her debut as a playwright with her original
              stage production <span className="italic text-white">Stain</span>.
              She is currently developing a slate of original short films and
              continues to expand her work as a writer and filmmaker.
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
