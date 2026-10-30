"use client";

import React from "react";

export function RotatingStar() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-25 -z-10 overflow-visible">
      <svg
        className="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] stroke-white fill-none stroke-[0.8] animate-spin [animation-duration:120s] overflow-visible"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="210" strokeDasharray="8 14 3 6" />
        <circle cx="250" cy="250" r="240" strokeDasharray="2 30" strokeWidth="1.5" />
        <polygon opacity="0.4" points="250,20 440,380 60,380" strokeDasharray="10 10" />
        <polygon opacity="0.4" points="250,480 60,120 440,120" strokeDasharray="5 5" />
      </svg>
    </div>
  );
}
