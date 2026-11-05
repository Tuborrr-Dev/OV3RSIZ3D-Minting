"use client";

import React from "react";
import Image from "next/image";

interface ArtFrameProps {
  image?: string | null;
  alt?: string;
  label?: string;
  glow?: string;
  className?: string;
}

export function ArtFrame({
  image = null,
  alt = "OV3RSIZ3D Entity Artwork",
  label,
  glow,
  className = "",
}: ArtFrameProps) {
  const borderStyle = glow
    ? { borderColor: glow, boxShadow: `0 0 16px ${glow}33` }
    : undefined;

  return (
    <div
      className={`relative aspect-square w-full bg-[#0a0a0a] border border-white/10 clip-card-notch overflow-hidden ${className}`}
      style={borderStyle}
    >
      {/* Corner Tick Marks */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/40 z-10 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/40 z-10 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/40 z-10 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/40 z-10 pointer-events-none" />

      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#070707] p-4 text-center select-none">
          {label === "UNKNOWN" ? (
            <>
              <span className="font-headline font-bold text-3xl sm:text-4xl text-neutral-600 mb-2">?</span>
              <span className="font-mono text-[11px] text-neutral-500 tracking-widest uppercase">
                {label}
              </span>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 bg-white/[0.02]">
                <div className="w-5 h-5 rounded-full bg-white/10" />
              </div>
              <span className="font-mono text-xs text-neutral-500 font-bold tracking-widest uppercase">
                ART INCOMING
              </span>
              {label && (
                <span className="font-mono text-[10px] text-neutral-600 mt-1 uppercase">
                  {label}
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
