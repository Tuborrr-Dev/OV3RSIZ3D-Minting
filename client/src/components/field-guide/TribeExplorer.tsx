"use client";

import React, { useState } from "react";
import { TRIBES, Tribe } from "@/data/field-guide";
import { ArtFrame } from "@/components/ArtFrame";

export function TribeExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const [revealedBrown, setRevealedBrown] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(false);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (index !== 5) {
      setRevealedBrown(false);
    }
    setGlitchTrigger(true);
    setTimeout(() => setGlitchTrigger(false), 250);
  };

  const currentTribe: Tribe = TRIBES[activeTab];

  return (
    <div className="w-full bg-[#080808] border border-white/10 p-4 sm:p-6 lg:p-8 clip-card-notch">
      {/* Mobile Tab List (Chips) */}
      <div
        role="tablist"
        aria-label="Tribe Selector"
        className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6"
      >
        {TRIBES.map((tribe, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={tribe.id}
              role="tab"
              id={`tab-${tribe.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${tribe.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => handleTabChange(idx)}
              className={`flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono font-bold tracking-wider uppercase border transition-all ${
                isSelected
                  ? "border-electricYellow bg-white/10 text-white shadow-[0_0_10px_rgba(252,238,84,0.2)]"
                  : "border-white/10 bg-black/40 text-neutral-400 hover:border-white/30 hover:text-white"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: tribe.hex }}
              />
              <span>{tribe.name}</span>
            </button>
          );
        })}
      </div>

      {/* Panels (All rendered in DOM for static export, hidden when inactive) */}
      <div className="relative">
        {TRIBES.map((tribe, idx) => {
          const isSelected = activeTab === idx;
          const isBrown = tribe.id === "brown";

          return (
            <div
              key={tribe.id}
              role="tabpanel"
              id={`panel-${tribe.id}`}
              aria-labelledby={`tab-${tribe.id}`}
              hidden={!isSelected}
              className={`${isSelected ? "block" : "hidden"}`}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                  glitchTrigger ? "fx-glitch-once" : ""
                }`}
              >
                {/* Dossier Text Info */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-electricYellow tracking-widest uppercase">
                      TRIBE 0{tribe.index} / 06
                    </span>
                    <span
                      className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded"
                      style={{
                        backgroundColor: `${tribe.hex}22`,
                        color: tribe.textHex,
                        border: `1px solid ${tribe.hex}44`,
                      }}
                    >
                      SPECIMEN_{tribe.name}
                    </span>
                  </div>

                  <h3
                    className="font-headline font-bold text-3xl sm:text-4xl uppercase tracking-wide"
                    style={{ color: "#FFFFFF" }}
                  >
                    TRIBE {tribe.name}
                  </h3>

                  {isBrown ? (
                    <div className="space-y-3">
                      <div className="relative p-4 bg-black/60 border border-white/10 font-mono text-sm leading-relaxed">
                        {revealedBrown ? (
                          <p style={{ color: tribe.textHex }}>
                            {tribe.line}
                          </p>
                        ) : (
                          <div className="space-y-2 select-none">
                            <div className="h-4 bg-neutral-800 rounded w-full animate-pulse" />
                            <div className="h-4 bg-neutral-800 rounded w-3/4 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                              <span className="font-mono text-xs text-signalRed font-bold tracking-widest uppercase px-3 py-1 border border-signalRed/50 bg-black">
                                [ RESTRICTED ACCESS // CLASSIFIED ]
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setRevealedBrown(!revealedBrown)}
                        className="px-4 py-2 border border-signalRed text-signalRed hover:bg-signalRed/10 font-mono text-xs font-bold tracking-widest uppercase transition-all"
                      >
                        {revealedBrown ? "RE-LOCK DOSSIER" : "OVERRIDE CLEARANCE / REVEAL"}
                      </button>
                    </div>
                  ) : (
                    <p
                      className="font-body text-base sm:text-lg leading-relaxed"
                      style={{ color: tribe.textHex }}
                    >
                      {tribe.line}
                    </p>
                  )}

                  <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span>ACCENT SIGNATURE:</span>
                    <span
                      className="inline-block w-4 h-4 border border-white/20"
                      style={{ backgroundColor: tribe.hex }}
                    />
                    <span className="text-white font-mono">{tribe.hex}</span>
                  </div>
                </div>

                {/* Dossier Image Frame */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full max-w-[340px]">
                    <ArtFrame
                      image={tribe.image}
                      alt={tribe.alt}
                      label={isBrown ? "UNKNOWN" : undefined}
                      glow={tribe.hex}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
