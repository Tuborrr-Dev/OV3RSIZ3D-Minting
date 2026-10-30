"use client";

import React from "react";
import { ROADMAP_STAGES } from "@/lib/constants";
import { MapPin, CheckCircle2 } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
            <span className="w-2 h-2 bg-electricYellow inline-block" />
            <span>{"[SEC_06 // CHRONOLOGY & DEPLOYMENT]"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-white">
            Roadmap Sequence
          </h2>
        </div>
        <p className="font-body text-sm text-neutral-400 max-w-md">
          Phased execution bridging smart contract mint mechanics, physical 500GSM garment production in Portugal, and the future Fitting Room app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ROADMAP_STAGES.map((stage) => {
          const isCurrent = stage.status === "CURRENT";
          const isInProgress = stage.status === "IN PROGRESS";

          return (
            <div
              key={stage.phase}
              className={`p-6 border transition-all flex flex-col justify-between ${
                isCurrent
                  ? "bg-[#080808] border-electricYellow shadow-[0_0_20px_rgba(252,238,84,0.15)]"
                  : isInProgress
                  ? "bg-[#080808] border-signalGreen/50"
                  : "bg-[#080808] border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono text-xs">
                  <span className="text-2xl font-bold text-electricYellow font-headline">
                    PHASE {stage.phase}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold border ${
                      isCurrent
                        ? "bg-electricYellow/10 text-electricYellow border-electricYellow/40"
                        : isInProgress
                        ? "bg-signalGreen/10 text-signalGreen border-signalGreen/40"
                        : "bg-black text-neutral-500 border-white/10"
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wide mb-4">
                  {stage.title}
                </h3>

                <ul className="space-y-2.5 font-mono text-xs text-neutral-400">
                  {stage.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-electricYellow mt-0.5">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
                <span>CLEARANCE STAGE {stage.phase}</span>
                <span className="text-electricYellow">EXECUTION READY</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
