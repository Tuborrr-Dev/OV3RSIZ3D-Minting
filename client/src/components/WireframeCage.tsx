"use client";

import React from "react";

export function WireframeCage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1 overflow-hidden">
      {/* Chalk Graffiti Anarchy Halo Symbol Behind Logo */}
      <div className="absolute z-0 flex items-center justify-center opacity-75">
        <svg
          className="w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] text-white opacity-85"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="chalk-filter">
            <feTurbulence baseFrequency="0.05" numOctaves="4" result="noise" type="fractalNoise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <g filter="url(#chalk-filter)">
            {/* Distressed Chalk Outer Ring */}
            <circle
              cx="200"
              cy="200"
              fill="none"
              opacity="0.95"
              r="140"
              stroke="#ffffff"
              strokeDasharray="14 8 20 6 30 12"
              strokeLinecap="round"
              strokeWidth="24"
            />
            {/* Crossbar / Inverted Anarchy-A Chalk Strokes */}
            <line
              opacity="0.9"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeWidth="22"
              x1="75"
              x2="325"
              y1="130"
              y2="270"
            />
            <line
              opacity="0.9"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeWidth="22"
              x1="110"
              x2="290"
              y1="270"
              y2="130"
            />
            <line
              opacity="0.9"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeWidth="20"
              x1="60"
              x2="340"
              y1="200"
              y2="200"
            />
          </g>
        </svg>
      </div>

      {/* Polygonal Wireframe Cage (Electric Yellow #FCEE54) */}
      <div className="floating-cage w-full max-w-[1300px] h-[85vh] max-h-[750px] flex items-center justify-center opacity-90">
        <svg
          className="cage-anim w-full h-full"
          fill="none"
          viewBox="0 0 1000 650"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer polygonal facet frame */}
          <polygon
            points="340,35 660,35 845,150 900,480 770,615 230,615 100,480 155,150"
            stroke="#FCEE54"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          {/* Interior 3D faceted geometry lines */}
          <line opacity="0.9" stroke="#FCEE54" strokeWidth="2.2" x1="340" x2="230" y1="35" y2="615" />
          <line opacity="0.9" stroke="#FCEE54" strokeWidth="2.2" x1="660" x2="770" y1="35" y2="615" />
          <line opacity="0.6" stroke="#FCEE54" strokeWidth="1.6" x1="155" x2="770" y1="150" y2="615" />
          <line opacity="0.6" stroke="#FCEE54" strokeWidth="1.6" x1="845" x2="230" y1="150" y2="615" />
          <line opacity="0.5" stroke="#FCEE54" strokeWidth="1.5" x1="100" x2="660" y1="480" y2="35" />
          <line opacity="0.5" stroke="#FCEE54" strokeWidth="1.5" x1="900" x2="340" y1="480" y2="35" />
          {/* Horizontal chords */}
          <line opacity="0.35" stroke="#FCEE54" strokeWidth="1.2" x1="155" x2="845" y1="150" y2="150" />
          <line opacity="0.35" stroke="#FCEE54" strokeWidth="1.2" x1="100" x2="900" y1="480" y2="480" />
        </svg>
      </div>
    </div>
  );
}
