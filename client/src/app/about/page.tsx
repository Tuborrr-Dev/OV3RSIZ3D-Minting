"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center pt-8 sm:pt-14 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="w-full mb-6 font-mono text-xs text-neutral-400 flex items-center gap-2">
        <Link href="/" className="hover:text-white">HOME</Link>
        <span>/</span>
        <span className="text-electricYellow">{"ABOUT"}</span>
      </div>

      {/* Main Header */}
      <div className="w-full pb-8 border-b border-white/10 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
          <span className="w-2 h-2 bg-electricYellow inline-block" />
          <span>{"// DOCTRINE"}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-headline font-bold uppercase tracking-tight text-white mb-4">
          About OV3RSIZ3D
        </h1>
        <p className="font-mono text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
          2,222 hand-drawn entities on Robinhood Chain. Creatures with tall ears, quiet dark eyes, and clothes that didn&apos;t belong.
        </p>
      </div>

      {/* Manifesto Body - Two Plain Panels */}
      <div className="space-y-8 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed w-full">
        <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase tracking-wide">
            THE COLLECTION
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed">
            Fully hand-drawn on Robinhood. Every entity is born into one of six colors, fixed the moment they arrive.
          </p>
          <div className="pt-2">
            <Link href="/#field-guide" className="text-electricYellow hover:underline inline-flex items-center gap-1 font-bold">
              <span>Read the field guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase tracking-wide">
            THE FITTING ROOM
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed">
            A free app, built for holders first. The chain is the door. It&apos;s not supposed to be the room.
          </p>
          <div className="pt-2">
            <Link href="/#roadmap" className="text-electricYellow hover:underline inline-flex items-center gap-1 font-bold">
              <span>See the roadmap</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-[#080808] border border-electricYellow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline font-bold text-xl text-white uppercase">
              Check Allowlist
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Verify your eligibility status on Robinhood Chain.
            </p>
          </div>
          <Link
            href="/allowlist"
            className="clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-sm px-8 py-3.5 uppercase tracking-wider transition-all shrink-0 flex items-center gap-2"
          >
            <span>Check allowlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
