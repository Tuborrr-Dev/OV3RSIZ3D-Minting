"use client";

import React from "react";
import { MintStation } from "@/components/MintStation";
import { LookbookPreview } from "@/components/LookbookPreview";
import { Terminal, Shield, Zap } from "lucide-react";

export default function MintPage() {
  return (
    <div className="w-full flex flex-col items-center pt-8 sm:pt-14">
      {/* Top Breadcrumb Header */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
          <span>HOME</span>
          <span>/</span>
          <span className="text-electricYellow">MINT TERMINAL</span>
        </div>
      </div>

      {/* Main Interactive Mint Station */}
      <MintStation />

      {/* Lookbook Specs Below */}
      <LookbookPreview />
    </div>
  );
}
