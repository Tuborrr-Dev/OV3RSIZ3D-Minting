"use client";

import React from "react";
import { Chapter } from "@/data/roadmap";
import { Check } from "lucide-react";

interface ChapterRailProps {
  chapters: Chapter[];
  activeIndex: number;
  onSelectChapter: (index: number) => void;
}

function formatRailTitle(quarter: string, title: string) {
  const formattedQuarter = quarter === "NEXT UP" ? "Next Up" : quarter;
  const formattedTitle = title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "ai") return "AI";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return `${formattedQuarter} / ${formattedTitle}`;
}

export function ChapterRail({
  chapters,
  activeIndex,
  onSelectChapter,
}: ChapterRailProps) {
  const activeChapter = chapters[activeIndex] || chapters[0];

  return (
    <>
      {/* ── MOBILE / TABLET STICKY PILL (< lg, top: 4rem / 64px under header) ── */}
      <div className="lg:hidden sticky top-16 z-30 w-full py-2 px-1 pointer-events-auto">
        <div className="max-w-md mx-auto bg-black/95 backdrop-blur-md border border-white/20 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.8)] clip-chamfer-btn">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-300">
            <span className="text-electricYellow font-bold truncate">
              {activeChapter.quarter} &middot; {activeChapter.title}
            </span>
            <span className="text-neutral-400 font-mono text-[11px] ml-2 shrink-0">
              ({activeIndex + 1}/{chapters.length})
            </span>
          </div>

          {/* Segmented Progress Strip */}
          <div className="flex gap-1.5 mt-2 h-1 w-full">
            {chapters.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-electricYellow shadow-[0_0_8px_#FCEE54]"
                    : idx < activeIndex
                    ? "bg-electricYellow/40"
                    : "bg-neutral-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP VERTICAL RAIL (lg and up, top: 6rem / 96px) ── */}
      <aside className="hidden lg:block w-64 shrink-0">
        <nav
          aria-label="Roadmap chapters"
          className="sticky top-24 space-y-3 font-mono text-xs select-none"
        >
          <div className="text-[11px] text-neutral-500 uppercase tracking-widest pb-1 border-b border-white/10 font-bold">
            ROADMAP CHAPTERS
          </div>

          <ol className="space-y-2">
            {chapters.map((ch, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <li key={ch.id}>
                  <button
                    type="button"
                    onClick={() => onSelectChapter(idx)}
                    aria-current={isActive ? "step" : undefined}
                    className={`w-full text-left p-2.5 rounded transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-electricYellow ${
                      isActive
                        ? "bg-white/10 border-l-2 border-electricYellow text-white font-bold"
                        : isPassed
                        ? "text-neutral-300 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {/* Status indicator dot / check */}
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] transition-colors ${
                          isActive
                            ? "bg-electricYellow text-black font-bold shadow-[0_0_10px_#FCEE54]"
                            : isPassed
                            ? "bg-electricYellow/30 text-electricYellow"
                            : "border border-neutral-700 bg-neutral-900 text-transparent"
                        }`}
                      >
                        {isPassed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        {isActive && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </span>

                      <span className="truncate">
                        {formatRailTitle(ch.quarter, ch.title)}
                      </span>
                    </div>

                    {/* Active Caret */}
                    {isActive && (
                      <span className="text-[10px] text-electricYellow font-bold tracking-tighter shrink-0 animate-pulse ml-1">
                        NOW READING &blacktriangleright;
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </aside>
    </>
  );
}
