"use client";

import React, { useRef } from "react";
import { ROADMAP } from "@/data/roadmap";
import { ChapterRail } from "./roadmap/ChapterRail";
import { RoadmapLine } from "./roadmap/RoadmapLine";
import { ChapterCard } from "./roadmap/ChapterCard";
import { useRoadmapScroll } from "./roadmap/useRoadmapScroll";

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const walkerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const {
    activeIndex,
    isWalking,
    walkDirection,
    nodeTops,
    lineLength,
    scrollToChapter,
  } = useRoadmapScroll({
    sectionRef,
    lineRef,
    cardRefs,
    chapterCount: ROADMAP.chapters.length,
    walkerRef,
    trailRef,
  });

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="scroll-mt-24 relative w-full bg-[#050505] border-b border-white/10 py-16 sm:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Scanlines Texture Overlay */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* ── SECTION HEADER ── */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
            <span className="w-2 h-2 bg-electricYellow" />
            <span>[SEC_05 // ROADMAP]</span>
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            {ROADMAP.title}
          </h2>

          <p className="font-body text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            {ROADMAP.subtitle}
          </p>
        </div>

        {/* ── MAIN LAYOUT: RAIL (DESKTOP) + LINE + CARDS ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Chapter Rail: Desktop Vertical Rail + Mobile Sticky Pill */}
          <ChapterRail
            chapters={ROADMAP.chapters}
            activeIndex={activeIndex}
            onSelectChapter={scrollToChapter}
          />

          {/* Interactive Line & Walker + Chapter Cards Container */}
          <div className="flex-1 flex gap-3 sm:gap-6 w-full min-w-0">
            {/* The Vertical Glowing Line & Demon Walker */}
            <RoadmapLine
              chapters={ROADMAP.chapters}
              activeIndex={activeIndex}
              nodeTops={nodeTops}
              lineLength={lineLength}
              isWalking={isWalking}
              walkDirection={walkDirection}
              lineRef={lineRef}
              walkerRef={walkerRef}
              trailRef={trailRef}
            />

            {/* Semantic Chapter List */}
            <ol className="flex-1 space-y-8 sm:space-y-12 list-none p-0 m-0 min-w-0">
              {ROADMAP.chapters.map((chapter, idx) => (
                <li key={chapter.id} className="w-full">
                  <ChapterCard
                    chapter={chapter}
                    index={idx}
                    isActive={idx === activeIndex}
                    isPassed={idx < activeIndex}
                    cardRef={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── FOOTER DISCLAIMER ── */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-mono text-xs text-neutral-500 max-w-xl mx-auto leading-relaxed">
            {ROADMAP.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
