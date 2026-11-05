"use client";

import React, { useEffect, useState } from "react";
import { Chapter } from "@/data/roadmap";

interface ChapterCardProps {
  chapter: Chapter;
  index: number;
  isActive: boolean;
  isPassed: boolean;
  cardRef?: (el: HTMLElement | null) => void;
}

export function ChapterCard({
  chapter,
  index,
  isActive,
  isPassed,
  cardRef,
}: ChapterCardProps) {
  const [glitching, setGlitching] = useState(false);
  const chNum = String(index + 1).padStart(2, "0");
  const isFlexible = chapter.status === "flexible";
  const isNow = chapter.status === "now";

  // Trigger one-time chromatic-aberration glitch when becoming active
  useEffect(() => {
    if (isActive) {
      setGlitching(true);
      const timer = setTimeout(() => setGlitching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const borderClass = isFlexible
    ? isActive
      ? "border-dashed border-electricYellow shadow-[0_0_20px_rgba(252,238,84,0.2)]"
      : "border-dashed border-white/20"
    : isActive
    ? "border-electricYellow shadow-[0_0_25px_rgba(252,238,84,0.18)]"
    : isPassed
    ? "border-electricYellow/40"
    : "border-white/10";

  return (
    <article
      ref={cardRef}
      id={`roadmap-${chapter.id}`}
      aria-current={isActive ? "step" : undefined}
      className={`relative w-full bg-[#080808] border ${borderClass} clip-card-notch p-6 sm:p-8 transition-all duration-300`}
    >
      {/* Corner Tick Marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30 pointer-events-none" />

      {/* Header telemetry / Log line */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isActive
                ? "bg-electricYellow animate-ping"
                : isPassed
                ? "bg-electricYellow"
                : "bg-neutral-600"
            }`}
          />
          <span className="text-electricYellow font-bold">
            &gt; CH {chNum} LOADED
          </span>
          <span className="text-neutral-500">[{chapter.quarter}]</span>
        </div>

        <div className="flex items-center gap-2">
          {isNow && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-electricYellow/10 border border-electricYellow text-electricYellow font-bold uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 bg-electricYellow rounded-full" />
              <span>YOU ARE HERE</span>
            </span>
          )}
          <span
            className={`px-2 py-0.5 border text-[10px] font-bold uppercase tracking-widest ${
              isNow
                ? "border-electricYellow bg-electricYellow text-black"
                : isFlexible
                ? "border-purple-500/40 text-purple-300 bg-purple-950/20"
                : "border-white/20 text-neutral-400 bg-white/[0.02]"
            }`}
          >
            {chapter.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Chapter Title */}
      <div className="mt-4">
        <h3
          className={`font-headline font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide transition-all ${
            glitching ? "fx-glitch-once" : ""
          }`}
        >
          {chapter.title}
        </h3>

        {/* Theme line */}
        {chapter.theme && (
          <p className="mt-1 font-headline italic text-lg sm:text-xl text-neutral-300">
            &ldquo;{chapter.theme}&rdquo;
          </p>
        )}
      </div>

      {/* Bullets List */}
      {chapter.items && chapter.items.length > 0 && (
        <ul className="mt-6 space-y-3 font-body text-sm sm:text-base text-neutral-300">
          {chapter.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-electricYellow mt-2 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Note for flexible chapter */}
      {chapter.note && (
        <div className="mt-4 p-4 bg-purple-950/20 border border-purple-500/30 font-body text-sm text-neutral-300 leading-relaxed">
          <p className="font-mono text-xs text-purple-300 font-bold uppercase mb-1">
            [NOTE: FLEXIBLE MILESTONE]
          </p>
          <p>{chapter.note}</p>
        </div>
      )}
    </article>
  );
}
