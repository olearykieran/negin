"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = "h1, h2, h3, h4, p, a, span, img, form, button, input, textarea, label";

    let revealIndex = 0;

    function initElements() {
      document.querySelectorAll(selectors).forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.dataset.reveal) return;
        // Skip header/nav/footer elements
        const parent = htmlEl.closest("header, nav, footer");
        if (parent) return;
        // Skip hero section elements (handled by Hero component)
        const heroParent = htmlEl.closest("#home");
        if (heroParent) return;

        const index = revealIndex++;
        htmlEl.dataset.reveal = "hidden";
        htmlEl.dataset.revealIndex = String(index);
        htmlEl.style.opacity = "0";
        htmlEl.style.transform = "translateY(30px)";
        htmlEl.style.transition = "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
      });
    }

    function handleIntersection(entries: IntersectionObserverEntry[]) {
      // Sort by position so top elements reveal first
      const sorted = [...entries].filter(e => e.isIntersecting).sort((a, b) => {
        const aIdx = parseInt((a.target as HTMLElement).dataset.revealIndex || "0");
        const bIdx = parseInt((b.target as HTMLElement).dataset.revealIndex || "0");
        return aIdx - bIdx;
      });

      sorted.forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        // Stagger siblings that appear at the same time
        const delay = i * 80;
        el.style.transitionDelay = `${delay}ms`;
        el.dataset.reveal = "visible";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.unobserve(el);
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      rootMargin: "0px 0px -60px 0px",
    });

    initElements();
    document.querySelectorAll('[data-reveal="hidden"]').forEach((el) => {
      observer.observe(el);
    });

    const mutationObserver = new MutationObserver(() => {
      initElements();
      document.querySelectorAll('[data-reveal="hidden"]').forEach((el) => {
        observer.observe(el);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
