"use client";

import React, { useRef, useState } from "react";
import { GlitchWordmark } from "@/components/GlitchWordmark";
import { RotatingStar } from "@/components/RotatingStar";
import { CityscapeBackdrop } from "@/components/CityscapeBackdrop";
import { ScanlineGlitchScanner } from "@/components/ScanlineGlitchScanner";
import { FieldGuide } from "@/components/field-guide/FieldGuide";
import { LookbookPreview } from "@/components/LookbookPreview";
import { MintStation } from "@/components/MintStation";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { AudioToggle } from "@/components/AudioToggle";
import { useWeb3 } from "@/lib/web3-context";
import { Zap, ShieldCheck, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const {
    executeMint,
    isMinting,
    mintSuccessTx,
    mintError,
    runEligibilityCheck,
    checkStatus,
    isDemoMode,
  } = useWeb3();

  // Quick-mint local quantity state (for demo mode)
  const [quickQty, setQuickQty] = useState(1);
  const quickUnitPrice = 0.045;
  const quickTotal = (quickQty * quickUnitPrice).toFixed(3);

  // Gateway check local input
  const [gatewayInput, setGatewayInput] = useState("");

  const handleGatewayCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDemoMode) return;
    runEligibilityCheck(gatewayInput);
  };

  return (
    <div className="relative flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        ref={heroRef}
        className="scroll-mt-24 relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Cityscape Backdrop */}
        <CityscapeBackdrop />

        {/* Interactive Laser Scanline Collision Scanner */}
        <ScanlineGlitchScanner containerRef={heroRef} />

        {/* Ambient Sound Control (Bottom Left) */}
        <div data-glitch-target="text" className="absolute bottom-6 left-6 z-30 transition-transform">
          <AudioToggle />
        </div>

        {/* Live Telemetry Status Ticker */}
        <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mb-6 font-mono text-xs">
          <div data-glitch-target="text" className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border border-electricYellow text-electricYellow transition-transform">
            <span className="w-2 h-2 rounded-full bg-electricYellow" />
            <span>[MINT DATE: TBA]</span>
          </div>
          <div data-glitch-target="text" className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border border-signalGreen/40 text-signalGreen transition-transform">
            <span className="w-1.5 h-1.5 bg-signalGreen" />
            <span>[ARRIVAL PHASE IN PROGRESS]</span>
          </div>
        </div>

        {/* Wireframe Cage & Hero Typography Anchor */}
        <div className="relative z-20 w-full max-w-4xl py-14 sm:py-20 md:py-24 overflow-visible">
          {/* Rotating Geometric Star Backdrop */}
          <RotatingStar />

          {/* Crosshair Corner Brackets */}
          <div data-glitch-target="text" className="absolute top-0 left-2 sm:left-4 text-electricYellow font-mono text-xs opacity-60 select-none transition-transform">
            ┌ [SEC_001]
          </div>
          <div data-glitch-target="text" className="absolute top-0 right-2 sm:right-4 text-electricYellow font-mono text-xs opacity-60 select-none transition-transform">
            [TERMINAL_VIEW] ┐
          </div>
          <div data-glitch-target="text" className="absolute bottom-0 left-2 sm:left-4 text-electricYellow font-mono text-xs opacity-60 select-none transition-transform">
            └ LAT: 35.6762°N
          </div>
          <div data-glitch-target="text" className="absolute bottom-0 right-2 sm:right-4 text-electricYellow font-mono text-xs opacity-60 select-none transition-transform">
            LNG: 139.6503°E ┘
          </div>

          {/* Massive Glitch Headline */}
          <GlitchWordmark size="hero" />

          <p data-glitch-target="text" className="mt-4 font-headline font-semibold text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto uppercase tracking-wide transition-transform">
            2,222 Hooded Extraterrestrials in Oversized Silhouettes
          </p>
          <p data-glitch-target="text" className="font-mono text-xs sm:text-sm text-electricYellow mt-2 tracking-widest uppercase transition-transform">
            {"// SECURED ON ROBINHOOD CHAIN"}
          </p>
        </div>

        {/* Interactive Hero Dual-Panel: Quick-Mint & Allowlist Verification */}
        <div className="relative z-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left font-mono">
          {/* Quick-Mint Module */}
          <div data-glitch-target="card" className="bg-[#080808] border border-electricYellow p-6 relative group shadow-[0_0_20px_rgba(252,238,84,0.15)] clip-card-notch flex flex-col justify-between transition-all">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <span data-glitch-target="text" className="text-[11px] text-neutral-400 block uppercase transition-transform">
                    TRANSACTION EXECUTION
                  </span>
                  <h3 data-glitch-target="text" className="font-headline font-bold text-base sm:text-lg text-white transition-transform">
                    PUBLIC ALLOCATION
                  </h3>
                </div>
                <span data-glitch-target="text" className="px-2 py-1 bg-[#0d0d0d] border border-white/15 text-neutral-300 text-xs uppercase font-bold transition-transform">
                  {isDemoMode ? "0.045 ETH / MINT" : "TBA"}
                </span>
              </div>

              <div className="py-5 flex items-center justify-between">
                <div className="space-y-1">
                  <span data-glitch-target="text" className="text-xs text-neutral-400">QUANTITY:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      data-glitch-target="text"
                      onClick={() => setQuickQty(Math.max(1, quickQty - 1))}
                      disabled={!isDemoMode || quickQty <= 1 || isMinting}
                      className="w-8 h-8 bg-[#0d0d0d] border border-white/20 hover:border-electricYellow text-white font-bold flex items-center justify-center text-sm transition-all disabled:opacity-40"
                    >
                      -
                    </button>
                    <span data-glitch-target="text" className="text-base text-electricYellow font-bold px-2">
                      {quickQty}
                    </span>
                    <button
                      type="button"
                      data-glitch-target="text"
                      onClick={() => setQuickQty(Math.min(3, quickQty + 1))}
                      disabled={!isDemoMode || quickQty >= 3 || isMinting}
                      className="w-8 h-8 bg-[#0d0d0d] border border-white/20 hover:border-electricYellow text-white font-bold flex items-center justify-center text-sm transition-all disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span data-glitch-target="text" className="text-xs text-neutral-400 block">TOTAL FEE:</span>
                  <span data-glitch-target="text" className="font-headline text-lg sm:text-xl text-electricYellow font-bold">
                    {isDemoMode ? `${quickTotal} ETH` : "TBA"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              {mintError && (
                <div className="mb-3 text-[11px] text-signalRed flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{mintError}</span>
                </div>
              )}
              {mintSuccessTx && (
                <div className="mb-3 text-[11px] text-signalGreen flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>TX: {mintSuccessTx.slice(0, 10)}... confirmed!</span>
                </div>
              )}
              {!isDemoMode ? (
                <button
                  type="button"
                  disabled
                  className="w-full clip-chamfer-btn bg-neutral-800 text-neutral-500 font-headline text-sm font-bold tracking-widest py-3.5 flex items-center justify-center gap-2 cursor-not-allowed"
                >
                  <span>MINT NOT LIVE</span>
                </button>
              ) : (
                <button
                  type="button"
                  data-glitch-target="text"
                  onClick={executeMint}
                  disabled={isMinting}
                  className="w-full clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline text-sm font-bold tracking-widest py-3.5 flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(252,238,84,0.3)] disabled:opacity-50 active:scale-95"
                >
                  {isMinting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>BROADCASTING...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-current" />
                      <span>EXECUTE INSTANT MINT</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Allowlist Verification Bar */}
          <div data-glitch-target="card" className="bg-[#080808] border border-white/15 hover:border-electricYellow/40 transition-all p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <span data-glitch-target="text" className="text-[11px] text-neutral-400 block uppercase transition-transform">
                    PROOF-OF-HOOD ACCESS
                  </span>
                  <h3 data-glitch-target="text" className="font-headline font-bold text-base sm:text-lg text-white transition-transform">
                    GATEWAY CHECK
                  </h3>
                </div>
                <span data-glitch-target="text" className="px-2 py-1 bg-[#0d0d0d] border border-white/15 text-neutral-300 text-xs font-bold transition-transform">
                  TIER 1 &amp; 2
                </span>
              </div>

              {/* Quick check field */}
              <form onSubmit={handleGatewayCheck} className="mt-4 relative">
                <input
                  data-glitch-target="text"
                  type="text"
                  disabled={!isDemoMode}
                  value={gatewayInput}
                  onChange={(e) => setGatewayInput(e.target.value)}
                  className="w-full bg-black border border-white/20 focus:border-electricYellow text-white font-mono text-xs px-3 py-2.5 outline-none tracking-wider placeholder:text-neutral-600 transition-all disabled:opacity-50"
                  placeholder="0x..."
                />
              </form>

              {/* Inline feedback tag */}
              {isDemoMode && checkStatus === "ELIGIBLE_GTD" && (
                <div data-glitch-target="text" className="mt-2 text-[11px] text-signalGreen font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ELIGIBLE (PHASE 1 GUARANTEED: 1 ALLOCATION)</span>
                </div>
              )}
              {isDemoMode && checkStatus === "ELIGIBLE_FCFS" && (
                <div data-glitch-target="text" className="mt-2 text-[11px] text-electricYellow font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ELIGIBLE (PHASE 2 WAITLIST FCFS)</span>
                </div>
              )}
              {isDemoMode && checkStatus === "NOT_ELIGIBLE" && (
                <div data-glitch-target="text" className="mt-2 text-[11px] text-signalRed flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>NOT FOUND ON ALLOWLIST (OPEN IN PUBLIC)</span>
                </div>
              )}
            </div>

            <button
              type="button"
              data-glitch-target="text"
              onClick={() => runEligibilityCheck(gatewayInput)}
              disabled={!isDemoMode || checkStatus === "CHECKING"}
              className="mt-5 w-full clip-chamfer-reverse border border-electricYellow text-electricYellow hover:bg-electricYellow/15 font-headline text-sm font-bold tracking-widest py-3 flex items-center justify-center gap-2 transition-all disabled:opacity-50 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-signalGreen" />
              <span>
                {!isDemoMode ? "ALLOWLIST OPENS SOON" : checkStatus === "CHECKING" ? "VERIFYING..." : "VERIFY WALLET REGISTRATION"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CYBERPUNK ANGULAR NOTCHED DIVIDER: THE EDITION */}
      <div className="w-full relative border-y border-white/10 bg-black py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-4 text-electricYellow font-bold tracking-widest">
            <span className="px-2 py-0.5 bg-electricYellow text-black font-bold text-[11px]">
              SEC // 01
            </span>
            <span className="uppercase">THE EDITION</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-neutral-400">
            <span>COORD: 35.6762° N / 139.6503° E</span>
            <span className="text-signalGreen">STATUS: NORMAL</span>
          </div>
        </div>
      </div>

      {/* 3. COLLECTION METRICS & SPECIFICATIONS HUD */}
      <section className="w-full bg-black border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">SUPPLY</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-white">2,222</span>
            <span className="text-[10px] text-signalGreen block">100% PROGRAMMATIC HARDCAP</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">MINT DATE</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-electricYellow">TBA</span>
            <span className="text-[10px] text-neutral-400 block uppercase">PLANNED FOR Q4 2026</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">MINT PRICE</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-white">TBA</span>
            <span className="text-[10px] text-neutral-400 block">TO BE ANNOUNCED</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">CHAIN</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-signalGreen">ROBINHOOD CHAIN</span>
            <span className="text-[10px] text-neutral-400 block uppercase">ARBITRUM ORBIT L2</span>
          </div>
        </div>
      </section>

      {/* FIELD GUIDE Section */}
      <FieldGuide />

      {/* 4. SNEAK PEEKS LOOKBOOK */}
      <LookbookPreview />

      {/* 5. INTERACTIVE MINT STATION */}
      <MintStation />

      {/* 6. ROADMAP */}
      <Roadmap />

      {/* 7. FAQ */}
      <FAQ />
    </div>
  );
}
