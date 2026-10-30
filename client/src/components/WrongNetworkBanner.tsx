"use client";

import React from "react";
import { useWeb3 } from "@/lib/web3-context";
import { AlertTriangle, ArrowRightLeft } from "lucide-react";

export function WrongNetworkBanner() {
  const { isWrongNetwork, switchToRobinhood } = useWeb3();

  if (!isWrongNetwork) return null;

  return (
    <div className="w-full bg-signalRed text-white py-2.5 px-4 sticky top-0 z-50 border-b border-black/30 shadow-[0_0_20px_rgba(232,56,79,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2.5 font-mono">
          <AlertTriangle className="w-5 h-5 animate-pulse text-white shrink-0" />
          <span className="font-bold tracking-wide">
            [UNSUPPORTED NETWORK] You are connected to an external chain.
          </span>
          <span className="hidden md:inline text-white/80">
            Switch to Robinhood Chain to access gas-subsidized minting.
          </span>
        </div>
        <button
          onClick={switchToRobinhood}
          className="flex items-center gap-2 bg-black hover:bg-white text-white hover:text-black font-mono font-bold text-xs uppercase px-4 py-1.5 transition-colors border border-white/20"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>Switch Network</span>
        </button>
      </div>
    </div>
  );
}
