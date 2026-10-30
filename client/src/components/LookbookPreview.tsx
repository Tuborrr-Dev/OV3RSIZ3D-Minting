"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SPECIMENS, Specimen } from "@/lib/constants";
import { X, Sparkles, Cpu, Layers, Tag } from "lucide-react";

export function LookbookPreview() {
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);

  return (
    <section id="sneak-peeks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electricYellow tracking-widest uppercase">
            <span className="w-2 h-2 bg-electricYellow inline-block" />
            <span>{"[SEC_03 // ARCHIVE PREVIEW]"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight text-white">
            Sneak Peeks / Lookbook
          </h2>
        </div>
        <p className="font-body text-sm text-neutral-400 max-w-md">
          Generated from over 260 hand-drawn vector elements: 500GSM cut-and-sew fleece, ballistic harnesses, cybernetic visors, and NFC physical integration.
        </p>
      </div>

      {/* Grid of 4 Specimen Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPECIMENS.map((spec) => (
          <div
            key={spec.id}
            onClick={() => setSelectedSpecimen(spec)}
            className="cursor-pointer bg-[#080808] border border-white/10 hover:border-electricYellow/80 transition-all duration-200 group flex flex-col justify-between p-3 relative hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(252,238,84,0.18)]"
          >
            {/* Top Card Info Bar */}
            <div className="flex items-center justify-between font-mono text-xs pb-2.5 mb-2 border-b border-white/10">
              <span className="text-electricYellow font-bold">{spec.number}</span>
              <span className="px-2 py-0.5 bg-[#00E599]/10 text-signalGreen border border-signalGreen/30 text-[10px] font-bold">
                ● REVEALED
              </span>
            </div>

            {/* Artwork Frame */}
            <div className="relative aspect-square w-full bg-[#0a0a0a] overflow-hidden border border-white/5 mb-3">
              <Image
                src={spec.imageUrl}
                alt={spec.dataAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* Tactical Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-electricYellow" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-electricYellow" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-electricYellow" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-electricYellow" />
            </div>

            {/* Card Metadata */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between font-headline font-bold text-sm text-white">
                <span>{spec.name}</span>
                <span className="text-electricYellow text-xs">{spec.tier}</span>
              </div>
              <div className="flex justify-between text-neutral-400 text-[11px] pt-1">
                <span>HOODIE:</span>
                <span className="text-neutral-200">{spec.hoodie}</span>
              </div>
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>OPTICS:</span>
                <span className="text-electricYellow">{spec.special}</span>
              </div>
            </div>

            {/* Click to inspect prompt */}
            <div className="mt-3 pt-2 border-t border-white/5 text-center font-mono text-[10px] text-neutral-500 group-hover:text-electricYellow transition-colors uppercase tracking-wider">
              [Click to Inspect Specimen]
            </div>
          </div>
        ))}
      </div>

      {/* Full Specimen Detail Modal */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#080808] border border-electricYellow/60 w-full max-w-2xl p-6 sm:p-8 relative text-white shadow-[0_0_50px_rgba(252,238,84,0.15)] clip-chamfer">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-1">
                  <span className="w-2 h-2 bg-electricYellow inline-block" />
                  <span>{"// SPECIMEN DIAGNOSTIC ARCHIVE"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-headline font-bold uppercase text-white">
                  {selectedSpecimen.name} {selectedSpecimen.number}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSpecimen(null)}
                className="text-neutral-400 hover:text-electricYellow text-2xl font-mono leading-none p-2 transition-colors"
                aria-label="Close specimen detail modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-square w-full bg-[#0a0a0a] border border-electricYellow/40 overflow-hidden">
                <Image
                  src={selectedSpecimen.imageUrl}
                  alt={selectedSpecimen.dataAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-[#0d0d0d] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-electricYellow font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RARITY CLASSIFICATION: {selectedSpecimen.tier}</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    Extraterrestrial specimen featuring custom oversized cowl neck draping and technical webbing attachments.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> GARMENT WEAVE:
                    </span>
                    <span className="text-white font-bold">{selectedSpecimen.hoodie}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" /> HUD / ACCESSORY:
                    </span>
                    <span className="text-electricYellow font-bold">{selectedSpecimen.special}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> NFC HARDWARE:
                    </span>
                    <span className="text-signalGreen font-bold">{selectedSpecimen.hardware}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSpecimen(null)}
                  className="w-full mt-4 clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-bold py-2.5 uppercase font-mono tracking-wider transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
