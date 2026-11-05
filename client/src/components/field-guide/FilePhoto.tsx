// FilePhoto — tilted file-photo frame using ArtFrame.
// Server component (no browser APIs, no state).

import React from "react";
import { ArtFrame } from "@/components/ArtFrame";

interface FilePhotoProps {
  image: string | null;
  alt: string;
  caption?: string;
  rotate?: "left" | "right";
  glow?: string;
}

export function FilePhoto({
  image,
  alt,
  caption = "FILE PHOTO",
  rotate = "left",
  glow,
}: FilePhotoProps) {
  const tilt = rotate === "right" ? "rotate-[2deg]" : "-rotate-[2deg]";

  return (
    <figure
      className={`relative inline-block ${tilt} select-none`}
      aria-label={caption}
    >
      {/* Yellow tape strip at top */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 z-20 opacity-80"
        style={{
          background: "repeating-linear-gradient(45deg, #FCEE54 0px, #FCEE54 4px, #e8d940 4px, #e8d940 8px)",
        }}
        aria-hidden="true"
      />

      {/* Frame */}
      <div className="relative w-full" style={{ minWidth: "200px" }}>
        <ArtFrame image={image} alt={alt} glow={glow} className="w-full" />
      </div>

      {/* Caption strip */}
      <figcaption className="mt-2 text-center font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
