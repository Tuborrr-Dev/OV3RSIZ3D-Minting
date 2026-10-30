"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
          <span className="w-2 h-2 bg-electricYellow inline-block" />
          <span>{"[SEC_07 // DECRYPTED FREQUENT QUERIES]"}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-white">
          Frequently Answered
        </h2>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`border transition-all ${
                isOpen
                  ? "bg-[#080808] border-electricYellow/70 shadow-[0_0_15px_rgba(252,238,84,0.1)]"
                  : "bg-[#080808] border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-5 px-6 flex items-center justify-between text-left font-headline font-bold text-base sm:text-lg text-white uppercase tracking-wide gap-4"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-electricYellow shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-white/5 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
