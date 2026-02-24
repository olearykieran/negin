import React from "react";

interface MediaHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  projectsAnchorId: string;
}

export default function MediaHero({ title, subtitle, imageSrc, projectsAnchorId }: MediaHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-ivory">
      <div className="absolute inset-0">
        <img src={imageSrc} alt={`${title} hero`} className="w-full h-full object-cover grayscale" />
      </div>

      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/55 to-charcoal/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-cream/80 text-[11px] sm:text-xs uppercase tracking-eyebrow">
          Work — Selected
        </p>
        <h1 className="mt-5 font-display text-cream uppercase tracking-display leading-[0.95] text-[clamp(3rem,11vw,8rem)]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-cream/85 text-sm sm:text-base uppercase tracking-[0.08em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      <a
        href={`#${projectsAnchorId}`}
        className="absolute bottom-7 right-7 z-20 h-11 w-11 rounded-full border border-cream/70 bg-espresso/50 text-cream flex items-center justify-center hover:bg-cream hover:text-espresso transition"
        aria-label={`Scroll to ${title.toLowerCase()} projects`}
      >
        <span className="text-lg leading-none">↓</span>
      </a>
    </section>
  );
}
