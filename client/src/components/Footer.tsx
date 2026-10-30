"use client";

import React from "react";
import Link from "next/link";
import { GlitchWordmark } from "./GlitchWordmark";
import { Shield, Terminal, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 mt-24 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-electricYellow/60 flex items-center justify-center bg-black">
              <span className="text-[10px] text-electricYellow font-bold">Z</span>
            </div>
            <GlitchWordmark size="compact" />
          </div>
          <p className="text-neutral-500 max-w-sm mt-1">
            2,222 Hooded Extraterrestrials engineered in heavyweight silhouettes. Secured on Robinhood Chain Arbitrum Orbit L2.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-2">
            <span className="flex items-center gap-1 text-signalGreen">
              <span className="w-1.5 h-1.5 rounded-full bg-signalGreen animate-ping" />
              CONTRACT VERIFIED
            </span>
            <span>•</span>
            <span>ERC-721A OPTIMIZED</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 uppercase tracking-wider text-xs">
          <Link href="/#hero" className="hover:text-electricYellow transition-colors">
            Diagnostics
          </Link>
          <Link href="/mint" className="hover:text-electricYellow transition-colors">
            Mint Terminal
          </Link>
          <Link href="/allowlist" className="hover:text-electricYellow transition-colors">
            Allowlist
          </Link>
          <Link href="/about" className="hover:text-electricYellow transition-colors">
            Manifesto
          </Link>
          <a
            href="https://robinhood.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-electricYellow transition-colors"
          >
            Robinhood Chain
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-600">
        <p>© 2026 OV3RSIZ3D PROTOCOL. ALL RIGHTS RESERVED.</p>
        <p className="tracking-widest">{"SUBTERRANEAN DIGITAL LUXURY // RUN 01"}</p>
      </div>
    </footer>
  );
}
