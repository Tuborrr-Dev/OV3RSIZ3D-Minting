"use client";

// Reveal — IntersectionObserver scroll-in wrapper.
// Content is visible without JS; JS only adds the slide-in animation.
// Respects prefers-reduced-motion.

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion — if set, skip all animation
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true);
      return;
    }
    setShouldAnimate(true);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(el); // one-shot
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  // If not animating (SSR / no-motion): always show
  // If animating: start hidden, fade+slide in on reveal
  const animClass = shouldAnimate
    ? revealed
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"
    : "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animClass} ${className}`}
    >
      {children}
    </div>
  );
}
