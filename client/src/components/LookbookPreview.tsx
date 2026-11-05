"use client";

import React from "react";
import { SNEAK_PEEKS } from "@/data/sneak-peeks";
import { ArtFrame } from "@/components/ArtFrame";

export function LookbookPreview() {
  return (
    <section id="sneak-peeks" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electricYellow tracking-widest uppercase">
            <span className="w-2 h-2 bg-electricYellow inline-block" />
            <span>{"[SEC_03 // SNEAK PEEKS]"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight text-white">
            Sneak Peeks
          </h2>
        </div>
        <p className="font-body text-sm text-neutral-400 max-w-md">
          A few who&apos;ve already arrived
        </p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SNEAK_PEEKS.map((item, index) => {
          const numberLabel = `SNEAK PEEK 0${index + 1} / 04`;
          return (
            <div
              key={item.id}
              className="bg-[#080808] border border-white/10 p-3 flex flex-col justify-between"
            >
              <ArtFrame image={item.image} alt={item.alt} />
              <div className="mt-3 text-center font-mono text-xs text-neutral-400 tracking-wider">
                {numberLabel}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
