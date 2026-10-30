"use client";

import React from "react";

interface GlitchWordmarkProps {
  className?: string;
  size?: "hero" | "header" | "compact";
}

export function GlitchWordmark({ className = "", size = "hero" }: GlitchWordmarkProps) {
  if (size === "header") {
    return (
      <span
        className={`font-headline font-bold text-lg sm:text-xl tracking-widest text-electricYellow uppercase glitch-wrapper ${className}`}
        data-text="OV3RSIZ3D"
      >
        OV3RSIZ3D
      </span>
    );
  }

  if (size === "compact") {
    return (
      <span
        className={`font-mono font-bold tracking-widest text-electricYellow uppercase glitch-wrapper text-sm ${className}`}
        data-text="OV3RSIZ3D"
      >
        OV3RSIZ3D
      </span>
    );
  }

  return (
    <h1
      data-glitch-target="title"
      className={`font-headline font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[4rem] lg:leading-[4.25rem] tracking-tighter uppercase text-electricYellow drop-shadow-[0_0_24px_rgba(244,230,77,0.4)] glitch-wrapper select-none cursor-pointer ${className}`}
      data-text="OV3RSIZ3D"
    >
      OV3RSIZ3D
    </h1>
  );
}
