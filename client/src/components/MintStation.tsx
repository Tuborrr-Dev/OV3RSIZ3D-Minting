"use client";

import React, { useState, useEffect } from "react";
import { useWeb3 } from "@/lib/web3-context";
import { PHASES, TOTAL_SUPPLY } from "@/lib/constants";
import { Zap, Clock, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink, RefreshCw } from "lucide-react";

export function MintStation() {
  const {
    isConnected,
    connectDemoWallet,
    currentPhase,
    setCurrentPhaseId,
    mintedCount,
    userTokensHeld,
    quantity,
    incrementQuantity,
    decrementQuantity,
    unitPriceEth,
    totalPriceEth,
    isMinting,
    mintSuccessTx,
    mintError,
    executeMint,
    clearMintStatus,
  } = useWeb3();

  // Simulated live countdown timer to next phase
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 22, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progressPercent = Math.min(100, Number(((mintedCount / TOTAL_SUPPLY) * 100).toFixed(1)));

  return (
    <section id="mint-station" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header with Phase Timeline Selector */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
            <span className="w-2 h-2 bg-electricYellow inline-block" />
            <span>{"[SEC_04 // TERMINAL EXECUTION]"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-white">
            Mint Station
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
            Contract verified on Robinhood Chain Arbitrum Orbit L2. Instant finality with programmatic ERC-721A batch optimization.
          </p>
        </div>

        {/* Phase Selector & Timeline */}
        <div className="flex flex-wrap gap-2">
          {PHASES.map((phase) => {
            const isSelected = phase.id === currentPhase.id;
            return (
              <button
                key={phase.id}
                onClick={() => {
                  setCurrentPhaseId(phase.id);
                  clearMintStatus();
                }}
                className={`px-3 py-2 border font-mono text-xs uppercase transition-all flex flex-col items-start ${
                  isSelected
                    ? "bg-[#181818] border-electricYellow text-electricYellow shadow-[0_0_15px_rgba(252,238,84,0.25)]"
                    : "bg-[#080808] border-white/10 text-neutral-400 hover:border-white/30"
                }`}
              >
                <span className="text-[10px] text-neutral-500 font-bold">{phase.label}</span>
                <span className="font-bold">{phase.name}</span>
                <span className="text-[10px] text-signalGreen mt-0.5">
                  {phase.status === "LIVE" ? "● ACTIVE NOW" : phase.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Minting Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#080808] border border-electricYellow p-6 sm:p-8 relative shadow-[0_0_35px_rgba(252,238,84,0.12)] clip-card-notch">
          {/* Diagnostic status bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-electricYellow" />
              <span className="font-headline font-bold text-lg uppercase text-white">
                {currentPhase.name}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-signalGreen animate-ping" />
              <span className="text-signalGreen font-bold">ONLINE</span>
            </div>
          </div>

          {/* Supply progress */}
          <div className="py-6 space-y-3">
            <div className="flex justify-between items-center font-mono text-xs sm:text-sm">
              <span className="text-neutral-400">TOTAL ALLOCATED:</span>
              <span className="text-electricYellow font-bold">
                {mintedCount.toLocaleString()} / {TOTAL_SUPPLY.toLocaleString()} MINTED ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-3 bg-black border border-white/15 p-0.5">
              <div
                className="h-full bg-electricYellow shadow-[0_0_12px_#FCEE54] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Interactive Quantity Selector */}
          <div className="bg-black border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-neutral-400 uppercase block mb-1">
                SELECT QUANTITY
              </span>
              <span className="font-mono text-xs text-white">
                MAX {currentPhase.maxPerWallet} PER WALLET IN {currentPhase.label}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementQuantity}
                disabled={quantity <= 1 || isMinting}
                className="w-10 h-10 bg-[#0d0d0d] border border-white/20 hover:border-electricYellow text-electricYellow font-bold text-lg flex items-center justify-center transition-colors disabled:opacity-40"
              >
                -
              </button>
              <span className="font-mono text-xl font-bold text-white px-4 min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                disabled={quantity >= currentPhase.maxPerWallet || isMinting}
                className="w-10 h-10 bg-[#0d0d0d] border border-white/20 hover:border-electricYellow text-electricYellow font-bold text-lg flex items-center justify-center transition-colors disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          {/* Price Calculation */}
          <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-sm mb-6">
            <div className="flex justify-between text-neutral-400">
              <span>UNIT PRICE:</span>
              <span className="text-white">
                {unitPriceEth === 0 ? "FREE MINT" : `${unitPriceEth} ETH`}
              </span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>ESTIMATED GAS:</span>
              <span className="text-signalGreen">&lt; 0.0001 ETH (ROBINHOOD L2)</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-white/10 text-white">
              <span>TOTAL COST:</span>
              <span className="text-electricYellow">
                {totalPriceEth === 0 ? "FREE" : `${totalPriceEth} ETH`}
              </span>
            </div>
          </div>

          {/* "You Hold" Line Required by AGENTS.md Section 7 */}
          <div className="bg-[#0d0d0d] border border-white/10 px-4 py-3 mb-6 flex items-center justify-between font-mono text-xs">
            <span className="text-neutral-300">YOU HOLD:</span>
            <span className="text-electricYellow font-bold text-sm">
              {userTokensHeld} OV3RSIZ3D
            </span>
          </div>

          {/* Error Message */}
          {mintError && (
            <div className="mb-4 p-3 bg-signalRed/10 border border-signalRed text-signalRed font-mono text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{mintError}</span>
            </div>
          )}

          {/* Primary Action Button */}
          {!isConnected ? (
            <button
              onClick={connectDemoWallet}
              className="w-full clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-base py-4 uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(252,238,84,0.3)] flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              <span>CONNECT WALLET TO MINT</span>
            </button>
          ) : (
            <button
              onClick={executeMint}
              disabled={isMinting}
              className="w-full clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-base py-4 uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(252,238,84,0.4)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isMinting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>BROADCASTING TO ROBINHOOD NODE...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>MINT SPECIMEN NOW</span>
                </>
              )}
            </button>
          )}

          {/* Success Notification Alert */}
          {mintSuccessTx && (
            <div className="mt-4 p-4 bg-signalGreen/10 border border-signalGreen text-signalGreen font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>MINT CONFIRMED ON ROBINHOOD CHAIN!</span>
              </div>
              <p className="text-white text-[11px]">
                Your extraterrestrial specimen has been minted and minted count updated.
              </p>
              <div className="flex items-center gap-1 text-[11px] text-electricYellow hover:underline cursor-pointer">
                <span>TX: {mintSuccessTx.slice(0, 16)}...{mintSuccessTx.slice(-8)}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          )}
        </div>

        {/* Phase Specs & Countdown Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Phase Countdown Box */}
          <div className="bg-[#080808] border border-white/10 p-6">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase pb-3 border-b border-white/10 mb-4">
              <Clock className="w-4 h-4 text-electricYellow" />
              <span>NEXT PHASE INITIATION COUNTDOWN</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center font-mono">
              <div className="bg-black/60 border border-white/5 p-3">
                <span className="text-2xl sm:text-3xl font-bold text-electricYellow block">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-neutral-400">HOURS</span>
              </div>
              <div className="bg-black/60 border border-white/5 p-3">
                <span className="text-2xl sm:text-3xl font-bold text-electricYellow block">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-neutral-400">MINUTES</span>
              </div>
              <div className="bg-black/60 border border-white/5 p-3">
                <span className="text-2xl sm:text-3xl font-bold text-electricYellow block">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-neutral-400">SECONDS</span>
              </div>
            </div>
          </div>

          {/* Phase Matrix Details */}
          <div className="bg-[#080808] border border-white/10 p-6 space-y-4 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block">
              PHASE CLEARANCE SPECS
            </span>

            <div className="space-y-3">
              <div className="p-3 bg-[#0d0d0d] border border-white/5">
                <div className="flex justify-between text-electricYellow font-bold">
                  <span>TEAM ALLOCATION</span>
                  <span>22 TOKENS</span>
                </div>
                <p className="text-neutral-400 text-[11px] mt-1">
                  Owner-only hardcap, counted inside total 2,222 supply.
                </p>
              </div>

              <div className="p-3 bg-[#0d0d0d] border border-white/5">
                <div className="flex justify-between text-signalGreen font-bold">
                  <span>GUARANTEED (GTD)</span>
                  <span>1 PER WALLET</span>
                </div>
                <p className="text-neutral-400 text-[11px] mt-1">
                  Requires backend EIP-712 cryptographic signed voucher.
                </p>
              </div>

              <div className="p-3 bg-[#0d0d0d] border border-white/5">
                <div className="flex justify-between text-white font-bold">
                  <span>FCFS ALLOWLIST</span>
                  <span>1 PER WALLET</span>
                </div>
                <p className="text-neutral-400 text-[11px] mt-1">
                  Competitive queue with backend verification.
                </p>
              </div>

              <div className="p-3 bg-[#0d0d0d] border border-white/5">
                <div className="flex justify-between text-white font-bold">
                  <span>PUBLIC MINT</span>
                  <span>2 PER WALLET</span>
                </div>
                <p className="text-neutral-400 text-[11px] mt-1">
                  Open to all Robinhood Chain wallets until 2,222 max supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
