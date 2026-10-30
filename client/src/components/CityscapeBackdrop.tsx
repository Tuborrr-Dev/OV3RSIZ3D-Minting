"use client";

import React from "react";

export function CityscapeBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-black">
      {/* 1. Pure Pitch Black Void */}
      <div className="absolute inset-0 bg-black" />

      {/* 2. Continuous Drone Reconnaissance Aerial Cityscape Silhouette (True Noir Blacks) */}
      <div className="absolute inset-0 drone-cam">
        <svg
          className="absolute bottom-0 w-full h-[85vh] min-h-[550px] object-cover opacity-70"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Far backdrop towers */}
          <rect fill="#050505" height="820" opacity="0.95" width="190" x="0" y="80" />
          <rect fill="#050505" height="820" opacity="0.95" width="190" x="1250" y="80" />
          <rect fill="#080808" height="720" opacity="0.95" width="95" x="150" y="180" />
          <rect fill="#080808" height="720" opacity="0.95" width="95" x="1195" y="180" />

          {/* Center backdrop angled structures */}
          <rect fill="#060606" height="380" opacity="0.98" width="620" x="410" y="520" />
          <polygon fill="#0a0a0a" points="530,520 575,480 865,480 910,520" />
          <polygon fill="#040404" points="610,480 655,420 785,420 830,480" />

          {/* Left Industrial Cyber Columns & Spire antennas */}
          <g fill="#080808" stroke="#141414" strokeWidth="2">
            <rect height="760" width="150" x="40" y="140" />
            <rect height="40" width="30" x="70" y="100" />
            {/* Blinking Data nodes */}
            <g fill="#00E599" opacity="0.4">
              <rect height="10" width="2" x="60" y="170" />
              <rect height="10" width="2" x="75" y="170" />
              <rect height="10" width="2" x="90" y="170" />
              <rect height="10" width="2" x="110" y="170" />
              <rect height="10" width="2" x="130" y="170" />
              <rect height="14" width="2" x="60" y="210" />
              <rect height="14" width="2" x="75" y="210" />
              <rect height="14" width="2" x="90" y="210" />
              <rect height="14" width="2" x="60" y="270" />
              <rect height="20" width="2" x="60" y="370" />
              <rect height="20" width="2" x="75" y="370" />
              <rect height="15" width="2" x="60" y="470" />
              <rect height="15" width="2" x="75" y="550" />
            </g>
            <rect fill="#030303" height="30" width="20" x="25" y="280" />
            <rect fill="#030303" height="60" width="20" x="25" y="390" />
            <rect fill="#030303" height="140" width="15" x="180" y="220" />
          </g>

          {/* Right Industrial Cyber Columns */}
          <g fill="#080808" stroke="#141414" strokeWidth="2">
            <rect height="760" width="150" x="1250" y="140" />
            <rect height="40" width="30" x="1340" y="100" />
            {/* Windows & telemetry nodes */}
            <g fill="#00E599" opacity="0.4">
              <rect height="10" width="2" x="1280" y="170" />
              <rect height="10" width="2" x="1295" y="170" />
              <rect height="10" width="2" x="1310" y="170" />
              <rect height="14" width="2" x="1280" y="220" />
              <rect height="14" width="2" x="1295" y="220" />
              <rect height="20" width="2" x="1280" y="360" />
              <rect height="20" width="2" x="1360" y="360" />
              <rect height="15" width="2" x="1280" y="520" />
            </g>
            <rect fill="#030303" height="120" width="18" x="1235" y="220" />
            <rect fill="#030303" height="50" width="20" x="1390" y="290" />
          </g>

          {/* Heavy Infrastructure Beams & Trusses */}
          <rect fill="#060606" height="18" width="1040" x="200" y="650" />
          <rect fill="#040404" height="24" width="880" x="280" y="700" />
          <polygon fill="#080808" points="600,650 630,760 810,760 840,650" />
        </svg>
      </div>

      {/* 3. Subtle Cyberpunk Atmospheric Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-electricYellow/[0.03] rounded-full blur-[160px]" />

      {/* 4. Deep Pitch Black Radial Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black" />
    </div>
  );
}
