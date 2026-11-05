"use client";

import React from "react";
import Link from "next/link";
import { GlitchWordmark } from "./GlitchWordmark";
import { ArrowUpRight } from "lucide-react";

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
          <p className="text-neutral-400 max-w-sm mt-1">
            2,222 hooded entities on Robinhood Chain.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 uppercase tracking-wider text-xs">
          <Link href="/" className="hover:text-electricYellow transition-colors">
            Home
          </Link>
          <Link href="/#field-guide" className="hover:text-electricYellow transition-colors">
            Field Guide
          </Link>
          <Link href="/#roadmap" className="hover:text-electricYellow transition-colors">
            Roadmap
          </Link>
          <Link href="/mint" className="hover:text-electricYellow transition-colors">
            Mint
          </Link>
          <Link href="/allowlist" className="hover:text-electricYellow transition-colors">
            Allowlist
          </Link>
          <Link href="/about" className="hover:text-electricYellow transition-colors">
            About
          </Link>
          <a
            href="https://x.com/oversizednft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-electricYellow transition-colors"
          >
            X
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-600">
        <p>© 2026 OVERSIZEDNFT</p>
      </div>
    </footer>
  );
}
