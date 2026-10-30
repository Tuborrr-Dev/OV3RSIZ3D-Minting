"use client";

import React from "react";

export function CityscapeBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-black">
      {/* 1. Pure Pitch Black Void */}
      <div className="absolute inset-0 bg-black" />

      {/* 2. Dystopian Cyber City Skyline (Exact authentic art from oversizednft.xyz + spiced up) */}
      <div className="absolute inset-0 drone-cam flex items-end justify-center pointer-events-none">
        <div className="relative w-full h-[92vh] min-h-[600px] max-h-[1200px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
          {/* Authentic High-Res Skyline Image from oversizednft.xyz */}
          <picture>
            <source srcSet="/brand/city_skyline.webp" type="image/webp" />
            <img
              src="/brand/city_skyline.png"
              alt="OV3RSIZ3D Cyber City Silhouette"
              className="absolute inset-0 w-full h-full object-cover object-bottom opacity-85 select-none pointer-events-none"
            />
          </picture>

          {/* SPICE 1: Warning Beacon Lights on Tower Antennas (Pulsing LEDs) */}
          {/* Left Megatower Summit Beacon */}
          <div className="absolute top-[8%] left-[6.5%] sm:left-[7.5%] -translate-x-1/2 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]" />
          </div>

          {/* Left Mid-Tower Spires */}
          <div className="absolute top-[47%] left-[17%] sm:left-[18.5%] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-electricYellow animate-pulse opacity-90 shadow-[0_0_8px_#FCEE54]" />
          </div>

          {/* Right Mid-Tower Spires */}
          <div className="absolute top-[47%] right-[17%] sm:right-[18.5%] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-electricYellow animate-pulse opacity-90 shadow-[0_0_8px_#FCEE54]" />
          </div>

          {/* Right Megatower Summit Beacon */}
          <div className="absolute top-[8%] right-[6.5%] sm:right-[7.5%] translate-x-1/2 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]" />
          </div>

          {/* SPICE 2: Active Cyber Window Telemetry Flashes */}
          <div className="absolute top-[22%] left-[4.5%] hidden sm:block w-1.5 h-3 bg-neonGreen/80 shadow-[0_0_10px_#00E599] animate-pulse" />
          <div className="absolute top-[34%] left-[6.5%] hidden sm:block w-1.5 h-4 bg-neonGreen/90 shadow-[0_0_10px_#00E599] animate-pulse [animation-delay:1.1s]" />
          <div className="absolute top-[24%] right-[4.5%] hidden sm:block w-1.5 h-3 bg-neonGreen/80 shadow-[0_0_10px_#00E599] animate-pulse [animation-delay:0.7s]" />
          <div className="absolute top-[38%] right-[6.5%] hidden sm:block w-1.5 h-4 bg-neonGreen/90 shadow-[0_0_10px_#00E599] animate-pulse [animation-delay:1.5s]" />

          {/* SPICE 3: Atmospheric Ground Glow / War-Torn Cyber Haze */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-electricYellow/[0.025] blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>

      {/* 3. Subtle Reconnaissance Drone HUD Indicators */}
      <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between opacity-30 text-[9px] sm:text-[10px] font-mono tracking-widest text-electricYellow select-none">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <div>┌ [RECON_DRONE_09 // PATROL: SECTOR_WAR_ZONE]</div>
            <div className="text-white/40 text-[8px] sm:text-[9px]">ELEV: 420M | OPTIC: THERMAL_CYBER</div>
          </div>
          <div className="text-right space-y-0.5">
            <div>[ORBIT_UPLINK: ONLINE] ┐</div>
            <div className="text-white/40 text-[8px] sm:text-[9px]">LINK: RH_CHAIN_L2 // 0.001 GWEI</div>
          </div>
        </div>

        <div className="flex justify-between items-end pb-16 sm:pb-12">
          <div className="space-y-0.5">
            <div className="text-white/40 text-[8px] sm:text-[9px]">SURVEILLANCE: ACTIVE_SWEEP</div>
            <div>└ DYS_INDEX: 99.4%</div>
          </div>
          <div className="text-right space-y-0.5">
            <div className="text-white/40 text-[8px] sm:text-[9px]">STATUS: LOCK_CONFIRMED</div>
            <div>PERIMETER: SECURED ┘</div>
          </div>
        </div>
      </div>

      {/* 4. Deep Pitch Black Radial Vignette for Content Contrast */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/85 pointer-events-none" />
    </div>
  );
}
