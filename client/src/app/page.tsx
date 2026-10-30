"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { CityscapeBackdrop } from "@/components/CityscapeBackdrop";
import { RotatingStar } from "@/components/RotatingStar";
import { GlitchWordmark } from "@/components/GlitchWordmark";
import { AudioToggle } from "@/components/AudioToggle";
import { ScanlineGlitchScanner } from "@/components/ScanlineGlitchScanner";
import { LookbookPreview } from "@/components/LookbookPreview";
import { MintStation } from "@/components/MintStation";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { useWeb3 } from "@/lib/web3-context";
import { Zap, ShieldCheck, Lock, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const {
    executeMint,
    isMinting,
    mintSuccessTx,
    mintError,
    runEligibilityCheck,
    checkStatus,
  } = useWeb3();

  // Quick-mint local quantity state
  const [quickQty, setQuickQty] = useState(1);
  const quickUnitPrice = 0.045;
  const quickTotal = (quickQty * quickUnitPrice).toFixed(3);

  // Gateway check local input
  const [gatewayInput, setGatewayInput] = useState("");

  const handleGatewayCheck = (e: React.FormEvent) => {
    e.preventDefault();
    runEligibilityCheck(gatewayInput);
  };

  return (
    <div className="relative flex flex-col w-full">
      {/* 1. HERO SECTION (Exact replication from ov3rsiz3d_desktop_web3_experience/code.html & screenshot) */}
      <section
        id="hero"
        ref={heroRef}
        className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Cityscape & Cyber Grid Backdrop */}
        <CityscapeBackdrop />

        {/* Interactive Laser Scanline Collision Scanner */}
        <ScanlineGlitchScanner containerRef={heroRef} />

        {/* Ambient Sound Control (Bottom Left) */}
        <div data-glitch-target="text" className="absolute bottom-6 left-6 z-30 transition-transform">
          <AudioToggle />
        </div>

        {/* Live Telemetry Status Ticker */}
        <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mb-6 font-mono text-xs">
          <div data-glitch-target="text" className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border border-signalRed text-signalRed transition-transform">
            <span className="w-2 h-2 rounded-full bg-signalRed animate-ping" />
            <span>[PHASE 1: GUARANTEED MINT LIVE]</span>
          </div>
          <div data-glitch-target="text" className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border border-signalGreen/40 text-signalGreen transition-transform">
            <span className="w-1.5 h-1.5 bg-signalGreen" />
            <span>[ALLOWLIST TIER 1 VERIFIED]</span>
          </div>
          <div data-glitch-target="text" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-white/10 text-neutral-400 transition-transform">
            <Lock className="w-3 h-3 text-electricYellow" />
            <span>CONTRACT: 0x8F9C...2222</span>
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
                <span data-glitch-target="text" className="px-2 py-1 bg-[#0d0d0d] border border-signalGreen/30 text-signalGreen text-xs uppercase font-bold transition-transform">
                  0.045 ETH / MINT
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
                      disabled={quickQty <= 1 || isMinting}
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
                      disabled={quickQty >= 3 || isMinting}
                      className="w-8 h-8 bg-[#0d0d0d] border border-white/20 hover:border-electricYellow text-white font-bold flex items-center justify-center text-sm transition-all disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span data-glitch-target="text" className="text-xs text-neutral-400 block">TOTAL FEE:</span>
                  <span data-glitch-target="text" className="font-headline text-lg sm:text-xl text-electricYellow font-bold">
                    {quickTotal} ETH
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

              <p data-glitch-target="text" className="font-body text-xs text-neutral-400 mt-4 leading-relaxed transition-transform">
                Verify extraterrestrial clearance for Robinhood Chain low-latency gas subsidization.
              </p>

              {/* Quick check field */}
              <form onSubmit={handleGatewayCheck} className="mt-4 relative">
                <input
                  data-glitch-target="text"
                  type="text"
                  value={gatewayInput}
                  onChange={(e) => setGatewayInput(e.target.value)}
                  className="w-full bg-black border border-white/20 focus:border-electricYellow text-white font-mono text-xs px-3 py-2.5 outline-none tracking-wider placeholder:text-neutral-600 transition-all"
                  placeholder="0x... or robinhood.eth"
                />
              </form>

              {/* Inline feedback tag */}
              {checkStatus === "ELIGIBLE_GTD" && (
                <div data-glitch-target="text" className="mt-2 text-[11px] text-signalGreen font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ELIGIBLE (PHASE 1 GUARANTEED: 1 ALLOCATION)</span>
                </div>
              )}
              {checkStatus === "ELIGIBLE_FCFS" && (
                <div data-glitch-target="text" className="mt-2 text-[11px] text-electricYellow font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ELIGIBLE (PHASE 2 WAITLIST FCFS)</span>
                </div>
              )}
              {checkStatus === "NOT_ELIGIBLE" && (
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
              disabled={checkStatus === "CHECKING"}
              className="mt-5 w-full clip-chamfer-reverse border border-electricYellow text-electricYellow hover:bg-electricYellow/15 font-headline text-sm font-bold tracking-widest py-3 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-signalGreen" />
              <span>
                {checkStatus === "CHECKING" ? "VERIFYING..." : "VERIFY WALLET REGISTRATION"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CYBERPUNK ANGULAR NOTCHED DIVIDER */}
      <div className="w-full relative border-y border-white/10 bg-black py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-4 text-electricYellow font-bold tracking-widest">
            <span className="px-2 py-0.5 bg-electricYellow text-black font-bold text-[11px]">
              SEC // 01
            </span>
            <span className="uppercase">SYSTEM SPECIFICATIONS &amp; PHYSICAL UTILITY</span>
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
            <span className="text-[11px] text-neutral-400 block uppercase">TOTAL SUPPLY</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-white">2,222</span>
            <span className="text-[10px] text-signalGreen block">100% PROGRAMMATIC HARDCAP</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">TEXTILE WEIGHT</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-electricYellow">500 GSM</span>
            <span className="text-[10px] text-neutral-400 block">DOUBLE-FACED PORTUGUESE TERRY</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">CHAIN ECOSYSTEM</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-white">ROBINHOOD L2</span>
            <span className="text-[10px] text-signalGreen block">{"ARBITRUM ORBIT // 0.001 GWEI"}</span>
          </div>

          <div className="p-4 bg-[#080808] border border-white/5 space-y-1">
            <span className="text-[11px] text-neutral-400 block uppercase">HARDWARE AUTH</span>
            <span className="text-2xl sm:text-3xl font-headline font-bold text-signalGreen">NFC 1:1</span>
            <span className="text-[10px] text-neutral-400 block">ENCRYPTED COLLAR MICROCHIP</span>
          </div>
        </div>
      </section>

      {/* 4. LORE & MANIFESTO BRIEF */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#080808] border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-electricYellow/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-electricYellow tracking-widest uppercase">
                  {"ARCHIVE // 099-B"}
                </span>
                <span className="px-2.5 py-0.5 bg-black text-neutral-400 font-mono text-[10px] border border-white/10">
                  CONFIDENTIAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-headline font-bold text-white uppercase tracking-tight">
                The Invasion in Heavy Cotton
              </h2>
              <p className="font-body text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
                They did not arrive in chrome flying saucers. They walked into neon-washed Shibuya and subterranean Berlin clad in colossal drop-shoulder 500GSM fleece.
              </p>
              <p className="font-body text-neutral-400 text-sm mt-3 leading-relaxed">
                The OV3RSIZ3D entity consists of 2,222 autonomous extraterrestrial specimens hiding their biomechanical features beneath exaggerated proportions, layered balaclavas, and tactical cargo straps. Powered by Robinhood Chain for gas-optimized transactions.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-electricYellow">PROVENANCE GUARANTEED</span>
              <Link href="/about" className="hover:text-white underline text-neutral-400">
                Read Full Manifesto →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#080808] border border-electricYellow p-6 flex-1 flex flex-col justify-between shadow-[0_0_20px_rgba(252,238,84,0.1)]">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-electricYellow font-bold mb-2">
                  <span>SMART CONTRACT ARCHITECTURE</span>
                  <Lock className="w-4 h-4 text-electricYellow" />
                </div>
                <h3 className="font-headline font-bold text-lg text-white uppercase">
                  Robinhood Chain Orbit L2
                </h3>
                <p className="font-mono text-xs text-neutral-300 mt-2 leading-relaxed">
                  Deployed natively to Robinhood EVM. Zero gas spikes during high volume drops, programmatic royalty enforcement via ERC-2981, and EIP-712 cryptographic signature verification.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between font-mono text-xs">
                <span className="text-signalGreen">GAS SUBSIDIZED: YES</span>
                <span className="text-electricYellow">ERC-721A</span>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 font-bold mb-2">
                  <span>DIGITAL-PHYSICAL FORGING</span>
                  <ShieldCheck className="w-4 h-4 text-signalGreen" />
                </div>
                <h3 className="font-headline font-bold text-lg text-white uppercase">
                  Physical Drop Pass
                </h3>
                <p className="font-mono text-xs text-neutral-400 mt-2 leading-relaxed">
                  Holding an OV3RSIZ3D token unlocks token-gated access to claim real-world heavy hooded outerwear produced in Portugal with bespoke distressed hardware.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 font-mono text-xs text-signalGreen flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signalGreen" />
                <span>CAPSULE 01 PRODUCTION READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SNEAK PEEKS LOOKBOOK */}
      <LookbookPreview />

      {/* 6. INTERACTIVE MINT STATION */}
      <MintStation />

      {/* 7. ROADMAP SEQUENCE */}
      <Roadmap />

      {/* 8. FREQUENTLY ANSWERED QUESTIONS */}
      <FAQ />
    </div>
  );
}
