"use client";

import React from "react";

interface DemonWalkerProps {
  isWalking: boolean;
  walkDirection: "down" | "up";
  className?: string;
}

export function DemonWalker({
  isWalking,
  walkDirection,
  className = "",
}: DemonWalkerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: "56px", height: "64px" }}
    >
      {/* Footstep sparks under walker while walking */}
      {isWalking && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 pointer-events-none">
          <span className="w-1 h-1 bg-electricYellow rounded-full animate-ping opacity-80" />
          <span className="w-1.5 h-1.5 bg-signalRed rounded-full animate-pulse opacity-90 shadow-[0_0_6px_#E8384F]" />
          <span className="w-1 h-1 bg-electricYellow rounded-full animate-ping opacity-80" />
        </div>
      )}

      {/* Red ambient ground glow under the demon */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full blur-sm pointer-events-none transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle, rgba(232, 56, 79, 0.6) 0%, rgba(232, 56, 79, 0) 80%)",
          opacity: isWalking ? 0.9 : 0.4,
        }}
      />

      {/* SVG Demon Sprite */}
      <svg
        viewBox="0 0 56 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
          isWalking ? "animate-walker-bob" : ""
        }`}
        style={{
          animationDirection: walkDirection === "up" ? "reverse" : "normal",
        }}
      >
        <defs>
          <linearGradient id="cloakShade" x1="28" y1="6" x2="28" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#18181B" />
            <stop offset="0.6" stopColor="#0F0F12" />
            <stop offset="1" stopColor="#08080A" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Legs Group */}
        <g
          className={isWalking ? "animate-walker-legs" : ""}
          style={{
            animationDirection: walkDirection === "up" ? "reverse" : "normal",
          }}
        >
          {/* Left Leg */}
          <path
            d="M22 51 L20 59 L23 60 L24 51 Z"
            fill="#121214"
            stroke="#3F3F46"
            strokeWidth="0.8"
          />
          {/* Right Leg */}
          <path
            d="M32 51 L34 59 L31 60 L30 51 Z"
            fill="#121214"
            stroke="#3F3F46"
            strokeWidth="0.8"
          />
        </g>

        {/* Demon Hooded Cloak with Pointed Ears */}
        {/* Ears */}
        <path
          d="M16 22 L11 4 C11 4 17 8 20 16 Z"
          fill="url(#cloakShade)"
          stroke="#52525B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M40 22 L45 4 C45 4 39 8 36 16 Z"
          fill="url(#cloakShade)"
          stroke="#52525B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Oversized Hood & Flowing Cloak Body */}
        <path
          d="M28 8 
             C19 8 13 14 13 24 
             C13 32 10 44 8 52
             C8 54 10 55 12 55
             C20 53 24 54 28 54
             C32 54 36 53 44 55
             C46 55 48 54 48 52
             C46 44 43 32 43 24
             C43 14 37 8 28 8 Z"
          fill="url(#cloakShade)"
          stroke="#52525B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Face Void Inside Hood */}
        <ellipse cx="28" cy="26" rx="9" ry="8" fill="#000000" />

        {/* Dark Slot Eyes with Yellow Glint */}
        <g filter="url(#softGlow)">
          {/* Left Eye */}
          <ellipse
            cx="24"
            cy="26"
            rx="2.2"
            ry="1.1"
            transform="rotate(-8 24 26)"
            fill="#FCEE54"
          />
          <circle cx="24.3" cy="25.8" r="0.5" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse
            cx="32"
            cy="26"
            rx="2.2"
            ry="1.1"
            transform="rotate(8 32 26)"
            fill="#FCEE54"
          />
          <circle cx="31.7" cy="25.8" r="0.5" fill="#FFFFFF" />
        </g>

        {/* Front Cloak Overlap Seam */}
        <path
          d="M28 34 L28 53"
          stroke="#27272A"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
}
