import React from "react";

interface MediaHeroProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  posterSrc: string;
  projectsAnchorId: string;
}

export default function MediaHero({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  projectsAnchorId,
}: MediaHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/78" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-white/85 text-[11px] sm:text-xs uppercase tracking-[0.2em]">
          Media — Creative Vision
        </p>
        <h1 className="mt-5 font-canela text-white uppercase tracking-[0.2em] leading-[0.95] text-[clamp(3rem,11vw,8rem)]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-white/90 text-sm sm:text-base uppercase tracking-[0.08em] leading-relaxed">
          {subtitle}
        </p>
      </div>

      <a
        href={`#${projectsAnchorId}`}
        className="absolute bottom-7 right-7 z-20 h-11 w-11 rounded-full border border-white/75 bg-black/45 text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        aria-label={`Scroll to ${title.toLowerCase()} projects`}
      >
        <span className="text-lg leading-none">↓</span>
      </a>
    </section>
  );
}
