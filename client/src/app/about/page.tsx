"use client";

import React from "react";
import Link from "next/link";
import { GlitchWordmark } from "@/components/GlitchWordmark";
import { Cpu, ShieldCheck, Zap, Layers, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center pt-8 sm:pt-14 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="w-full mb-6 font-mono text-xs text-neutral-400 flex items-center gap-2">
        <Link href="/" className="hover:text-white">HOME</Link>
        <span>/</span>
        <span className="text-electricYellow">{"ABOUT // MANIFESTO"}</span>
      </div>

      {/* Main Header */}
      <div className="w-full pb-8 border-b border-white/10 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
          <span className="w-2 h-2 bg-electricYellow inline-block" />
          <span>{"// DOCTRINE & ON-CHAIN PROVENANCE"}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-headline font-bold uppercase tracking-tight text-white mb-4">
          About OV3RSIZ3D
        </h1>
        <p className="font-mono text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
          At the intersection of subterranean physical streetwear subculture and cryptographic on-chain provenance.
        </p>
      </div>

      {/* Manifesto Body */}
      <div className="space-y-12 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed w-full">
        <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase tracking-wide">
            Subterranean Luxury
          </h2>
          <p className="text-base text-white leading-relaxed">
            <strong className="text-electricYellow">OV3RSIZ3D</strong> is an exclusive phygital luxury streetwear collective established on Robinhood Chain (Arbitrum Orbit L2). Each of the 2,222 digital tokens is paired 1:1 with physical cut-and-sew heavyweight garments engineered with embedded cryptographic NFC chips.
          </p>
          <p className="text-neutral-400">
            We discard standard neo-banking aesthetics and generic corporate avatars in favor of aggressive, tactical high-contrast Brutalism. We build for the night, for the subterranean clubs of Neo-Tokyo, for the rain-slicked asphalt of Berlin.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#0d0d0d] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 border border-electricYellow bg-black flex items-center justify-center text-electricYellow mb-2">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-white uppercase">
              500 GSM Portuguese Terry
            </h3>
            <p className="text-neutral-400 text-xs">
              Custom-milled double-faced cotton heavyweight fleece crafted in Guimarães, Portugal. Extreme dropped shoulders, reinforced ribbed cuffs, and oversized cowl neck hood construction.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 border border-signalGreen bg-black flex items-center justify-center text-signalGreen mb-2">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-white uppercase">
              NFC Microchip Authentication
            </h3>
            <p className="text-neutral-400 text-xs">
              Every physical garment features an encrypted waterproof NFC microchip sewn into the neck collar seam. Tap with any smartphone to instantly prove 1:1 ownership on-chain.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 border border-electricYellow bg-black flex items-center justify-center text-electricYellow mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-white uppercase">
              Robinhood Chain (Orbit L2)
            </h3>
            <p className="text-neutral-400 text-xs">
              Arbitrum Orbit Layer 2 architecture providing sub-second finality, gas-subsidized transactions, and zero congestion spikes during high-demand mint releases.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/10 p-6 space-y-3">
            <div className="w-10 h-10 border border-signalGreen bg-black flex items-center justify-center text-signalGreen mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-white uppercase">
              The Fitting Room App
            </h3>
            <p className="text-neutral-400 text-xs">
              Future digital twin app sharing the same domain. Holders can import their tokens to style 3D avatars, unlock AR camera lens integrations, and order capsule drops.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-[#080808] border border-electricYellow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline font-bold text-xl text-white uppercase">
              Join the Clearance Queue
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Verify your wallet for Phase 1 Guaranteed or Phase 2 Waitlist allocation.
            </p>
          </div>
          <Link
            href="/allowlist"
            className="clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-sm px-8 py-3.5 uppercase tracking-wider transition-all shrink-0 flex items-center gap-2"
          >
            <span>Check Clearance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
