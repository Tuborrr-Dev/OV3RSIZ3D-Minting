"use client";

import React from "react";
import { AllowlistChecker } from "@/components/AllowlistChecker";
import { FAQ } from "@/components/FAQ";

export default function AllowlistPage() {
  return (
    <div className="w-full flex flex-col items-center pt-8 sm:pt-14">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
          <span>HOME</span>
          <span>/</span>
          <span className="text-electricYellow">ALLOWLIST VERIFICATION</span>
        </div>
      </div>

      {/* Main Allowlist Checker Component */}
      <AllowlistChecker />

      {/* Related FAQ */}
      <FAQ />
    </div>
  );
}
