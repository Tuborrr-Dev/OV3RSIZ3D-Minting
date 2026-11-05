"use client";

import React from "react";
import { Chapter } from "@/data/roadmap";
import { DemonWalker } from "./DemonWalker";

interface RoadmapLineProps {
  chapters: Chapter[];
  activeIndex: number;
  nodeTops: number[];
  lineLength: number;
  isWalking: boolean;
  walkDirection: "down" | "up";
  lineRef: React.RefObject<HTMLDivElement>;
  walkerRef: React.RefObject<HTMLDivElement>;
  trailRef: React.RefObject<HTMLDivElement>;
}

export function RoadmapLine({
  chapters,
  activeIndex,
  nodeTops,
  lineLength,
  isWalking,
  walkDirection,
  lineRef,
  walkerRef,
  trailRef,
}: RoadmapLineProps) {
  // Find index of flexible chapter if any
  const flexibleIdx = chapters.findIndex((c) => c.status === "flexible");
  const cutOffTop = flexibleIdx >= 0 && nodeTops[flexibleIdx] ? nodeTops[flexibleIdx] : lineLength;

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className="relative w-12 sm:w-16 shrink-0 select-none py-6 pointer-events-none"
      style={{ minHeight: "100%" }}
    >
      {/* ── BASE BACKGROUND LINE (AHEAD) ── */}
      {/* 1. Main track (dim purple dashed) up to flexible chapter */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-6 w-0.5 border-l-2 border-dashed border-purple-900/50"
        style={{ height: `${Math.max(0, cutOffTop - 24)}px` }}
      />

      {/* 2. Dotted fading ghost path for flexible chapter (CH 05) */}
      {flexibleIdx >= 0 && nodeTops[flexibleIdx] && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dotted border-purple-600/40"
          style={{
            top: `${nodeTops[Math.max(0, flexibleIdx - 1)] || 0}px`,
            height: `${Math.max(40, nodeTops[flexibleIdx] - (nodeTops[Math.max(0, flexibleIdx - 1)] || 0))}px`,
            maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
          }}
        />
      )}

      {/* ── LIT TRAIL (BEHIND WALKER) ── */}
      <div
        ref={trailRef}
        className="absolute left-1/2 -translate-x-1/2 top-6 w-0.5 bg-electricYellow origin-top shadow-[0_0_10px_#FCEE54,0_0_20px_rgba(252,238,84,0.4)] pointer-events-none"
        style={{
          height: `${lineLength}px`,
          transform: "scaleY(0)",
          willChange: "transform",
        }}
      >
        {/* Subtle data packet pulse traveling down the line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_8px_#FFFFFF] animate-data-packet pointer-events-none" />
      </div>

      {/* ── CHAPTER NODES ALONG THE TRACK ── */}
      {chapters.map((ch, idx) => {
        const topPos = nodeTops[idx] ?? 0;
        const isPassed = idx <= activeIndex;
        const isGhost = ch.status === "flexible";

        if (isGhost) {
          return (
            <div
              key={ch.id}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
              style={{ top: `${topPos}px` }}
            >
              {/* Pulsing hollow ghost node */}
              <div
                className={`w-4 h-4 rounded-full border-2 border-dashed ${
                  isPassed
                    ? "border-electricYellow bg-electricYellow/20 shadow-[0_0_12px_#FCEE54]"
                    : "border-purple-400 bg-purple-950/40 animate-pulse"
                }`}
              />
              <span className="mt-1 font-mono text-[9px] tracking-wider text-purple-400 whitespace-nowrap bg-black/90 px-1 border border-purple-500/30">
                TIMING FLEXIBLE
              </span>
            </div>
          );
        }

        return (
          <div
            key={ch.id}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center -translate-y-1/2"
            style={{ top: `${topPos}px` }}
          >
            {/* Notched joint diamond/square node */}
            <div
              className={`w-3.5 h-3.5 rotate-45 border transition-all duration-300 ${
                isPassed
                  ? "bg-electricYellow border-electricYellow shadow-[0_0_12px_#FCEE54]"
                  : "bg-black border-neutral-700 shadow-none"
              }`}
            >
              {isPassed && (
                <div className="w-1.5 h-1.5 bg-black m-auto mt-[3px] rounded-full" />
              )}
            </div>

            {/* Spark burst when node is reached */}
            {idx === activeIndex && (
              <span className="absolute w-6 h-6 border border-electricYellow/40 rounded-full animate-ping pointer-events-none" />
            )}
          </div>
        );
      })}

      {/* ── DEMON WALKER SPRITE ── */}
      <div
        ref={walkerRef}
        className="absolute left-1/2 top-0 pointer-events-none z-20"
        style={{
          transform: "translate3d(-50%, 0, 0)",
          willChange: "transform",
        }}
      >
        <DemonWalker isWalking={isWalking} walkDirection={walkDirection} />
      </div>
    </div>
  );
}
